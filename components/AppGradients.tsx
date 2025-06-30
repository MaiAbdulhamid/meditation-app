import { View, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

type AppGradients = {
  children: React.ReactNode;
  colors: Array<string>;
};

const AppGradients = ({ children, colors }: AppGradients) => {
  return (
    <View className="flex-1">
      <LinearGradient
        style={StyleSheet.absoluteFillObject}
        colors={colors as any}
      />
      <View className="flex-1 mx-5 my-12">{children}</View>
    </View>
  );
};

export default AppGradients;
