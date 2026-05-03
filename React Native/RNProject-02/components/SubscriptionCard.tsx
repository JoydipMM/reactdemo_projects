import clsx from "clsx";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

const SubscriptionCard = ({
  name,
  price,
  currency,
  icon,
  billing,
  color,
  category,
  plan,
  paymentMethod,
  expanded,
  onPress,
}: SubscriptionCardProps) => {
  return (
    <Pressable
      onPress={onPress}
      className={clsx(
        "sub-card mb-3",
        expanded ? "sub-card-expanded" : "bg-card",
      )}
      style={!expanded && color ? { backgroundColor: color } : undefined}
    >
      <View className="sub-head">
        <View className="sub-main">
          <Image source={icon} className="sub-icon" />
          <View className="sub-copy">
            <Text numberOfLines={1} className="sub-title">
              {name}
            </Text>
            <Text numberOfLines={1} ellipsizeMode="tail" className="sub-meta">
              {category?.trim() || plan?.trim() || paymentMethod?.trim()}
              {/* add renewal date with frmat */}
            </Text>
          </View>
        </View>
        <View className="sub-price-box">
          <Text className="sub-price">{price}</Text>
          <Text className="sub-billing">{billing}</Text>
        </View>
      </View>
      {expanded && (
        <View className="sub-row">
          <View className="sub-row-copy">
            <Text className="sub-label">Currency</Text>
            <Text className="sub-value">{currency}</Text>
          </View>
          <View className="sub-row-copy">
            <Text className="sub-label">Price</Text>
            <Text className="sub-value">{price}</Text>
          </View>
        </View>
      )}
    </Pressable>
  );
};

export default SubscriptionCard;
