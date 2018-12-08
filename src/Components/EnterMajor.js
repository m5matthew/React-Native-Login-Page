import React, { Component } from 'react';
import {Text, TextInput, View, Button} from 'react-native';
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
        <Text style={{fontSize:50}}>WHAT IS YOUR MAJOR?</Text>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput style={styles.textInput}
            placeholder = "Enter your major here"
            onChangeText = {this.inputChangeHandler}
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
