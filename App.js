import Home from './src/screens/Home'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Second from './src/screens/NavScreens/Second'
import First from './src/screens/NavScreens/First'

const Stack = createNativeStackNavigator()

export default function App(){
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
              name='Home' 
              component={Home} 
              options={{title:"Welcome"}} 
          />
          <Stack.Screen 
              name='First' 
              component={First}
          />
          <Stack.Screen 
              name='Second' 
              component={Second}
          />
        </Stack.Navigator>
      </NavigationContainer>
  )
}


// import { StyleSheet, Text, View } from 'react-native';
// import { StatusBar } from 'expo-status-bar';


// export default function First() {
//   return (
//     <View style={styles.container}>
//       <Text>First</Text>
//       <StatusBar/>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
