import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Onboarding() {
  return (
    <View>
      <Text>onboarding</Text>
      <Link href="/" className="py-2 px-5 bg-primary text-white m-2">
        Home
      </Link>
    </View>
  );
}
