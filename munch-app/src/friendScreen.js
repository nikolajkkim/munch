import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, SafeAreaView, Image} from 'react-native';

const FriendScreen = () => {
  const handleRightButtonPress = () => {
    navigation.navigate('Home')
  }
  return (
    <SafeAreaView style={{ flex: 0.1}}>
        <View style={styles.navBar}>
        <View style={styles.rightButtons}>
        {/* BACK TO HOME BUTTON! */}
          <TouchableOpacity onPress={handleRightButtonPress} style={styles.button}>
            <Image
              source={require('./images/friends.png')}
              style={styles.iconImage}
            />
          </TouchableOpacity>
        <Image
        source={require('./images/munch.png')}
        style={styles.munchTitleImage}
        />
        </View>
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
    paddingHorizontal: 10,
    paddingTop: 30, // Add padding at the top to accommodate the safe area
  },

  rightButtons: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingRight: 15,
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
  },
  munchTitleImage: {
    width: 150,
    height: 50,
    alignSelf: 'center',
    marginLeft: 12,
    marginTop: 20,
  },
});

export default FriendScreen;