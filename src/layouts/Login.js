import React from 'react';
import api from '../services/api';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet }
from 'react-native';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      token: '',
    };
  }

  onSubmit = () => {
    const query = `
      mutation {
        auth(
          email: "${this.state.email}",
          password: "${this.state.password}"
        ) {
          token
        }
      }
    `;
    api(query).then(res => {
      this.setState({
        token: res.data.data.auth.token
      });
      this.props.navigation.navigate('Home');
    }).catch(error => error);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.signIn}>
          <TextInput style={styles.input}
            placeholder='E-mail'
            editable={true}
            textContentType='emailAddress'
            onChangeText={email => this.setState({email})}/>
          <TextInput style={styles.input}
            placeholder='Password'
            editable={true}
            textContentType='password'
            secureTextEntry={true}
            onChangeText={password => this.setState({password})}/>
        <TouchableOpacity onPress={this.onSubmit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </View>
        </TouchableOpacity>
        </View>
      </View>  
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#e70',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e70',
  },
  signIn: {
    paddingTop: 24,
    paddingBottom: 12,
    paddingLeft: 24,
    paddingRight: 24,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 10
  },
  text: {
    textAlign: 'center',
    margin: 10
  },
  input: {
    width: 200,
  },
  button: {
    margin: 24,
    paddingVertical: 6,
    paddingHorizontal: 10,
    width: 'auto',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#303030',
    borderRadius: 3,
  },
  buttonText: {
    color: '#ffffff'
  }
});