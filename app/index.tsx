import { Image } from "expo-image";
import { Text, View } from "react-native";
import '../global.css';

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Image
        source={'../assets/images/onboarding/girl-reading-news-paper.png'}
        alt="Girl Sitting on a bech reading newspaper"
        className="w-[400px] h-1/2"
      />
      <Text>
        Hello world
      </Text>
    </View>
  );
}
