import {
  View,
  Text,
  ImageBackground,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, router } from "expo-router";
import { GalleryPreviewData } from "@/constants/models/AffirmationCategory";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallary";
import AppGradients from "@/components/AppGradients";
import AntDesign from "@expo/vector-icons/AntDesign";
import BackButton from "@/components/BackButton";

const AffirmationPractice = () => {
  const { itemId } = useLocalSearchParams();
  const [affirmation, setAffirmation] = useState<GalleryPreviewData>();
  const [sentences, setSentences] = useState<Array<string>>([]);

  useEffect(() => {
    for (let idx = 0; idx < AFFIRMATION_GALLERY.length; idx++) {
      const affirmationData = AFFIRMATION_GALLERY[idx].data;
      const affirmationToStart = affirmationData.find(
        (a) => a.id === Number(itemId)
      );

      if (affirmationToStart) {
        setAffirmation(affirmationToStart);
        const affirmationTextArray = affirmationToStart.text.split(".");
        // Remove Last element if empty

        if (affirmationTextArray[affirmationTextArray.length - 1] === "") {
          affirmationTextArray.pop();
        }
        setSentences(affirmationTextArray);

        return;
      }
    }
  }, []);
  return (
    <View className="flex-1">
      <ImageBackground
        source={affirmation?.image}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradients colors={["rgba(0, 0, 0, 0.3)", "rgba(0, 0, 0, 0.9)"]}>
          <BackButton />
          <ScrollView className="mt-20" showsHorizontalScrollIndicator={false}>
            <View className="h-full justify-center">
              <View className="h-4/5 justify-center">
                {sentences.map((sentence, idx) => (
                  <Text
                    key={idx}
                    className="text-white text-3xl font-bold mb-12"
                  >
                    {sentence}.
                  </Text>
                ))}
              </View>
            </View>
          </ScrollView>
        </AppGradients>
      </ImageBackground>
    </View>
  );
};

export default AffirmationPractice;
