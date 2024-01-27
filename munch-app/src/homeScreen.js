import { View, Text, Button, TouchableOpacity, StyleSheet, SafeAreaView, Image} from 'react-native';
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
            <Image
              source={require('./images/friends.png')}
              style={styles.iconImage}
            />
          </TouchableOpacity>
        </View>

        <Image
          source={require('./images/munch.png')}
          style={styles.iconImage}
        />

        <View style={styles.rightButtons}>
          {/* Right Button 1 */}
          <TouchableOpacity onPress={handleRightButtonPress} style={styles.button}>
            <Image
              source={require('./images/map.png')}
              style={styles.iconImage}
            />
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
    paddingHorizontal: 30,
    paddingTop: 30, // Add padding at the top to accommodate the safe area
  },
  leftButtons: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  rightButtons: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  button: {
    backgroundColor: 'rgba(0,0,0,0)',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    width: 50,
    height: 50,
  },
  iconImage: {
    width: 50,
    height: 50,
    marginRight: 5,
  },
});

export default HomeScreen;

// friend, loading, map, feed for specific restaurant
// home, 