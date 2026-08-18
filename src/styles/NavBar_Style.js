import {StyleSheet} from 'react-native';

export const geralStyles = StyleSheet.create({
    navBar: {
        position: 'fixed',
        bottom: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'white',
        borderTopColor: 'gray',
        borderTopWidth: '1.5px'
    },

    iconNavBar: {
        display: 'flex',
        alignItems: 'center' ,
        flexDirection: 'column',
        width: '20%'
    },
    iconNavBarText: {
        color: '#2e2e2e',
        textAlign: 'center'
    },
});