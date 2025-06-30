import { ImageBackground, SafeAreaView, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import BeachImage from "@/assets/meditation-images/beach.webp";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";
import AppGradients from "@/components/AppGradients";
import "../global.css";

const App = () => {
  const router = useRouter();

  return (
    <View className="flex-1">
      <ImageBackground
        source={BeachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradients colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
          <SafeAreaView className="justify-between flex-1">
            <View className="justify-end flex-1 h-full">
              <Text className="text-4xl font-bold text-center text-white">
                Simple Meditation
              </Text>
              <Text className="mt-3 text-2xl text-center text-white font-regular">
                Simplifying Meditation to Everyone
              </Text>
            </View>
            <View className="py-9">
              <CustomButton
                onPress={() => router.push("/nature-meditate")}
                title="Get Started"
              />
            </View>
          </SafeAreaView>
        </AppGradients>
        <StatusBar style="light" />
      </ImageBackground>
    </View>
  );
};

export default App;
