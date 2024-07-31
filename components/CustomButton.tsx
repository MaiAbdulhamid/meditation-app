import { Text, TouchableOpacity } from "react-native";
import React from "react";
type CustomButtonProps = {
  onPress: () => void;
  title: string;
  textStyles?: string;
  containerStyles?: string;
};
const CustomButton = ({
  onPress,
  title,
  textStyles = "",
  containerStyles = "",
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      className={`bg-white rounded-xl min-h-[62px] justify-center ${containerStyles}`}
    >
      <Text className={`font-semibold text-lg text-center ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
