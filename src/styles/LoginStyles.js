import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    topBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70px',
        backgroundColor: '#4c9dfa',
        width: '100%',
        marginBottom: 20,
        paddingHorizontal: 30
    },

    innerTop2: {
        display: 'flex',
        alignItems: 'center',
        width: '85%'
    },
    topBarText: {
      fontFamily: 'Inter_700Bold',
      color: 'white',
      fontSize: '2rem'
    },
    
    container: {
        flex: 1
    },

    innerForm: {
        boxShadow: ' rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;',
        borderRadius: 10,
        paddingVertical: 30,
        paddingHorizontal: 20,
        display: 'flex',
        alignSelf: 'center',
        marginBottom: 100,
        width: '90%',
        backgroundColor: 'white'
    },

    textBox: {
        paddingHorizontal: 5,
        borderRadius: 5,
        marginBottom:30,
        height: 33,
        width: '100%',
        backgroundColor: 'rgb(255, 255, 255)',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;'
    },
    
    opcaoEntrada: {
        display: 'flex',
        alignItems: 'center'
    },

    opcaoEntradaText: {
        color: '#4c9dfa',
        marginBottom: 20,
        fontFamily: 'Inter_700Bold',
    },

    boxTitle: {
        marginBottom: 10,
        fontSize: 20,
        fontFamily: 'Inter_700Bold',
        color: '#4b4b4b',
    },

    header:{
        backgroundColor: 'white',
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        width: '100%',
        gap: 10,
        top: 0,
        position: 'absolute'
    },

    formButton: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        alignSelf: 'center',
        width: '80%',
        marginTop: 10,
        backgroundColor: '#4c9dfa'
    },

    formButtonText: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Inter_700Bold'
    }
});