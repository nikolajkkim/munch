
import './App.css';
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './homeScreen';
import FriendScreen from './friendScreen';
import MapScreen from './mapScreen';
import UserPostScreen from './userPostScreen';



const Stack = createNativeStackNavigator();

function App() {
return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Munchers" component={FriendScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Munch Map" component={MapScreen} />
        <Stack.Screen name="Post Screen" component={UserPostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

