import React, {Fragment} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <Fragment>
        <View style={styles.container}>
            <Text style={styles.text}>Fala galera!</Text>
        </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lighter,
  },
  text: {
    textAlign: 'center',
    margin: 10
  }
});

export default App;
