import { FlatList, View, TouchableOpacity, StyleSheet, SafeAreaView, Image, Text } from 'react-native';
import * as React from 'react';

const HomeScreen = ({ navigation }) => {
  const handleLeftButtonPress = () => {
    navigation.navigate('Munchers')
    // Add your left button logic here
  };

  const handleRightButtonPress = () => {
    navigation.navigate('Post Screen')
    // Add your right button logic here
  };

  const feedData = [
    { id: '1', image: require('./images/stevenlee.jpg'), caption: 'Beautiful sunset' },
    { id: '2', image: require('./images/stevenlee.jpg'), caption: 'Delicious meal' },
    { id: '3', image: require('./images/stevenlee.jpg'), caption: 'I love COCO!' },
    { id: '4', image: require('./images/stevenlee.jpg'), caption: 'TASTEA is AWESOME' },
    { id: '5', image: require('./images/stevenlee.jpg'), caption: 'Who wants to grab a bite?' },
  ];

  const renderFeedItem = ({ item }) => (
    <View style={styles.feedItem}>
      <Image source={item.image} style={styles.feedImage} />
      <Text style={styles.caption}>{item.caption}</Text>
    </View>
  );

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
});

export default HomeScreen;

// friend, loading, map, feed for specific restaurant
// home, 