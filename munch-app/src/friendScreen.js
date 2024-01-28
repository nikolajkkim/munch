import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView, Image} from 'react-native';

const FriendScreen = ({ navigation }) => {
  const handleRightButtonPress = () => {
    navigation.navigate('Home')
  }
  const feedData = [
    { id: '1', caption: 'Beautiful sunset' },
    { id: '2', caption: 'Delicious meal' },
    { id: '3', caption: 'I love COCO!' },
    { id: '4', caption: 'TASTEA is AWESOME' },
    { id: '5', caption: 'Who wants to grab a bite?' },
  ];

  const renderFeedItem = ({ item }) => (
    <View style={styles.feedItem}>
      <Text style={styles.caption}>{item.caption}</Text>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
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
    leftButtons: {
      flexDirection: 'row',
      alignItems: 'flex-start',
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
    feedContainer: {
      flex: 1,
      marginTop: 100,
      paddingHorizontal: 16,
      paddingBottom: 16,
    },
    feedItem: {
      marginBottom: 16,
    },
    caption: {
      marginTop: 8,
      fontSize: 16,
    },
  });

export default FriendScreen;