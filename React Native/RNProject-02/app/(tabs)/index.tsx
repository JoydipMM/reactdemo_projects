import "@/global.css";

import { Redirect } from "expo-router";
import { styled } from "nativewind";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";
import {
  HOME_BALANCE,
  HOME_SUBSCRIPTIONS,
  HOME_USER,
  UPCOMING_SUBSCRIPTIONS,
} from "../constants/data";
import images from "../constants/images";

// SafeAreaView would not accept the class name, So need to active styled component, for that import the SafeAreaView as differnt name useing "as RNSafAreaView"
import ListHeading from "@/components/ListHeading";
import SubscriptionCard from "@/components/SubscriptionCard";
import UpcomingSubscriptionCard from "@/components/UpcomingSubscriptionCard";
import { formatCurrency } from "@/lib/utils";
import dayjs from "dayjs";
import { useState } from "react";
import { SafeAreaView as RNSafAreaView } from "react-native-safe-area-context";
import { icons } from "../constants/icons";
const SafeAreaView = styled(RNSafAreaView);

import { useAuth, useClerk, useUser, useUserProfileModal } from "@clerk/expo";

export default function App() {
  const [expandedSubscriptionId, setExpandedSubscriptionId] =
    useState<String | null>(null);

  const { isSignedIn, isLoaded } = useAuth({ treatPendingAsSignedOut: false });
  const { user } = useUser();
  const { signOut } = useClerk();
  const { presentUserProfile } = useUserProfileModal();

  if (!isLoaded) {
    return (
      <View className="flex-1 items-center justify-center bg-background">
        <ActivityIndicator size="large" color="#ea7a53" />
      </View>
    );
  }

  if (!isSignedIn) {
    return <Redirect href="/(auth)/signin" />;
  }

  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <View className="flex-1">
        <View>
          {/* <SubscriptionCard
            expanded={expandedSubscriptionId === HOME_SUBSCRIPTIONS[0].id}
            onPress={() =>
              setExpandedSubscriptionId((currentId) =>
                currentId === HOME_SUBSCRIPTIONS[0].id
                  ? null
                  : HOME_SUBSCRIPTIONS[0].id,
              )
            }
            {...HOME_SUBSCRIPTIONS[0]}
          /> */}
          <FlatList
            ListHeaderComponent={() => (
              <>
                <View className="home-header">
                  <View className="home-user">
                    <Image source={images.avatar} className="home-avatar" />
                    <Text className="home-user-name">{HOME_USER?.name}</Text>
                  </View>
                  <Image source={icons.add} className="home-add-icon" />
                </View>

                <View className="home-balance-card">
                  <Text className="home-balance-label">Balance</Text>
                  <View className="home-balance-row">
                    <Text className="home-balance-amount">
                      {formatCurrency(HOME_BALANCE?.amount)}
                    </Text>
                    <Text className="home-balance-date">
                      {dayjs(HOME_BALANCE?.nextRenewalDate).format("DD/MM")}
                    </Text>
                  </View>
                </View>

                <View>
                  <View>
                    <ListHeading title="Upcoming" />
                  </View>
                  <View>
                    {/* <UpcomingSubscriptionCard data={UPCOMING_SUBSCRIPTIONS[0]} /> */}
                    <FlatList
                      data={UPCOMING_SUBSCRIPTIONS}
                      renderItem={({ item }) => (
                        <UpcomingSubscriptionCard {...item} />
                      )}
                      keyExtractor={(item) => item.id}
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      ListEmptyComponent={<Text>NO Upcoming contnet</Text>}
                    ></FlatList>
                  </View>
                </View>
                <View>
                  <ListHeading title="All Subscriptions" />
                </View>
              </>
            )}
            data={HOME_SUBSCRIPTIONS}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <SubscriptionCard
                expanded={expandedSubscriptionId === item.id}
                onPress={() =>
                  setExpandedSubscriptionId((currentId) =>
                    currentId === item.id ? null : item.id,
                  )
                }
                {...item}
              />
            )}
            ListFooterComponent={() => (
              <>
                <View>
                  <Text className="home-footer-label">
                    Remaining bottom content
                  </Text>
                </View>
              </>
            )}
            contentContainerClassName="pb-14"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}