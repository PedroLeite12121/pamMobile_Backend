
import { 
  StyleSheet, 
} from 'react-native';


export const styles = StyleSheet.create({
  input: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    color: 'black',
    border: 0,
    backgroundColor: 'white',
    padding: 7,
    width: '70%',
    textAlign: 'center',
    marginBottom: 15,
    fontFamily: 'Inter_700Bold',
    fontSize: 17,
    borderRadius: 5
  },
  container: {
    alignItems: 'center',
    flex: 1,
    paddingBottom: 100,
    backgroundColor: '#f5f5f5',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  editBtn: {
    borderRadius: 5,
    padding: 3,
    justifyContent: 'center',
    backgroundColor: '#6ce7f0',
    alignItems: 'center',
  },

  deleteBtn: {
    borderRadius: 5,
    padding: 3,
    justifyContent: 'center',
    backgroundColor: '#fa5353',
    alignItems: 'center',
  },

  editBtnImg: {
    width: 20,
    height: 20,
  },
  
  deleteBtnImg: {
    width: 20,
    height: 20,
  },
  cardButtonContainer: {
    gap: 5,
    position: 'absolute',
    right: 10,
    zIndex: 1,
    flexDirection: 'row',
  },
  
  
  list: {
    paddingVertical: 10,
    height: 1,
    paddingHorizontal: 16,
  },
  editButtons: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  saveBtn: {
    fontFamily: 'Inter_700Bold',
    backgroundColor: '#4c9dfa',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    width: 120,
    textAlign: 'center',
  },
  cancelBtn: {
    fontFamily: 'Inter_700Bold',
    backgroundColor: '#ff8484',
    color: 'black',
    padding: 10,
    borderRadius: 5,
    width: 120,
    textAlign: 'center'
  },
  card: {
    position: 'relative',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Sombra para Android
    width: '90vw'
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 4,
  },
  details: {
    marginLeft: 10,
    marginVertical: 3,
    fontSize: 14,
    color: '#666',
  },

  
});