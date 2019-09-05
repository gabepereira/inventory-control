import React from 'react';
import api from '../services/api';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import bg from '../assets/img/bg.png';

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
        <SafeAreaView style={styles.signIn}>
          <View style={styles.signInWrapper}>
            <Image style={styles.bg} source={bg} resizeMode="contain"/>
            <Text style={styles.text}>GraphQL + React Native</Text>
            <TextInput style={styles.input}
              autoCorrect={false}
              spellCheck={false}
              placeholder='E-mail'
              placeholderTextColor='#ffffff'
              editable={true}
              textContentType='emailAddress'
              onChangeText={email => this.setState({email})}/>
            <TextInput style={styles.input}
              autoCorrect={false}
              spellCheck={false}
              placeholder='Password'
              placeholderTextColor='#ffffff'
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
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signIn: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  signInWrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    paddingHorizontal: 48,
    paddingVertical: 0,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 24,
    color: '#303030'
  },
  input: {
    width: '100%',
    color: '#ffffff',
    backgroundColor: '#ccc',
    marginVertical: 2,
    borderRadius: 3,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  button: {
    marginVertical: 24,
    marginHorizontal: 'auto',
    paddingVertical: 12,
    paddingHorizontal: 12,
    width: 'auto',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#303030',
    borderRadius: 3,
  },
  buttonText: {
    color: '#ffffff'
  },
  bg: {
    width: '100%',
  }
});