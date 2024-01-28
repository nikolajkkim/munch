import { FlatList, View, TouchableOpacity, StyleSheet, SafeAreaView, Image, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import React, { useCallback, useState, useEffect } from 'react';


const HomeScreen = ({ navigation }) => {
  const handleLeftButtonPress = () => {
    navigation.navigate('Munchers')
    // Add your left button logic here
  };

  const handleRightButtonPress = () => {
    navigation.navigate('Munch Map')
    // Add your right button logic here
  };

 
  

  const [feedData, setFeedData] = useState([
    { id: '1', image: require('./images/stevenlee.jpg'), caption: 'Beautiful sunset' },
    { id: '2', image: require('./images/stevenbutt.png'), caption: 'Delicious meal' },
    { id: '3', image: require('./images/stevenmee.png'), caption: 'I love COCO!' },
    { id: '4', image: require('./images/stevenkim.png'), caption: 'TASTEA is AWESOME' },
    { id: '5', image: require('./images/stevenyang.png'), caption: 'Who wants to grab a bite?' },
  ]);

  const [makeNewEntry, SetMakeNewEntry] = useState(true);


  const addFeedItem = useCallback(() => {
    // Create a new item to add to the feed
    console.log("running")
    const newItem = {
      id: `${Date.now()}`,
      image: require('./images/stevenmee.png'),
      caption: 'New item caption',
    };
    console.log("addfeedstatus", feedData)
  
    // Use the setFeedData function to update the feedData state
    SetMakeNewEntry(false);
    setFeedData((prevFeedData) => [...prevFeedData, newItem]);
  }, []);
  
  // Call this function whenever you want to add a new item to the feed
  

  const handlePhotoTakingButtonPress = () => {
    addFeedItem();
    navigation.navigate('Post Screen')
  }
  

  const renderFeedItem = ({ item }) => (
    <View style={styles.feedItem}>
      <Image source={item.image} style={styles.feedImage} />
      <Text style={styles.caption}>{item.caption}</Text>
    </View>
  );
  //const { image } = route.params;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.navBar}>
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
            style={styles.munchTitleImage}
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
          
        </View>

        <FlatList
          data={feedData}
          keyExtractor={(item) => item.id}
          renderItem={renderFeedItem}
          style={styles.feedContainer}
          inverted
        />
        <View style={styles.cameraButton}>
            {/* Camera Button */}
            <TouchableOpacity onPress={handlePhotoTakingButtonPress} style={styles.button}>
              <Image
                source={require('./images/camera_button.png')}
                style={styles.iconImage}
              />
            </TouchableOpacity>
          </View>
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
  feedImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  caption: {
    marginTop: 8,
    fontSize: 16,
  },
  cameraButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 150,
  },
});

export default HomeScreen;

// friend, loading, map, feed for specific restaurant
// home, 