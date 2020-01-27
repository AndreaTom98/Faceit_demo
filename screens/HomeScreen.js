import React from "react";
import { Text, Button, View} from "react-native";
import HomeFeed from '../modules/HomeFeed/HomeFeed.container';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Faceit feed',
  };
  render() {
    return (
      <HomeFeed />
    )
  }
}
