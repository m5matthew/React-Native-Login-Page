import React, { Component } from 'react';
import {Text, TextInput, View, Button} from 'react-native';
import {connect} from 'react-redux';
import {addFirstName, addLastName} from '../Actions/actions';
import {styles} from '../stylesheet'

class EnterName extends Component{

  constructor(props){
    super(props);
    this.state = {
      firstName:'',
      lastName:''
    };
  }

  static navigationOptions = {
    headerStyle:{
      backgroundColor:'powderblue',
    },
  };

  nameSubmitHandler = () => {
    if(this.state.firstName.trim() === '' || this.state.lastName.trim()===''){
      return;
    }
    this.props.addFirstName(this.state.firstName);
    this.props.addLastName(this.state.lastName);
    this.props.navigation.navigate('EnterMajor');
  }

  firstNameChangeHandler = (textInput) => {
    this.setState({
      firstName: textInput,
    });
  }
  lastNameChangeHandler = (textInput) => {
    this.setState({
      lastName: textInput,
    });
  }

  render(){
    return(
    <View style={styles.container}>
      <View style={styles.prompt}>
        <Text style={{fontSize:50}}>WHAT IS YOUR NAME?</Text>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput style={styles.textInput}
            placeholder = "First Name"
            onChangeText = {this.firstNameChangeHandler}
            autoCorrect = {false}
            />
        <TextInput style = {styles.textInput}
            placeholder = "Last Name"
            onChangeText = {this.lastNameChangeHandler}
            autoCorrect = {false}
            />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonSubmit}>
          <Button
            onPress = {this.nameSubmitHandler}
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
    firstName: state.profile.firstName,
    lastName: state.profile.lastName,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addFirstName: (firstName) => {
      dispatch(addFirstName(firstName))
    },
    addLastName: (lastName) =>{
      dispatch(addLastName(lastName))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterName)
