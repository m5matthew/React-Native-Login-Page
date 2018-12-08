import React, { Component } from 'react';
import {Text, TextInput, View, Button, TouchableOpacity, Alert} from 'react-native';
import {connect} from 'react-redux';
import {GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin'
import {styles, studySmart} from '../stylesheet'
import {addFirstName, addLastName, addEmail} from '../Actions/actions';
import {config} from '../../config.js';

const GOOGLE_API_KEY = config.GOOGLE_API_KEY;

export class StudySmart extends Component {

  render() {
    return (
      <View style={studySmart.container}>

        {/* STUDYSMART TITLE */}
        <View style={studySmart.titleContainer}>
          <Text style={studySmart.title}>STUDYSMART</Text>
        </View>

        {/* LOGIN AND SIGNUP BUTTONS */}
        <View style={studySmart.loginButtonContainer}>
          <TouchableOpacity onPress={this.signIn.bind(this)} style={studySmart.loginButton} >
              <Text style={studySmart.loginText}>LOG IN WITH GMAIL</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.signIn.bind(this)} style={studySmart.signupButton}>
              <Text style={studySmart.loginText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  /* Called when component is mounted */
  componentDidMount() {
  this.setupGoogleSignin();
  }

  /* Sets up sign-in */
  async setupGoogleSignin() {
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true });
      await GoogleSignin.configure({
        webClientId: GOOGLE_API_KEY,
        offlineAccess: false
      });

      const user = await GoogleSignin.currentUserAsync();
      console.log(user);
    }
    catch (err) {
      console.log("Google signin error", err.code, err.message);
    }
  }

  /* Called when user presses sign in button */
  signIn = async () => {
    try {
      console.log("Attempting User Sign-in");
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo });
    } catch (error) {
      /* If sign in cancelled */
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log("ERROR: Sign-in cancelled.");
        return;
      /* If sign in already in progess */
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log("ERROR: Sign-in already in progess.");
        return;
      /* If device doesn't have playservices */
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log("ERROR: Device does not have play services.");
        return;
      /* Other error */
      } else {
        console.log("ERROR: Unknown");
      }
    }

    /* Check for valid email before continuing */
    if(this.state.userInfo){
      await this.checkEmail(this.state.userInfo.user.email);
    }

    /* If email was valid, continue to app */
    if(this.state.userInfo){
      /* TODO: API call to see if user is new */
      /* For now, assume user is new */
      console.log("Sign-in successfull: Email is valid");
      console.log(this.state.userInfo);

      /* Add data to redux */
      this.props.addFirstName(this.state.userInfo.user.givenName);
      this.props.addLastName(this.state.userInfo.user.familyName);
      this.props.addEmail(this.state.userInfo.user.email);
      this.props.navigation.navigate('EnterUser');
      this.signOut();
      console.log(this.props.firstName);
      console.log(this.props.lastName);
      console.log(this.props.email);
    }
  };

  /* Signs current user out */
  signOut = async () => {
    console.log("Attempting User Sign-out");
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.setState({ userInfo: null });
    } catch (error) {
      console.error(error);
    }
  };

  /* Check user email for @g.ucla.edu, sign out if invalid */
  checkEmail = async (email) => {
    if(!email.includes("@g.ucla.edu")){
      await this.signOut();
      Alert.alert("Email must be \"@g.ucla.edu\" format.");
    }
  }
}

const mapStateToProps = state => {
  return {
    firstName: state.profile.firstName,
    lastName: state.profile.lastName,
    email: state.profile.email,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addFirstName: (firstName) => {
      dispatch(addFirstName(firstName))
    },
    addLastName: (lastName) =>{
      dispatch(addLastName(lastName))
    },
    addEmail: (email) => {
      dispatch(addEmail(email))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudySmart)
