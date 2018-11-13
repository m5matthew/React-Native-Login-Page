import React, { Component } from 'react';
import {Text, TextInput, View, Button, TouchableOpacity} from 'react-native';
import {styles, studySmart} from '../stylesheet'
import {GoogleSignin} from 'react-native-google-signin'

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
            <Button
              onPress={this.googleAuth.bind(this)}
              title="LOGIN"
              color="white"
            />
          </View>
          <View style={studySmart.loginButtons}>
            <Button
              onPress={() => this.props.navigation.navigate('EnterName')}
              title="SIGN UP"
              color="white"
            />
          </View>
        </View>
      </View>
    );
  }

  componentDidMount() {
  this.setupGoogleSignin();
  }

  googleAuth() {
    GoogleSignin.signIn()
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log('WRONG SIGNIN', err);
      })
      .done();
  }

  async setupGoogleSignin() {
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true });
      await GoogleSignin.configure({
        iosClientId: '',
        webClientId: '',
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
