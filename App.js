/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import PlaidLink from 'react-native-plaid-link-sdk';
import {Colors} from 'react-native/Libraries/NewAppScreen';

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('Platform :', Platform.OS);
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.body}>
              <PlaidLink
                clientName="TestApp"
                publicKey="1f83e23b2a38b38823251d1afa7eb1"
                env="sandbox"
                onSuccess={data => console.log('success: ', data)}
                onExit={data => console.log('exit: ', data)}
                product={['auth']}
                language="en"
                countryCodes={['US']}
                webviewRedirectUri="yourAppName://redirect">
                <Text style={{paddingVertical: 10}}>Add Bank Account</Text>
              </PlaidLink>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
