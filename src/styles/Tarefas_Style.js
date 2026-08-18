
import { 
  StyleSheet, 
} from 'react-native';


export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingBottom: 100,
    backgroundColor: '#f5f5f5',
  },

  list: {
    paddingVertical: 10,
    height: 100,
    paddingHorizontal: 16,
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
    maxWidth: '80%',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 10,
  },

  details: {
    marginLeft: 10,
    marginVertical: 3,
    fontSize: 14,
    color: '#666',
  },
  detailsEdit: {
    padding: 1,
    border: '1px solid gray',
    borderRadius: 5,
    fontSize: 14,
    color: '#0e0d0d',
  },

  editBtn: {
    borderRadius: 5,
    padding: 3,
    justifyContent: 'center',
    backgroundColor: '#4c9dfa',
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

  nomeEdit: {
    padding: 3,
    border: '1px solid gray',
    borderRadius: 5,
    maxWidth: '80%',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 10,
  },


  cardEditText: {
    color: '#666',
    marginLeft: 10,
    marginVertical: 3,
  },

  cardEditContainer: {
    marginBottom:5,
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },

  addButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    borderRadius: 10,
    marginTop: 20,
    height: 50,
    backgroundColor: '#4c9dfa',
  },

  addButton: {
    textAlign: 'center',
    color: 'white',
    width: '100%',
    backgroundColor: '#4c9dfa',
    fontFamily: 'Inter_700Bold',
  }
});