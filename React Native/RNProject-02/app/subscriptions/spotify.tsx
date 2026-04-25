import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Spotify = () => {
  return (
    <View>
      <Text>Spotify</Text>
      <Link href="/" className="py-2 px-5 bg-primary text-white m-2">
        Go back
      </Link>
    </View>
  );
};

export default Spotify;
