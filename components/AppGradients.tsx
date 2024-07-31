import { SafeAreaView } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

type AppGradients = {
  children: React.ReactNode;
  colors: Array<string>;
};

const AppGradients = ({ children, colors }: AppGradients) => {
  return (
    <LinearGradient className="flex-1" colors={colors}>
      <SafeAreaView className="flex-1 mx-5 my-12">{children}</SafeAreaView>
    </LinearGradient>
  );
};

export default AppGradients;
