import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  onSubmit = () => {
    
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
        </View>
        <TouchableOpacity onPress={this.onSubmit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </View>
        </TouchableOpacity>
      </View>  
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  signIn: {
    margin: 10
  },
  text: {
    textAlign: 'center',
    margin: 10
  },
  input: {
    width: 200,
    borderBottomWidth: 1,
    borderColor: '#cccccc'
  },
  button: {
    margin: 10,
    paddingVertical: 5,
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