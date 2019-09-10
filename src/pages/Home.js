import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Fala dashboard porra!</Text>
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