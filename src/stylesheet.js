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
  loginButtons:{
    marginBottom:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    color:'black',
    fontWeight:'bold',
    fontFamily: "Roboto",
    fontSize: 36,
    letterSpacing: 3.52,
  },

  titleContainer:{
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginButtonContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },

});
