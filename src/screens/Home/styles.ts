import { url } from "inspector";
import { ImageBackground, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
    
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    
  },
  Name: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center'
    
  },
  eventName: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
    
    
  },
  eventDate: {
    color: '#969696',
    fontSize: 16
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    color: '#FFFF',
    padding: 16,
    fontSize: 16,
    marginRight: 12

  },
  buttonText: {
    color: '#FFF',
    fontSize: 24
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#13BF43',
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42,
    
  },
  listEmptyText: {
    color: 'black',
    fontSize: 14,
    textAlign: 'center'
  }
})