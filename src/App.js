import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Switch,
  Platform
} from 'react-native';

const isApple = Platform.OS === 'ios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: false,
      cheap: false,
      fast: false,
      selected: []
    };
  }

  setSwitchValue(selector, value) {
    const { selected } = this.state;

    if (selected.length > 1 && value) {
      this.setState({
        [selector]: value,
        [selected[0]]: false,
        selected: selected.slice(1).concat(selector),
      });
    } else {
      const newSelected = value ? selected.concat(selector) : selected.filter((val) => val != selector);
      this.setState({ [selector]: value, selected: newSelected });
    }
  }

  render() {
    const { cheap, fast, good } = this.state;
    const switchStyle = isApple ? styles.switch : {};

    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          What would you like for your next order?
        </Text>
        <View style={styles.section}>
          <Text style={styles.label}>Good</Text>
          <Switch
            onValueChange={(value) => this.setSwitchValue('good', value)}
            style={switchStyle}
            value={this.state.good}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Cheap</Text>
          <Switch
            onValueChange={(value) => this.setSwitchValue('cheap', value)}
            style={switchStyle}
            value={this.state.cheap}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Fast</Text>
          <Switch
            onValueChange={(value) => this.setSwitchValue('fast', value)}
            style={switchStyle}
            value={this.state.fast}
          />
        </View>
        <Text style={styles.footer}>
          App was quickly smashed together by Mindaugas Jačionis
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    alignItems: 'center',
    backgroundColor: '#E4ECF1',
  },

  instructions: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    marginBottom: 30,
    width: 200
  },

  section: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 200,
    padding: 10
  },

  label: {
    fontSize: 20,
    marginRight: 20,
    textAlign: 'left',
    flex: 1
  },

  switch: {
    backgroundColor: '#DEE0E1',
    borderRadius: 20
  },

  footer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    fontSize: 10,
    textAlign: 'center',

  }
});

AppRegistry.registerComponent('ForFun', () => App);
