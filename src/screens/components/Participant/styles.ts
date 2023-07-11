import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000d9',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: '#FFF',
    marginLeft: 16,

  },
  buttonText: {
    color: '#FFF',
    fontSize: 24
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#FF0000',
    alignItems: 'center',
    justifyContent: 'center'
  },
})