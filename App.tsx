import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView, LogBox} from 'react-native';
// import {Provider} from 'react-redux';
import {color} from './src/constant/theme';
import MainNavigator from './src/routes/navigation';
import { Header } from './src/components';

// import store from './store';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

class App extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: color.white}}>
    
        {/* <Provider store={store}> */}
        <MainNavigator />
        {/* </Provider> */}
      </View>
    );
  }
}

const style = StyleSheet.create({});

export default App;
