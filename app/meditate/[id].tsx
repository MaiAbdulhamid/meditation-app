import React, { useContext, useState, useEffect } from "react";
import { View, Text, ImageBackground } from "react-native";
import AppGradients from "@/components/AppGradients";
import BackButton from "@/components/BackButton";
import CustomButton from "@/components/CustomButton";
import { Audio } from "expo-av";
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
  const [audioSound, setAudioSound] = useState<Audio.Sound | null>(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);

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

  useEffect(() => {
    return () => {
      audioSound?.unloadAsync();
    };
  }, [audioSound]);

  const initializeAudioSound = async () => {
    if (!audioSound) {
      const audioFileName = MEDITATION_DATA[Number(id) - 1].audio;
      const audio = AUDIO_FILES[audioFileName];
      const { sound } = await Audio.Sound.createAsync(audio);
      setAudioSound(sound);
      return sound;
    }
    return audioSound;
  };

  const startMeditation = async () => {
    setSecondsRemaining(duration); // Reset to initial duration on start
    setIsRunning(true);
    const sound = await initializeAudioSound();
    if (!isAudioPlaying) {
      await sound.playAsync();
      setIsAudioPlaying(true);
    }
  };

  const stopAudio = async () => {
    if (audioSound) {
      await audioSound.stopAsync();
      setIsAudioPlaying(false);
    }
  };

  const toggleAudioStatus = async () => {
    if (isRunning) {
      setIsRunning(false);
      await stopAudio();
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
    router.push("(modal)/adjust-duration");
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
          <View className="flex-1 justify-center">
            <View className="mx-auto bg-neutral-200 rounded-full w-44 h-44 justify-center items-center">
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
