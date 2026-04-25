import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
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
        href="/subscription/spotify"
        className="py-2 px-5 bg-primary text-white m-2"
      >
        Spotify Subscription
      </Link>
      <Link
        href={{
          pathname: "/subscription/[id]",
          params: { id: "anitigravity" },
        }}
        className="py-2 px-5 bg-primary text-white m-2"
      >
        anitigravity Subscription
      </Link>
    </View>
  );
}
