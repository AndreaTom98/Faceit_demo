import React from "react";
import { View, FlatList, } from "react-native";
import Post from "./components/Post";

export default class HomeFeed extends React.Component {
  state = {
    userData: [],
    refreshing: false
  };
  componentDidMount() {
    this.fetchUserData();
  }

  fetchUserData = () => {
    fetch("https://randomuser.me/api/?results=10").then(response => {
      response.json().then(data => {
        this.setState({
          userData: data,
          refreshing: false
        });
      });
    });
  };

  handleRefresh = () => {
    this.setState({ refreshing: true });
    this.fetchUserData();
  };
  render() {
    return (
       <View>
        {this._renderPosts()}
      </View>
    )
  }

  _renderPosts = () => {
    const { userData, refreshing } = this.state;
    const text =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ";
    return (
      <FlatList
        data={userData.results}
        onRefresh={this.handleRefresh}
        refreshing={refreshing}
        renderItem={({ item }) => (
          <Post
            userName={item.name.first}
            imageSource={item.picture.thumbnail}
            bodyText={text}
            userLocation={item.location}
          />
        )}
        keyExtractor={item => item.id}
      />
    );
  };
}
