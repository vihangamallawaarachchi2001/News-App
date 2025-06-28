/* eslint-disable react-hooks/exhaustive-deps */
import asyncStoreMethods from '@/async-store/methods';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';


export default function Index() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const validateUser = async () => {
      try {
        const isFirstTimeUser = await asyncStoreMethods.getData('isFirstTimeUser', 'string');
        console.log('FirstTimeUser:', isFirstTimeUser);
        if (isFirstTimeUser !== null && Number(isFirstTimeUser) === 1) {
          router.replace('/home'); 
        } else {
          setLoading(false); 
        }
      } catch (error) {
        console.error(error);
        setLoading(false); 
      }
    };

    validateUser();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="#FF3B30" />
      </View>
    );
  }

  const setFirstTimeUser = async () => {
  await asyncStoreMethods.storeData('1', 'isFirstTimeUser');
  router.push('/home');
};



  return (
    <LinearGradient
      colors={['#FF3B30', '#ff9500']}
      start={{ x: 0.1, y: 0.2 }}
      end={{ x: 0.9, y: 1 }}
      className="flex-1 justify-between items-center px-6 py-12"
    >
      <View className="mt-16">
        <Text className="text-white text-5xl font-extrabold tracking-tight text-center">
          THE NEWS
        </Text>
        <Text className="text-white text-base text-center mt-3 opacity-90 italic">
          Breaking. Brief. Yours.
        </Text>
      </View>

      <Image
        source={require('@/assets/images/onboarding/84fd4a18-43d8-4f85-af4e-0b618f6c5d84.png')}
        style={{
          width: 320,
          height: 320,
          borderRadius: 24,
          shadowColor: '#000',
          shadowOpacity: 0.4,
          shadowRadius: 12,
        }}
        contentFit="contain"
        transition={500}
      />

      <View className="w-full mt-8">
        <TouchableOpacity
          onPress={setFirstTimeUser}
          className="bg-white rounded-full py-4 flex-row items-center justify-center"
          style={{ shadowColor: '#000', shadowOpacity: 0.3, shadowRadius: 5 }}
        >
          <Text className="text-[#1C1C1E] font-bold text-lg mr-2">Get Started</Text>
          <Ionicons name="arrow-forward-circle" size={24} color="#1C1C1E" />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
