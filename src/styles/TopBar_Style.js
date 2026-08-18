import {StyleSheet} from 'react-native';

export const geralStyles = StyleSheet.create({
    topBar: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'center',
        height: '60px',
        backgroundColor: '#4c9dfa',
        width: '100%',
        marginBottom: 20,
        paddingHorizontal: 10
    },
    topBarText: {
      fontFamily: 'Inter_700Bold',
      color: 'white',
      fontSize: 24
    },
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});