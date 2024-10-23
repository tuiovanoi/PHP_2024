import React from 'react';
import { useState } from 'react';
import { ScrollView, View, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function Imagens() {
    const [image, setImage] = useState<string | null>(null);
    async function pickImage() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);
        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    }
    return (
        <View style={styles.container}>
            {image && <Image style={styles.image} source={{uri: image}}/>}
            <TouchableOpacity onPress={pickImage}>FontAwesome</TouchableOpacity>
        </View>
    );
}