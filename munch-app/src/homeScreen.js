import { View, Text, Button } from 'react-native';
import * as React from 'react';

const HomeScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <View style={{ marginTop: 100 }}>
          <Button
            title="Go to Second Screen"
            onPress={() => navigation.navigate('SecondScreen')}
          />
        </View>
        <Button
          title="Go to Third Screen"
          onPress={() => navigation.navigate('ThirdScreen')}
        />
      </View>
    );
  }

export default HomeScreen;

// friend, loading, map, feed for specific restaurant
// home, post