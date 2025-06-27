import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';

export const Home = () => {
  const router = useRouter();

  return (
    <ScrollView
      className="flex-1 bg-white"
      contentContainerStyle={{ paddingVertical: 48, paddingHorizontal: 16, alignItems: 'center' }}
    >
      <Text>This is Home Page</Text>
      <TouchableOpacity onPress={() => router.back()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Home;
