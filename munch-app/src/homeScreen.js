import { View, Text, Button, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native';
import * as React from 'react';

const HomeScreen = ({ navigation }) => {
  const handleLeftButtonPress = () => {
    alert('Left Button Pressed');
    // Add your left button logic here
  };

  const handleRightButtonPress = () => {
    alert('Right Button Pressed');
    // Add your right button logic here
  };

    return (
      <SafeAreaView style={styles.navBar}>
        <View style={styles.leftButtons}>
        {/* Left Button 1 */}
        <TouchableOpacity onPress={handleLeftButtonPress} style={styles.button}>
          <Text>Left Button 1</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.rightButtons}>
          {/* Right Button 1 */}
          <TouchableOpacity onPress={handleRightButtonPress} style={styles.button}>
            <Text>Right Button 1</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  navBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20, // Add padding at the top to accommodate the safe area
  },
  leftButtons: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  rightButtons: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
});

export default HomeScreen;

// friend, loading, map, feed for specific restaurant
// home, 