import React, { useContext, useState, useEffect } from "react";
import { View, Text, ImageBackground, Alert } from "react-native";
import AppGradients from "@/components/AppGradients";
import BackButton from "@/components/BackButton";
import CustomButton from "@/components/CustomButton";
import { useAudioPlayer, AudioSource, AudioPlayer } from "expo-audio";
import { MEDITATION_DATA, AUDIO_FILES } from "@/constants/MeditationData";
import { DurationContext } from "@/context/DurationContext";
import { useRouter, useLocalSearchParams } from "expo-router";
import MEDITATION_IMAGES from "@/constants/meditation-images";

const Meditate = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { duration, setDuration } = useContext(DurationContext);
  const [secondsRemaining, setSecondsRemaining] = useState<number>(duration);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  // Get audio source
  const audioFileName = MEDITATION_DATA[Number(id) - 1]?.audio;
  const audioSource: AudioSource = AUDIO_FILES[audioFileName];

  // Initialize audio player with error handling
  let player: AudioPlayer;
  try {
    player = useAudioPlayer(audioSource);
  } catch (error) {
    console.error("Error initializing audio player:", error);
    Alert.alert("Audio Error", "Failed to load audio file");
  }

  useEffect(() => {
    setSecondsRemaining(duration);
  }, [duration]);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (isRunning && secondsRemaining > 0) {
      timer = setInterval(() => {
        setSecondsRemaining((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (secondsRemaining === 0) {
      setIsRunning(false);
      stopAudio();
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isRunning, secondsRemaining]);

  const startMeditation = async () => {
    try {
      setSecondsRemaining(duration);
      setIsRunning(true);

      console.log("Starting meditation with audio:", audioFileName);
      console.log("Audio source:", audioSource);

      player.play();
      console.log("Audio started successfully");
    } catch (error) {
      console.error("Error starting meditation audio:", error);
      setIsRunning(false);
    }
  };

  const stopAudio = () => {
    player.pause();
  };

  const toggleAudioStatus = async () => {
    if (isRunning) {
      setIsRunning(false);
      stopAudio();
    } else {
      await startMeditation();
    }
  };

  const formattedTimeInMinutes = Math.floor(secondsRemaining / 60)
    .toString()
    .padStart(2, "0");

  const formattedTimeInSeconds = (secondsRemaining % 60)
    .toString()
    .padStart(2, "0");

  const adjustDurationHandler = () => {
    if (isRunning) return toggleAudioStatus();
    router.push("(modal)/adjust-duration" as any);
  };

  return (
    <View className="flex-1">
      <ImageBackground
        source={MEDITATION_IMAGES[Number(id) - 1]}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradients colors={["transparent", "rgba(0, 0, 0, 0.8)"]}>
          <BackButton />
          <View className="justify-center flex-1">
            <View className="items-center justify-center mx-auto rounded-full bg-neutral-200 w-44 h-44">
              <Text className="text-4xl text-blue-800 font-rmono">
                {formattedTimeInMinutes}:{formattedTimeInSeconds}
              </Text>
            </View>
          </View>
          <View className="mb-5">
            <CustomButton
              title="Adjust Duration"
              onPress={adjustDurationHandler}
            />
            <CustomButton
              title={isRunning ? "Pause Meditation" : "Start Meditation"}
              onPress={toggleAudioStatus}
              containerStyles="mt-5"
            />
          </View>
        </AppGradients>
      </ImageBackground>
    </View>
  );
};

export default Meditate;
