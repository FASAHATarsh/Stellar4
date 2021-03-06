import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  ImageBackgrounda,
  ImageBackground,
} from 'react-native';
import { WebView } from 'react-native-webview';

export default class StarMapScreen extends Component {
  constructor() {
    super();
    this.state = {
      latitude: '',
      longitude: '',
    };
  }
  render() {
    const { latitude, longitude } = this.state;
    const path = `https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false`;
    return (
      <View style={{ flex: 1, backgroundColor: '#00022e' }}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={{ flex: 0.3, marginTop: 20, alignItems: 'center' }}>
          <Text style={styles.titleText}>Star Map</Text>
          <TextInput
            style={styles.inputStyle}
            placeholder="Enter your Latitude"
            placeholderTextColor="white"
            onChangeText={(text) => {
              this.setState({
                latitude: text,
              });
            }}
          />
          <TextInput
            style={styles.inputStyle}
            placeholder="Enter your Longitude"
            placeholderTextColor="white"
            onChangeText={(text) => {
              this.setState({
                longitude: text,
              });
            }}
          />
        </View>
        <WebView
          scalesPageToFit={false}
          source={{ uri: path }}
          style={{ marginTop: 50, marginBottom: 20 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  titleText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    justifyContent: 'center',
    alignContent: 'center',
    textShadowColor: 'white',
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 70,
  },
  inputStyle: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 10,
    marginRight: 20,
    marginLeft: 20,
    textAlign: 'center',
    color: 'white',
    width: 200,
    zIndex: 1,
    backgroundColor: '#00023e',
    fontWeight: 'bold',
  },
});
