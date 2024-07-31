import { View, Text, FlatList, Pressable, Image } from "react-native";
import React from "react";
import { GalleryPreviewData } from "@/constants/models/AffirmationCategory";
import { Link } from "expo-router";

type GuidedAffirmationsGalleryProps = {
  title: string;
  previews: GalleryPreviewData[];
};

const GuidedAffirmationsGallery = ({
  title,
  previews,
}: GuidedAffirmationsGalleryProps) => {
  const renderItem = ({ item }: any) => (
    <Link href={`/affirmations/${item.id}`} asChild>
      <Pressable>
        <View className="h-36 w-32 rounded-md mr-4">
          <Image
            source={item.image}
            resizeMode="cover"
            className="w-full h-full"
          />
        </View>
      </Pressable>
    </Link>
  );
  return (
    <View className="my-5">
      <View className="mb-2">
        <Text className="text-white text-xl font-bold">{title}</Text>
      </View>
      <View className="space-y-2">
        <FlatList
          data={previews}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default GuidedAffirmationsGallery;
