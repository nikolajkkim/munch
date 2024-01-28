// npx expo install expo-media-library
// npx expo install expo-camera

import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import CButton from './components/CButton';


export default function App() {
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.on);
    const cameraRef = useRef(null);

    // PERMISSIONS
    useEffect(() => {
        (async () =>{
            MediaLibrary.requestPermissionsAsync();
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setHasCameraPermission(cameraStatus.status === 'granted');
        })();
    }, [])
    if(hasCameraPermission === false){
        return <Text>No access to camera</Text>
    }

    const takePicture = async () => {
        // take picture, if we get picture, store uri into image. if not, print error message
        if(cameraRef) {
            try{
                const data = await cameraRef.current.takePictureAsync();
                setImage(data.uri);
            } catch(e){
                console.log(e);
            }
        }
    }

    const saveImage = async () => {
        if(image){
            try{
                await MediaLibrary.createAssetAsync(image);
                alert('Picture saved!');
                setImage(null);
            } catch(e){
                console.log(e)
            }
        }
    }

    return (
        <View style={styles.container}>
            {!image ? 
            // TAKING PICTURE OPTION!!!
            <Camera
                style={styles.camera}
                type={type}
                FlashMode={flash}
                ref={cameraRef}
            >
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 30,
                }}>
                    <CButton icon={'flash'} 
                    color = {flash === Camera.Constants.FlashMode.off ? 'gray' : '#f1f1f1'}
                    onPress={()=>{
                        console.log(flash)
                        setFlash(flash === Camera.Constants.FlashMode.off 
                            ? Camera.Constants.FlashMode.on 
                            : Camera.Constants.FlashMode.off)
                    }} />
                    <CButton icon={'retweet'} onPress={()=>{
                        setType(type === Camera.Constants.Type.back? Camera.Constants.Type.front : Camera.Constants.Type.back)
                    }} />
                    
                </View>
                <CButton title={'Munch It!'}  onPress={takePicture}/>
            </Camera>
            
            : 

            // POSTING PICTURE OPTION!!!!!!
            
            <View style={styles.imageContainer}>
                <Image source={{uri: image}} style={styles.image}/>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 50,
                }}>
                    <CButton title={"Re-Take Picture"} icon = "retweet" onPress={()=>setImage(null)} />
                    <CButton title={"Save Picture"} icon = "check" onPress={saveImage} />
                </View>
            </View>
            }
            
            {/* <View>
            {image ? 
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 50,
            }}>
                <CButton title={"Re-Take Picture"} icon = "retweet" onPress={()=>setImage(null)} />
                <CButton title={"Save Picture"} icon = "check" onPress={saveImage} />
            </View>
            :
            <CButton title={'Munch It!'}  onPress={takePicture}/>
            }
            </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 50,
        
    },
    camera: {
        flex:1,
        width: 350,
        height: 350,
    },
    imageContainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 20,
        alignSelf: 'flex-start',
        marginTop: 20,
    },

});