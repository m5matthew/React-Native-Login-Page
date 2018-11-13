import React, { Component } from 'react';
import {Text, TextInput, View, Button} from 'react-native';
import {connect} from 'react-redux';
import {addYear} from '../Actions/actions';
import {styles} from '../stylesheet'

class EnterYear extends Component{

  constructor(props){
    super(props);
    this.state = {
      year:''
    };
  }

  static navigationOptions = {
    headerStyle:{
      backgroundColor:'powderblue',
    },
  };

  inputSubmitHandler = () => {
    if(this.state.year.trim()===''){
      return;
    }
    this.props.addYear(this.state.year);
    this.props.navigation.navigate('EnterUser');
  }

  inputChangeHandler = (textInput) => {
    this.setState({
      year: textInput,
    });
  }

  render(){
    return(
    <View style={styles.container}>
      <View style={styles.prompt}>
        <Text style={{fontSize:50}}>WHAT IS YOUR YEAR?</Text>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput style={styles.textInput}
            placeholder = "Enter your year here"
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
    year: state.profile.year,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addYear: (input) =>{
      dispatch(addYear(input))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterYear)
