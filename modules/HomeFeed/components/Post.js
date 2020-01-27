import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  View,
  Text,
  Dimensions
} from "react-native";
import { withNavigation } from "react-navigation";

class Post extends React.Component {
  goToSinglePost = () => {
    const { imageSource, userName, bodyText } = this.props;
    this.props.navigation.navigate("singlePost", {
      imageSource,
      userName,
      bodyText
    });
  };

  goToUserProfile = () => {
    const { imageSource, userName, userLocation } = this.props;
    this.props.navigation.navigate("userProfile", {
      imageSource,
      userName,
      userLocation
    });
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.goToSinglePost}>
        {this.renderUserTitle()}
        {this.renderUserBody()}
      </TouchableOpacity>
    );
  }

  renderUserTitle = () => {
    const { imageSource, userName } = this.props;
    return (
      <View style={styles.userNameContainer}>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={this.goToUserProfile}
        >
          <Image style={styles.image} source={{uri: imageSource}} />
          <Text style={styles.userName}>{userName}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  renderUserBody = () => {
    const { bodyText } = this.props;
    const text = bodyText.slice(0, 150);
    return (
      <View style={styles.userBodyContainer}>
        <Text style={styles.bodyText}>{text}... <Text style={styles.readMore}>Read more</Text></Text>
      </View>
    );
  };
}
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    width: width - 20,
    height: width / 2 - 20,
    borderWidth: 2,
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 12
  },
  userNameContainer: {
    flex: 2,
    alignSelf: "flex-start",
    marginLeft: 5,
    zIndex: 10,
    justifyContent: "center"
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  bodyText: {
    fontWeight: "500",
    color: "grey",
    paddingHorizontal: 10
  },
  userName: {
    fontWeight: "700",
    fontSize: 21,
    marginLeft: 10
  },
  userBodyContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 3
  },
  readMore: {
    color: '#3b51f7',
    textDecorationLine: 'underline',
  }
});

export default withNavigation(Post);
