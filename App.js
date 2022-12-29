// import * as React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import Home from './src/screen/Home';
//
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Home />
//     </NavigationContainer>
//   );
// }

// In App.js in a new project

// import * as React from 'react';
// import {View, Text} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
//
// function HomeScreen() {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }
//
// const Stack = createNativeStackNavigator();
//
// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} options={{ headerStyle: {backgroundColor: 'pink' } }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
//
// export default App;
import * as React from 'react';
import Navigation from './src/navigations/Navigation';

function App() {
  return <Navigation />;
}

export default App;
