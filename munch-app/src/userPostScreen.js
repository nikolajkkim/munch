// npx expo install expo-media-library
// npx expo install expo-camera
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  screenHeight,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import CButton from "./components/CButton";
// // import {starRating, setStarRating, RatingBar} from './components/RatingBar';
// import RatingBar from "./components/RatingBar";

export default function App() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.on);
  const cameraRef = useRef(null);

  const [starRating, setStarRating] = useState(null);

  const [text, setText] = useState('')
  const [textInputHeight, setTextInputHeight] = useState(35); // Initial height
  const navigation = useNavigation();


  // PERMISSIONS
  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);
  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePicture = async () => {
    // take picture, if we get picture, store uri into image. if not, print error message
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        setImage(data.uri);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const saveImage = async () => {
    if (image) {
      try {
        await MediaLibrary.createAssetAsync(image);
        alert("Picture saved!");
        setImage(null);
        navigation.navigate('Home', { image });
      } catch (e) {
        console.log(e);
      }
    }
  };

  const handleTextSizeChange = (contentWidth, contentHeight) => {
    setTextInputHeight(Math.max(35,contentHeight)); // sets min height
  };

  return (
    <View style={styles.container}>
      {!image ? (
        // TAKING PICTURE OPTION!!!
        <View style={styles.photoTakingContainer}>
          <View style={styles.photoTakingOptionButtons}>
            {/* <CButton
              icon={"flash"}
              color={
                flash === Camera.Constants.FlashMode.off ? "gray" : "#f1f1f1"
              }
              onPress={() => {
                console.log(flash);
                setFlash(
                  flash === Camera.Constants.FlashMode.off
                    ? Camera.Constants.FlashMode.on
                    : Camera.Constants.FlashMode.off
                );
              }}
            /> */}
            <CButton
              icon={"retweet"}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            />
          </View>
          <Camera
            style={styles.camera}
            type={type}
            FlashMode={flash}
            ref={cameraRef}
          ></Camera>
          <CButton title={"Munch It!"} onPress={takePicture} style={styles.bottombuttons} />
        </View>
      ) : (
        // POSTING PICTURE OPTION!!!!!!

        <View style={styles.imageContainer}>
          {/* IMAGE */}
          <Image source={{ uri: image }} style={styles.image} />

        {/* CAPTION OPTION */}
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.containerStyle}>
            <KeyboardAvoidingView
                style={captionStyles.containerStyle}
                behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <View style={[captionStyles.fieldStyle, {height: textInputHeight}]}>
                <TextInput 
                    multiline 
                    placeholder="Write something with multilines  here.."
                    maxLength={150}
                    style={captionStyles.inputStyle}
                    value={text}
                    onChangeText={(newText) => setText(newText)}
                    onContentSizeChange={(e) =>
                    handleTextSizeChange(e.nativeEvent.contentSize.width, e.nativeEvent.contentSize.height)
              } />
                </View>
            </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback>

          {/* STARS FOR RATING */}
          <SafeAreaView style={{ flex: 1 }}>
            <View style={ratingStyles.container}>
              {/* <Text style={ratingStyles.heading}>
                {starRating ? `${starRating}*` : "Tap to rate"}
              </Text> */}
              <View style={ratingStyles.stars}>
                <TouchableOpacity onPress={() => setStarRating(1)}>
                  <MaterialIcons
                    name={starRating >= 1 ? "star" : "star-border"}
                    size={32}
                    style={
                      starRating >= 1
                        ? ratingStyles.starSelected
                        : ratingStyles.starUnselected
                    }
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setStarRating(2)}>
                  <MaterialIcons
                    name={starRating >= 2 ? "star" : "star-border"}
                    size={32}
                    style={
                      starRating >= 2
                        ? ratingStyles.starSelected
                        : ratingStyles.starUnselected
                    }
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setStarRating(3)}>
                  <MaterialIcons
                    name={starRating >= 3 ? "star" : "star-border"}
                    size={32}
                    style={
                      starRating >= 3
                        ? ratingStyles.starSelected
                        : ratingStyles.starUnselected
                    }
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setStarRating(4)}>
                  <MaterialIcons
                    name={starRating >= 4 ? "star" : "star-border"}
                    size={32}
                    style={
                      starRating >= 4
                        ? ratingStyles.starSelected
                        : ratingStyles.starUnselected
                    }
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setStarRating(5)}>
                  <MaterialIcons
                    name={starRating >= 5 ? "star" : "star-border"}
                    size={32}
                    style={
                      starRating >= 5
                        ? ratingStyles.starSelected
                        : ratingStyles.starUnselected
                    }
                  />
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>


          {/* WANT THE IMAGE SAVED BUTTONS */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 50,
            }}
          >
            <CButton
              title={"Don't like your Munch?"}
              onPress={() => setImage(null)}
              style={styles.bottombuttons}
            />
            <CButton title={"Munch It!"} onPress={saveImage} style={styles.bottombuttons} />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 50,
  },
  photoTakingContainer: {
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width: "80%",
  },
  photoTakingOptionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 30,
    fontcolor: 'black',
  },
  camera: {
    width: 300,
    height: 300,
    borderRadius: 20,
    alignSelf: "flex-start",
    marginTop: 20,
  },
  imageContainer: {
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 10,
    width: "80%",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 20,
    alignSelf: "flex-start",
    marginTop: 40,
  },
  bottombuttons:{
    fontcolor: 'black',
  }
});

const ratingStyles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 4,
      },
      heading: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingTop: 10,
      },
      stars: {
        paddingTop: 10,
        display: 'flex',
        flexDirection: 'row',
      },
      starUnselected: {
        color: '#aaa',
      },
      starSelected: {
        color: '#ffb300',
      },
});

const captionStyles = StyleSheet.create({
    containerStyle: {
      display: "flex",
      //flex: 1,
      flexDirection: "column",
      justifyContent: "flex-start",
      width: 300,
      paddingTop: 10,
      height:'10%',
      backgroundColor: 'white'
    },
    fieldStyle: {
      display: "flex",
      flexDirection: "column",
      marginBottom: 28,
      
    },
    labelStyle: {
      marginBottom: 8,
      fontSize: 18,
    },
    inputStyle: {
      borderColor: "#ccc",
      borderWidth: 1,
      borderRadius: 4,
      padding: 8,
      height:'100%',
    },
  });