import {Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function First() {
  return (
    <View className="flex-1 items-center justify-center bg-red">
      <Text>First</Text>
      <StatusBar/>
    </View>
  );
}