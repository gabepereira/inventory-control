import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Login extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Fala galera!</Text>
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
  text: {
    textAlign: 'center',
    margin: 10
  }
});