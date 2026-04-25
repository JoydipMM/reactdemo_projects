import React from "react";
import { Text } from "react-native";

import { styled } from "nativewind";
import { SafeAreaView as RNSafAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafAreaView);

const Subscriptions = () => {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text>subscriptions</Text>
    </SafeAreaView>
  );
};

export default Subscriptions;
