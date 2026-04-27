import "@/global.css";

import { styled } from "nativewind";
import { FlatList, Image, Text, View } from "react-native";
import {
  HOME_BALANCE,
  HOME_USER,
  UPCOMING_SUBSCRIPTIONS,
} from "../constants/data";
import images from "../constants/images";

// SafeAreaView would not accept the class name, So need to active styled component, for that import the SafeAreaView as differnt name useing "as RNSafAreaView"
import ListHeading from "@/components/ListHeading";
import UpcomingSubscriptionCard from "@/components/UpcomingSubscriptionCard";
import { formatCurrency } from "@/lib/utils";
import dayjs from "dayjs";
import { SafeAreaView as RNSafAreaView } from "react-native-safe-area-context";
import { icons } from "../constants/icons";
const SafeAreaView = styled(RNSafAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
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
            renderItem={({ item }) => <UpcomingSubscriptionCard {...item} />}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          ></FlatList>
        </View>
      </View>

      {/* <View className="flex-1 items-center justify-center bg-background"> */}
      {/* <Text className="text-5xl text-success font-sans-extrabold">Home</Text> */}
      {/* <Text className="text-7xl text-success font-bold">Home</Text> */}
      {/* <Link
        href="/onboarding"
        className="py-2 px-5 bg-primary text-white m-2 font-sans-bold"
      >
        Onboarding Page
      </Link>
      <Link
        href="/(auth)/signin"
        className="py-2 px-5 bg-primary text-white m-2 font-sans-bold"
      >
        Signin
      </Link>
      <Link
        href="/subscriptions/spotify"
        className="py-2 px-5 bg-primary text-white m-2 font-sans-bold"
      >
        Spotify Subscription
      </Link>
      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "anitigravity" },
        }}
        className="py-2 px-5 bg-primary text-white m-2 font-sans-bold"
      >
        anitigravity Subscription
      </Link> */}
      {/* </View> */}
    </SafeAreaView>
  );
}
