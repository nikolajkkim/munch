import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView, Image} from 'react-native';

const FriendScreen = ({ navigation }) => {
  const handleBackButtonPress = () => {
    navigation.navigate('Home')
  }
  const feedData = [
    { id: '1', username: 'Custo Yang', munchCount: 5, profilePicture: require('./images/stevenlee.jpg') },
    { id: '2', username: 'Steven Lee', munchCount: 500, profilePicture: require('./images/stevenlee.jpg') },
    { id: '2', username: 'Nikolaj Kim', munchCount: 99, profilePicture: require('./images/stevenlee.jpg') },
    { id: '2', username: 'Jaime Jaime', munchCount: 1, profilePicture: require('./images/stevenlee.jpg') },
    { id: '2', username: 'Shindler :(', munchCount: 0, profilePicture: require('./images/stevenlee.jpg') },

  ];

  const renderFeedItem = ({ item }) => (
    <View style={styles.feedItem}>
        <Image source={item.profilePicture} style={styles.profilePicture} />
        <View style={styles.textContainer}>
        <Text style={styles.username}>{item.username}</Text>
        <Text style={styles.munchCount}>munched {item.munchCount} times</Text>
        </View>
    </View>
    );

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.navBar}>
        <View style={styles.nackButtons}>
        {/* BACK TO HOME BUTTON! */}
          <TouchableOpacity onPress={handleBackButtonPress} style={styles.button}>
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
        <FlatList
          data={feedData}
          keyExtractor={(item) => item.id}
          renderItem={renderFeedItem}
          style={styles.feedContainer}
        />
    </SafeAreaView>
    );


  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    navBar: {
      flex: 0.01,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingTop: 30, // Add padding at the top to accommodate the safe area
    },
    backButtons: {
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
    feedContainer: {
      flex: 1,
      marginTop: 100,
      paddingHorizontal: 16,
      paddingBottom: 16,
    },
    feedItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start', // Center items horizontally
        width: '100%',
        marginBottom: 16,
    },
    profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    textContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start', // Align text to the left
    },
    username: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    munchCount: {
        fontSize: 14,
    },
  });

export default FriendScreen;