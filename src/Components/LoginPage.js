import React, { Component } from 'react';
import {Text, TextInput, View, Button} from 'react-native';
import {styles} from '../stylesheet'

export default class EnterUser extends Component{

  constructor(props){
    super(props);
    this.state = {
      username:'',
      pass:'',
    };
  }

  static navigationOptions = {
    headerStyle:{
      backgroundColor:'powderblue',
    },
  };

  inputSubmitHandler = () => {
    if(this.state.username.trim()==='' || this.state.password.trim()===''){
      return;
    }
    {/*Make API CALL HERE*/}
  }

  usernameInputChangeHandler = (textInput) => {
    this.setState({
      username: textInput,
    });
  }

  passwordInputChangeHandler = (textInput) => {
    this.setState({
      pass: textInput,
    });
  }

  render(){
    return(
    <View style={styles.container}>
      <View style={styles.prompt}>
        <Text style={{fontSize:50}}>LOGIN</Text>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput style={styles.textInput}
            placeholder = "Username"
            onChangeText = {this.usernameInputChangeHandler}
            autoCorrect = {false}
            />
        <TextInput style={styles.textInput}
            placeholder = "Password"
            onChangeText = {this.passwordInputChangeHandler}
            autoCorrect = {false}
            />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonSubmit}>
          <Button
            onPress = {this.inputSubmitHandler}
            title = "SUBMIT"
            color = "white"
          />
        </View>
      </View>
    </View>
  );}
}
