import React from "react";
import { View, FlatList } from "react-native";
import Post from "./components/Post";

export default class HomeFeed extends React.Component {
  state = {
    userData: [],
    refreshing: false,
    page: 1,
    seed: 1
  };
  componentDidMount() {
    this.fetchUserData();
  }

  fetchUserData = () => {
    const { page, userData, seed } = this.state;
    fetch(
      `https://randomuser.me/api/?seed=${seed}&page=${page}&results=10`
    ).then(response => {
      response
        .json()
        .then(data => {
          this.setState({
            userData: page === 1 ? data.results : [...this.state.userData, ...data.results],
            refreshing: false,
          });
        })
        .catch(error => {
          console.warn(error);
        });
    });
  };

  handleRefresh = () => {
    this.setState({ refreshing: true, page: 1, seed: this.state.seed + 1 });
    this.fetchUserData();
  };

  handleEndReached = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.fetchUserData();
      }
    );
  };
  render() {
    return <View style={{ paddingBottom: 40 }}>{this._renderPosts()}</View>;
  }

  _renderPosts = () => {
    const { userData, refreshing } = this.state;
    const text =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ";
    return (
      <FlatList
        data={userData}
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
        keyExtractor={item => item.email}
        onEndReached={this.handleEndReached}
        onEndReachedThreshold={0}
      />
    );
  };
}
