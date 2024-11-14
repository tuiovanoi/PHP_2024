import MapView, { Marker, Polyline, Region } from "react-native-maps";
import React, { useEffect, useState } from "react";
import { colors } from "../../styles/colors";
import { View } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { TabTypes } from "../../navigation/MenuDrawer.natigation";
import { StyleSheet } from "react-native";
export function Mapa({ navigation, route }: TabTypes) {
  const [origin, setOrigin] = useState<Region | null>(null);
  const { cordenadas } = route.params || {};
  const origem = cordenadas?.origem || { latitude: 0, longitude: 0 };
  const destino = cordenadas?.destino || { latitude: 0, longitude: 0 };

  return (
    <View style={styles.container}>
      <MapView region={{

        longitude: Number((Number(origem.longitude) + Number(destino.longitude)) / 2),
        latitude: Number((Number(origem.latitude) + Number(destino.latitude)) / 2),
        latitudeDelta: 1.5,
        longitudeDelta: 1.5,
      }} showsUserLocation={true} style={styles.map}>
        <Polyline
          coordinates={[
            { latitude: Number(origem.latitude), longitude: Number(origem.longitude) },
            { latitude: Number(destino.latitude), longitude: Number(destino.longitude) },
          ]}
          strokeColor="#000"
          strokeWidth={2}
        />
        <Marker
          key={1}
          coordinate={{
            latitude: Number(origem.latitude),
            longitude: Number(origem.longitude),
          }}
        >
          <MaterialIcons name="location-history" size={24} color="black" />
        </Marker>
        <Marker
          key={2}
          coordinate={{
            latitude: Number(destino.latitude),
            longitude: Number(destino.longitude),
          }}
        >
          <MaterialIcons name="location-history" size={24} color="black" />
        </Marker>
      </MapView>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  map: {
    width: '100%',
    height: '100%'
  },
})
