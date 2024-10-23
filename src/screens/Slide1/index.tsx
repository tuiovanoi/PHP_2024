import React, { useState } from 'react';
import { CameraView, CameraType, useCameraPermissions, CameraCapturedPicture } from 'expo-camera';
import { useRef } from 'react';
import { Button, Text, TouchableOpacity, View, Alert, Image, ImageBackground } from 'react-native';
import { styles } from './styles';
import { colors } from '../../styles/colors';
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { BarCodeScanningResult } from 'expo-camera/build/legacy/Camera.types';

export function Camera() {
    const [facing, setFacing] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [scanned, setScanned] = useState(false);
    const ref = useRef<CameraView>(null);
    const [photo, setPhoto] = useState<CameraCapturedPicture>();

    if (!permission) {
        return <View style={styles.container}/>;
    }

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>Você precisa dar permissão para acesso à Câmera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    function toggleCameraFacing() {
        setFacing((current: string) => (current === 'back' ? 'front' : 'back'));
    }

    function handleBarcodeScanner({ data }: BarCodeScanningResult) {
        Alert.alert(`${data}`)
        setScanned(true)
    }

    async function takePicture() {
        if (ref.current) {
            const picture = await ref.current.takePictureAsync({ imageType: 'jpg', quality: 0 })
            setPhoto(picture)
        }
    }
    if(scanned){
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>setScanned(false)}><MaterialCommunityIcons name="qrcode-scan" size={50} color={colors.primary}/></TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleCameraFacing}>
                <MaterialIcons name="flip-camera-android" size={70} color={colors.primary} />
            </TouchableOpacity>
            <CameraView facing={ facing } style={styles.camera}ref={ref} barcodeScannerSettings={{barcodeTypes:['qr']}}onBarcodeScanned={handleBarcodeScanner}/>
            <TouchableOpacity onPress={takePicture}>
                <MaterialCommunityIcons name="camera-iris" size={70} color={colors.primary} />
            </TouchableOpacity>
            {photo && <Image style={styles.image} source={{uri:photo.uri}}/>}

      
            
        </View>
    );
}