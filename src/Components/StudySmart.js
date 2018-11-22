import React, { Component } from 'react';
import {Text, TextInput, View, Button, TouchableOpacity} from 'react-native';
import {styles, studySmart} from '../stylesheet'
import {GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin'

export default class StudySmart extends Component {

  render() {
    return (
      <View style={styles.container}>

        {/*STUDYSMART TITLE*/}
        <View style={studySmart.titleContainer}>
          <Text style={studySmart.title}>STUDYSMART</Text>
        </View>

        {/*LOGIN AND SIGNUP BUTTONS*/}
        <View style={studySmart.loginButtonContainer}>
          <View style={studySmart.loginButtons}>
            <GoogleSigninButton
              style={{width:312, height:48}}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              onPress={this.signIn.bind(this)}
              />
          </View>
        </View>
      </View>
    );
  }

  componentDidMount() {
  this.setupGoogleSignin();
  }

  signIn = async () => {
  try {
    console.log("User Signing in!");
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    this.setState({ userInfo });
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (f.e. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }

  //user info may be uninitialized here
  console.log(this.state.userInfo);
};

  async setupGoogleSignin() {
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true });
      await GoogleSignin.configure({
        iosClientId: 'Enter key here',
        webClientId: 'Enter key here',
        offlineAccess: false
      });

      const user = await GoogleSignin.currentUserAsync();
      console.log(user);
    }
    catch (err) {
      console.log("Google signin error", err.code, err.message);
    }
  }
}
