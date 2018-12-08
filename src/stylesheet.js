import {StyleSheet} from 'react-native';

export const NAVIGATOR_BAR_COLOR = 'white';

export const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
    paddingHorizontal:'5%',
    paddingVertical:'2%',
  },

  prompt: {
    flex:2,
    justifyContent: 'center',
    alignItems:'stretch',
    paddingBottom:'4%',
  },

  textInputContainer: {
    flex:1,
    justifyContent: 'flex-start',
    alignItems:'stretch',
  },

  buttonContainer:{
    flex:2,
    justifyContent:'flex-end',
    paddingBottom: '3%',
  },

  buttonSubmit:{
    backgroundColor:'black',
    justifyContent:'center',
  },

  textInput:{
    fontSize: 25,
    marginBottom:'10%',
    paddingBottom:1,
    borderBottomWidth: 1,
    color:'#808080',
    borderColor: '#808080',
  }

});

export const studySmart = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'white',
  },
  loginButton:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d95040',
    flex: 1,
  },
  signupButton:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#f2bd42",
    flex: 1,
  },
  loginText:{
    color: 'white',
    letterSpacing: 1.92,
    fontFamily: "Roboto-Light",
    fontSize: 28,
  },
  title:{
    color:'black',
    fontFamily: "Roboto-Light",
    fontSize: 40,
    letterSpacing: 3.52,
  },

  titleContainer:{
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginButtonContainer:{
    flex: 1,
  },

});
