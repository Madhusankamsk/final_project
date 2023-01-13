import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
        <Button title='First' onPress={()=> navigation.navigate("First")}/>
        <Button title='Screen' onPress={()=> navigation.navigate("Second")}/>
        <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:70,
    height:50
  },
});