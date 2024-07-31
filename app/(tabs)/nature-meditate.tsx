import { View, Text, FlatList, Pressable, ImageBackground } from "react-native";
import React from "react";
import AppGradients from "@/components/AppGradients";
import { StatusBar } from "expo-status-bar";
import { MEDITATION_DATA } from "@/constants/MeditationData";
import MEDITATION_IMAGES from "@/constants/meditation-images";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

const NatureMeditate = () => {
  const renderItem = ({ item }: any) => (
    <Pressable
      onPress={() => router.push(`/meditate/${item.id}`)}
      className="h-48 my-3 rounded-md overflow-hidden"
    >
      <ImageBackground
        source={MEDITATION_IMAGES[item.id - 1]}
        resizeMode="cover"
        className="flex-1 rounded-lg justify-center"
      >
        <LinearGradient
          colors={["transparent", "rgba(0, 0, 0, 0.8)"]}
          className="flex-1 justify-center items-center"
        >
          <Text className="text-gray-100 text-center text-3xl font-bold">
            {item.title}
          </Text>
        </LinearGradient>
      </ImageBackground>
    </Pressable>
  );
  return (
    <View className="flex-1">
      <AppGradients colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <View className="mb-4">
          <Text className="text-gray-200 mb-3 font-bold text-4xl">
            Welcome!
          </Text>
          <Text className="text-indigo-100 text-xl font-medium">
            Start Your Meditation Practice today
          </Text>
        </View>
        <View>
          <FlatList
            data={MEDITATION_DATA}
            className="mb-20"
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </AppGradients>
      <StatusBar style="light" />
    </View>
  );
};

export default NatureMeditate;
