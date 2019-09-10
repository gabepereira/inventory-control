import React from 'react';
import api from '../services/api';
import Input from '../components/Input/Input';
import {
  View,
  Text,
  ActivityIndicator,
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
      loading: false,
      error: false,
    };
  }

  handleInput = (value, action) => {
    switch (action) {
      case 'email':
        this.setState({
          email: value
        });
        break;
      case 'password':
        this.setState({
          password: value
        });
        break;
      default:
        break;
    }
  }

  onSubmit = () => {
    this.setState({
      loading: true,
    });
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
      data = res.data.data;
      if (data == null) {
        this.setState({
          loading: false,
          error: true
        });
      } else {
        this.props.navigation.navigate('Home', {
          token: data.auth.token
        });
      }
    }).catch(error => error);
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.signIn}>
          <ActivityIndicator
            style={[loadingStyle.defaultStyle, this.state.loading ? loadingStyle.isLoading : loadingStyle.isNotLoading]}
            size="large" color="#303030"
          />
          <View style={styles.signInWrapper}>
            <Image style={styles.bg} source={bg} resizeMode="contain"/>
            <Text style={styles.text}>GraphQL + React Native</Text>

            <Input
              onFocus={() => this.setState({ error: false })}
              onChange={value => this.handleInput(value, 'email')}
              style={styles.input}
              placeholder={{
                text: 'E-mail',
                color: '#ffffff'
              }}
              keyboardType='email-address'
            />
            <Input
              onFocus={() => this.setState({ error: false })}
              onChange={value => this.handleInput(value, 'password')}
              style={styles.input}
              placeholder={{
                text: 'Password',
                color: '#ffffff'
              }}
              password={true}
            />

            <TouchableOpacity onPress={this.onSubmit}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Sign In</Text>
              </View>
            </TouchableOpacity>
            <Text style={this.state.error ? errorStyle.error : errorStyle.noError}>E-mail or password incorrect!</Text>
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
    backgroundColor: '#cfcfcf',
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
  },
});

const errorStyle = StyleSheet.create({
  error: {
    color: "#e20714",
    textAlign: 'center',
    opacity: 1,
  },
  noError: {
    opacity: 0
  }
});

const loadingStyle = StyleSheet.create({
  defaultStyle: {
    padding: 24,
    position: 'absolute',
    margin: 'auto',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  isLoading: {
    opacity: 1,
    zIndex: 1
  },
  isNotLoading: {
    opacity: 0
  }
})