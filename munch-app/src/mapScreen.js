import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, FlatList} from 'react-native';
import MapView, { Marker }from 'react-native-maps'

let locationOfInterest = [
  {
    title: "Cha for Tea",
    location: {
      latitude: 33.650722208692294,
      longitude: -117.8387893419726,
    },
    rating: 4.5
  },
  {
  title: "Chipotle",
  location: {
    latitude: 33.64947302902836,
    longitude: -117.8390386850484,
    },
    rating: 5

  },
  {
    title: "Share Tea",
    location: {
      latitude: 33.65058945437479,
      longitude: -117.83813169378428,
      },
      rating: 3.8

    }
  

]

const images = [
  require('./images/stevenlee.jpg'),
  require('./images/stevenhee.png'),
  require('./images/stevendee.png'),

];

const images2 = [
  require('./images/stevenmee.png'),
  require('./images/stevenkim.png'),
  require('./images/stevenvargas.png'),
]

const images3 = [
  require('./images/stevenlee.jpg'),
  require('./images/stevendee.png'),
  require('./images/stevenkim.png'),
]


// const renderRestaurantItem = ({ item }) => (
//   <View style={styles.restaurantItem}>
//     <View style={styles.textContainer}>
//       <Text style={styles.title}>{item.title}</Text>
//       <Text style={styles.rating}> {item.rating} stars</Text>
//     </View>
//   </View>
// );

//redone with list numbers
const renderRestaurantItem = ({ item, index }) => (
  <View style={styles.restaurantItem}>
    <View style={styles.textContainer}>
      <Text style={styles.title}>{`${index + 1}. ${item.title}`}</Text>
      <Text style={styles.rating}>{`${item.rating} stars`}</Text>
      <View style={styles.icons}>
        {images.map((uri, index) => {
          return (
            <Image
              alt="avatar"
              style={[styles.avatars, { marginLeft: -(48 / images.length) }]}
              source={ uri }
              key={index}
            />
          );  
        })}
      </View>
    </View>
  </View>
);



const MapScreen = ({ navigation }) => {
  const handleBackButtonPress = () => {
    navigation.navigate('Home')
  }
  const onRegionChange = (region) => {
    console.log(region)
  }

  const showTheLocationOfPins = () => {
    return locationOfInterest.map((item, index) => {
      return (
        <Marker
          keys = {index}
          coordinate = {item.location}
          title = {item.title}
          />
          
      )
    });

  };
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.navBar}>
      
      <View style={styles.backButtons}>
        {/* BACK TO HOME BUTTON! */}
        <TouchableOpacity onPress={handleBackButtonPress} style={styles.button}>
          <Image
            source={require('./images/backArrow.png')}
            style={styles.iconImage}
          />
          </TouchableOpacity>

          <Image
        source={require('./images/munchers.png')}
        style={styles.munchTitleImage}
      />
      </View>
    </View>
    <MapView
      style={styles.map}
      onRegionChange={onRegionChange}
      initialRegion={{ "latitude": 33.64993110376333, "latitudeDelta": 0.016433225744130198, "longitude": -117.83941458293062, "longitudeDelta": 0.013158430752554295 }}
    //  THESE ARE THE CORDINATES FOR UTC!!!!
    >
      {showTheLocationOfPins()}
    </MapView>
    {/* <FlatList
        data={locationOfInterest}
        renderItem={renderRestaurantItem}
        keyExtractor={(item) => item.title}
      /> */}
    <View style={styles.rowContainer}>
      <FlatList
      data={locationOfInterest}
      renderItem={renderRestaurantItem}
      keyExtractor={(item) => item.title}
      contentContainerStyle={styles.flatListContainer}
      style={styles.flatlist}
    />
      {/* <View style={styles.icons}>
        {images.map((uri, index) => {
          return (
            <Image
              alt="avatar"
              style={[styles.avatars, { marginLeft: -(48 / images.length) }]}
              source={ uri }
              key={index}
            />
          );  
        })}
      </View>
      <View style={styles.icons2}>
        {images2.map((uri, index) => {
          return (
            <Image
              alt="avatar"
              style={[styles.avatars, { marginLeft: -(48 / images2.length) }]}
              source={ uri }
              key={index}
            />
          );  
        })}
      </View>
      <View style={styles.icons3}>
        {images3.map((uri, index) => {
          return (
            <Image
              alt="avatar"
              style={[styles.avatars, { marginLeft: -(48 / images3.length) }]}
              source={ uri }
              key={index}
            />
          );  
        })}
      </View> */}
</View>

  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '60%',
    marginTop: 70
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
    alignItems: 'flex-start',
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
    marginTop: 30,
    width: 30,
    height: 30,
  },
  munchTitleImage: {
    width: 190,
    height: 70,
    alignSelf: 'center',
    marginLeft: 12,
    marginTop: 32,
 },
 restaurantItem: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start', // Center items horizontally
  width: '100%',
  marginBottom: 16,
  
},
rating: {
  fontFamily: 'Milky Nice',
  fontSize: 15,
  marginBottom: 5,
  
},
title: {
  fontSize: 15,
  fontWeight: 'bold',
},
flatListContainer: {
  padding: 16, // Adjust the padding as needed
},

icons: {
  flexDirection: 'row',
  justifyContent: 'center',  // Align items to the center
  alignItems: 'center', // Align items to the center
},
icons2: {
  flexDirection: 'column',
  justifyContent: 'center',  // Align items to the center
  alignItems: 'center', // Align items to the center
},
icons3: {
  flexDirection: 'column',
  justifyContent: 'center',  // Align items to the center
  alignItems: 'center', // Align items to the center
},
avatars:{
  width: 32,
  height: 32,
  borderRadius: 9999,
  borderWidth: 3,
  borderColor: '#FFF'
},
rowContainer:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  backgroundColor:'pink'
},
flatlist:{
  backgroundColor: 'white',
  padding: 4,
  flexDirection:'rows'
},
textContainer: {
  flexDirection:'row',
  flex:1,
  justifyContent: 'space-between'
}
});

export default MapScreen;
