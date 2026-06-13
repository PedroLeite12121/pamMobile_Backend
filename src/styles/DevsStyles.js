
import { 
  StyleSheet, 
} from 'react-native';


export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
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
  list: {
    paddingVertical: 10,
    height: 100,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2, // Sombra para Android
    width: '90vw',
    display: 'flex',
    flexDirection: 'row',
    gap: 13,
  },

  cardText: {
    flex: 1,
  },
  
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: '#111',
    marginBottom: 4,
  },

  details: {
    marginVertical: 3,
    fontSize: 14,
    color: '#666',
    flexWrap: 'wrap',
  },

  githubImg: {
    marginTop: 10,
    width: 25,
    height: 25
  },
  githubSection: {
    width: 'fit-content'
  }
});