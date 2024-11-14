import React, { useState } from "react";
import { Text, TextInput, View, Button, TouchableOpacity } from "react-native";
import { coords as Coords, TabTypes } from "../../navigation/MenuDrawer.natigation";
import { styles } from "./styles";
export function Entrada({ navigation }: TabTypes) {
  const [coords, setCoords] = useState<Coords>({
    origem: { latitude: 0, longitude: 0 },
    destino: { latitude: 0, longitude: 0 },
  });
  function handleChange(key: "origem" | "destino", field: "latitude" | "longitude", value: string) {
    const parsedValue = parseFloat(value);

    setCoords((prevState: { [x: string]: any; }) => ({
      ...prevState,
      [key]: {
        ...prevState[key],
        [field]: value,
      },
    }));
  }

  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.titulo} >origem</Text>

        <TextInput
          style={styles.input}
          placeholder="Latitude"
          value={coords.origem.latitude.toString()}
          onChangeText={(text) => handleChange("origem", "latitude", text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Longitude"
          value={coords.origem.longitude.toString()}
          onChangeText={(text) => handleChange("origem", "longitude", text)}
          keyboardType="numeric"
        />
      </View>
      <View>
        <Text style={styles.titulo}>destino</Text>
        <TextInput
          style={styles.input}
          placeholder="Latitude"
          value={coords.destino.latitude.toString()}
          onChangeText={(text) => handleChange("destino", "latitude", text)}
          keyboardType="numeric"
        />
        <TextInput
        style={styles.input}
          placeholder="Longitude"
          value={coords.destino.longitude.toString()}
          onChangeText={(text) => handleChange("destino", "longitude", text)}
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity          
          style={styles.botao}
          onPress={() => navigation.navigate('Mapas', { cordenadas: coords })}>
        <Text style={styles.botaoTexto} >enviar</Text>
      </TouchableOpacity>
    </View>
  );
}
