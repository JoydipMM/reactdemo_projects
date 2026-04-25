import { Link, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SubscriptionDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>subscription/[SubscriptionDetails] - of {id}</Text>
      <Link href="/" className="py-2 px-5 bg-primary text-white m-2">
        Go back
      </Link>
    </View>
  );
};

export default SubscriptionDetails;
