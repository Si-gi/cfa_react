import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Provider} from 'react-redux'
import Home from './Components/Home';
import Store from './Store/configureStore'
import Film from './Components/Film';

const Stack = createStackNavigator();

export default class App extends React.Component {

  constructor(props){
    super(props);
    
  }

  render() {
    return (
      <Provider store={Store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={
            {
              headerTintColor: "white",
              headerStyle:{
                backgroundColor:'#87CEFA'
              }
            }
          }>
            <Stack.Screen name="films" component={Home} options={
              {
                gesturesEnabled: false,
                headerLeft: null,
                title: "Movie-Ratings"
              }
            }/>
            <Stack.Screen name="film-single" component={Film}></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: "center"
  },
});
