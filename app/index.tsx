import { Image } from "expo-image";
import { useNavigation } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import '../global.css';

const COLORS = {
  primary: '#143c70',
  secondary: '#436dc9',
  white: '#ffffff',
  text: '#ffffff',
  accent: '#e6eaf8',
};

export default function Index() {
  const navigation = useNavigation();

  return (
    <View
      className="flex-1 items-center justify-between px-4 py-12"
      style={{
        backgroundColor: COLORS.primary,
        backgroundImage: `linear-gradient(45deg, ${COLORS.secondary}, ${COLORS.primary})`,
      }}
    >
      <Text className="text-white text-3xl font-bold mt-10 text-center">
        Welcome to Echelon News
      </Text>

      <Image
        source={require('../assets/images/onboarding/ChatGPT Image Jun 26, 2025, 09_54_25 PM.png')}
        style={{ width: '100%', height: '50%', transform: [{ rotate: '12deg' }] }}
        contentFit="cover"
        transition={300}
      />

      <View className="w-full mt-6">
        <Text className="text-white text-lg text-center mb-6">
          Stay ahead with the latest insights from Echelon, Neon Media, and EconomyNext.
        </Text>

        <TouchableOpacity // replace with your actual route group
          className="bg-white rounded-xl py-3 items-center"
        >
          <Text className="text-[#143c70] font-semibold text-lg">Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
