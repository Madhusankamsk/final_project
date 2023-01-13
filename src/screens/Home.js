import { StatusBar } from 'expo-status-bar';
import { Button,View } from 'react-native';

export default function Home({navigation}) {
  return (
    <View className="flex-1 items-center justify-center bg-white">
        <Button title='First' onPress={()=> navigation.navigate("First")}/>
        <Button title='Screen' onPress={()=> navigation.navigate("Second")}/>
        <StatusBar style='auto' />
    </View>
  );
}