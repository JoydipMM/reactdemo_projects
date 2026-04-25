import clsx from "clsx";
import { Tabs } from "expo-router";
import React from "react";
import { Image, View } from "react-native";
import { tabs } from "../constants/data";

const TabsLayout = () => {
  const TabIcon = ({ focused, icon }: TabIconProps) => {
    return (
      <View className="tabs-icons">
        <View className={clsx("tabs-pill", focused && "tabs-active")}>
          <Image source={icon} className="tabs-glyph" />
        </View>
      </View>
    );
  };

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={tab.icon} />
            ),
            href: tab.href,
          }}
        />
      ))}
      {/* <Tabs.Screen name="index" options={{ title: "Home" }} />
            <Tabs.Screen name="subscriptions" options={{ title: "Subscriptions" }} />
            <Tabs.Screen name="subscriptions/[id]" options={{ href: null }} />
            <Tabs.Screen name="subscriptions/spotify" options={{ href: null }} />
            <Tabs.Screen name="insights" options={{ title: "Insights" }} />
            <Tabs.Screen name="settings" options={{ title: "Settings" }} /> */}
    </Tabs>
  );
};

export default TabsLayout;
