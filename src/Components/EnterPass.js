import React, { Component } from 'react';
import {Text, TextInput, View, Button} from 'react-native';
import {connect} from 'react-redux';
import {addPass} from '../Actions/actions';
import {styles} from '../stylesheet'

class EnterPass extends Component{

  constructor(props){
    super(props);
    this.state = {
      pass:''
    };
  }

  static navigationOptions = {
    headerStyle:{
      backgroundColor:'powderblue',
    },
  };

  inputSubmitHandler = () => {
    if(this.state.pass.trim()===''){
      return;
    }
    this.props.addPass(this.state.pass);
    {/*Make API CALL HERE*/}
  }

  inputChangeHandler = (textInput) => {
    this.setState({
      pass: textInput,
    });
  }

  render(){
    return(
    <View style={styles.container}>
      <View style={styles.prompt}>
        <Text style={{fontSize:50}}>CREATE YOUR PASSWORD</Text>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput style={styles.textInput}
            placeholder = "Enter your password here"
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
        <Text>
          Name: {this.props.firstName + this.props.lastName} Major: {this.props.major} Year: {this.props.year} username: {this.props.username} pass: {this.props.pass}
        </Text>
      </View>
    </View>
  );}
}

const mapStateToProps = state => {
  return {
    firstName: state.profile.firstName,
    lastName: state.profile.lastName,
    major: state.profile.major,
    year: state.profile.year,
    username: state.profile.username,
    pass: state.profile.pass,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPass: (input) =>{
      dispatch(addPass(input))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterPass)
