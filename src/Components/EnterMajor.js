import React, { Component } from 'react';
import {Text, TextInput, View, Button, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux';
import {addMajor} from '../Actions/actions';
import {styles} from '../stylesheet'

class EnterMajor extends Component{

  constructor(props){
    super(props);
    this.state = {
      major:''
    };
  }

  inputSubmitHandler = () => {
    if(this.state.major.trim()===''){
      return;
    }
    this.props.addMajor(this.state.major);
    this.props.navigation.navigate('EnterYear');
  }

  inputChangeHandler = (textInput) => {
    this.setState({
      major: textInput,
    });
  }

  render(){
    return(
    <View style={styles.container}>
      <View style={styles.prompt}>
        <Text style={styles.promptText}>WHAT IS YOUR MAJOR?</Text>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput style={styles.textInput}
            placeholder = "Enter your major here"
            onChangeText = {this.inputChangeHandler}
            autoCorrect = {false}
            />
      </View>
      <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.buttonSubmit}
        onPress = {this.inputSubmitHandler}>
        <Image
        source={require('../../assets/img/nextButton.png')}
        style={styles.buttonSize}/>
      </TouchableOpacity>
      </View>
    </View>
  );}
}

const mapStateToProps = state => {
  return {
    major: state.profile.major,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addMajor: (major) =>{
      dispatch(addMajor(major))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterMajor)
