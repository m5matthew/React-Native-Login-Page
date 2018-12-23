import React, { Component } from 'react';
import {Text, TextInput, View, Button, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux';
import {addUsername} from '../Actions/actions';
import {styles} from '../stylesheet'

class EnterUser extends Component{

  constructor(props){
    super(props);
    this.state = {
      username:''
    };
  }

  inputSubmitHandler = () => {
    if(this.state.username.trim()===''){
      return;
    }
    this.props.addUsername(this.state.username);
    this.props.navigation.navigate('EnterMajor');
  }

  inputChangeHandler = (textInput) => {
    this.setState({
      username: textInput,
    });
  }

  render(){
    return(
    <View style={styles.container}>
      <View style={styles.prompt}>
        <Text style={styles.promptText}>CREATE YOUR USERNAME</Text>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput style={styles.textInput}
            placeholder = "Enter your username here"
            onChangeText = {this.inputChangeHandler}
            autoCorrect = {false}
            />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonSubmit}
          onPress = {this.inputSubmitHandler}>
          <Image
          source={require('../../nextButton.png')}
          style={styles.buttonSize}/>
        </TouchableOpacity>
      </View>
    </View>
  );}
}

const mapStateToProps = state => {
  return {
    username: state.profile.username,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addUsername: (input) =>{
      dispatch(addUsername(input))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterUser)
