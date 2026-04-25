import "@/global.css";
import { Link } from "expo-router";
import { Text } from "react-native";

import { styled } from "nativewind";
// SafeAreaView would not accept the class name, So need to active styled component, for that import the SafeAreaView as differnt name useing "as RNSafAreaView"
import { SafeAreaView as RNSafAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      {/* <View className="flex-1 items-center justify-center bg-background"> */}
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding" className="py-2 px-5 bg-primary text-white m-2">
        Onboarding Page
      </Link>
      <Link
        href="/(auth)/signin"
        className="py-2 px-5 bg-primary text-white m-2"
      >
        Signin
      </Link>
      <Link
        href="/subscriptions/spotify"
        className="py-2 px-5 bg-primary text-white m-2"
      >
        Spotify Subscription
      </Link>
      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "anitigravity" },
        }}
        className="py-2 px-5 bg-primary text-white m-2"
      >
        anitigravity Subscription
      </Link>
      {/* </View> */}
    </SafeAreaView>
  );
}
