// AdjustDuration.tsx
import React, { useContext } from "react";
import { View, Text } from "react-native";
import AppGradients from "@/components/AppGradients";
import BackButton from "@/components/BackButton";
import CustomButton from "@/components/CustomButton";
import { DurationContext } from "@/context/DurationContext";
import { useRouter } from "expo-router";

const durations = [
  { label: "10 seconds", value: 10 },
  { label: "5 minutes", value: 5 * 60 },
  { label: "10 minutes", value: 10 * 60 },
  { label: "15 minutes", value: 15 * 60 },
];

const AdjustDuration = () => {
  const { setDuration } = useContext(DurationContext)!;
  const router = useRouter();

  const durationPressHandler = (duration: number) => {
    setDuration(duration);
    router.back();
  };

  return (
    <View className="flex-1">
      <AppGradients colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <View className="flex-1 relative">
          <BackButton />
        </View>
        <View className="justify-center mt-12">
          <Text className="text-center text-white font-bold text-3xl mb-8">
            Adjust Your Meditation Duration
          </Text>
          <View>
            {durations.map(({ label, value }) => (
              <CustomButton
                key={label}
                title={label}
                onPress={() => durationPressHandler(value)}
                containerStyles="mb-5"
              />
            ))}
          </View>
        </View>
      </AppGradients>
    </View>
  );
};

export default AdjustDuration;
