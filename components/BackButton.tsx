import { View, Text, Pressable } from "react-native";
import React from "react";
import { router } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

const BackButton = () => {
  return (
    <Pressable onPress={() => router.back()} className="absolute left-6 z-10">
      <AntDesign name="leftcircleo" size={50} color="white" />
    </Pressable>
  );
};

export default BackButton;
