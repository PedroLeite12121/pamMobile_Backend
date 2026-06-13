import {StyleSheet} from 'react-native';

export const geralStyles = StyleSheet.create({
    topBar: {
        position: 'relative',
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
    logoutBar: {
        position: 'absolute',
        right: 4,
        backgroundColor: '#ff0000bb',
        padding: 3,
        borderRadius: 10,
        top: 4,
    },
    logoutImg: {
        width: 25,
        height: 25,
    },
    homeBar: {
        position: 'absolute',
        left: 20,
    },
    homeImg: {
        width: 40,
        height: 40
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
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});