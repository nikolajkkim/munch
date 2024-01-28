import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import MapView from 'react-native-maps'

let locationOfInterest = {
  title: "Cha for Tea",
  location: {
    latitude: 33.650626,
    longitude: -117.838946
  },

  }


const MapScreen = () => {
  const onRegionChange = (region) => {
  }
  return (
    <View style={styles.container}>
      <MapView 
       style = {styles.map}
       onRegionChange = {onRegionChange}
       initialRegion = {{"latitude": 33.64993110376333, "latitudeDelta": 0.016433225744130198, "longitude": -117.83941458293062, "longitudeDelta": 0.013158430752554295}}
       >

      </MapView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '80%',
  }

});

export default MapScreen;
