import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    configContainer: {
        paddingVertical: 20,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    configText: {
        fontSize: 23
    },
    perfilImg: {
        marginTop: 10,
        width: 150,
        height: 150,
        borderRadius: 100
    },
    creditosButton: {
        width: '90%',
        display: 'flex',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: 'white',
        border: '1px solid gray',
        marginBottom: 30
    },

    creditosButtonText: {
        color: '#1d75fa',
        fontSize: 17,
        fontWeight: 'bold'
    },
    tarefaButton: {
        width: '90%',
        display: 'flex',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: 'white',
        border: '1px solid gray',

    },
    tarefaButtonText: {
        color: '#1d75fa',
        fontSize: 17,
        fontWeight: 'bold'
    },

    logoutButton: {
        width: '90%',
        display: 'flex',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: 'white',
        border: '1px solid gray',
    },
    logoutButtonText: {
        color: 'red',
        fontSize: 17,
        fontWeight: 'bold'
    },
    deleteButton: {
        width: '90%',
        display: 'flex',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: 'white',
        border: '1px solid gray',
    },
    deleteButtonText: {
        color: 'red',
        fontSize: 17,
        fontWeight: 'bold'
    },

    configButtons: {
        gap: 10,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginTop: 40
    }
});