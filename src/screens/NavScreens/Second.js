import {Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function Second() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Second</Text>
      <StatusBar/>
    </View>
  );
}