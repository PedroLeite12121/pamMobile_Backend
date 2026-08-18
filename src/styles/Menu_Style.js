
import { 
  StyleSheet, 
} from 'react-native';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    button: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2, // Sombra para Android
        fontSize: '1.2rem',
        fontWeight: 'bold',
        fontFamily: 'Inter_700Bold',
        margin: 6,
        textAlign: 'center',
        color: 'black',
        backgroundColor: '#ffffff',
        padding: 15,
        width: '90vw',
        maxWidth: '500px',
        borderRadius: 10
    }
});