import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles"
import { MenuStackTypes } from "../../navigation/MenuStack.navigation";

export function Slide1({ navigation }: MenuStackTypes) {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Slide1</Text>
            <TouchableOpacity style={styles.botao}
            onPress={() => navigation.push("Slide2")}
            >
                <Text>Slide2</Text>
            </TouchableOpacity>
        </View>
    )
}