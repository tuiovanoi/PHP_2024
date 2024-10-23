import { StyleSheet } from 'react-native'
import { colors } from '../../styles/colors';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
    },
    camera: {
        width: 400,
        height: 400,
        margin: 20,
    },
    headerCamera: {
        flex: 1,
        alignItems: 'center',
    },
    footerCamera: {
        flexDirection: 'row',
        marginBottom: 20,
        justifyContent: 'center',
    },
    ball: {
        width: 70,
        height: 70,
        backgroundColor: colors.black,
        borderRadius: 35
    },
    headerSave: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    image: {
        width: 200,
        height: 200,
        margin: 20,
    }

});