import { StyleSheet} from 'react-native';

const stylesFn = () => StyleSheet.create({
  message: {
    marginBottom: 20,
    width: '100%',
    marginTop: '30%',
  },
  h1: {
    fontSize: 30,
    alignSelf: 'center',
    padding: 10,
    width: '90%',
    textAlign: 'center',
    borderRadius: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  subtext: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  text:{
    alignSelf:'center',
    textAlign: 'center',
    width: '80%',
    fontSize: 15
  },
  screen:{
    marginTop: '30%',
  },
  button:{
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 10,
    width: '50%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
});

export default stylesFn;