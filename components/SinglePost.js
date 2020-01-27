import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class SinglePost extends React.Component {
  render() {
    const {navigation} = this.props;
    const userName = navigation.getParam('userName');
    const imageSource = navigation.getParam('imageSource');
    const bodyText = navigation.getParam('bodyText');
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: imageSource}} />
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.bodyText}>{bodyText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    image: {
        width: 100,
        height: 100
    },
    userName: {
        fontSize: 23,
        fontWeight: '700',
        marginTop: 5,
    },
    bodyText: {
        fontWeight: '500',
        color: 'grey',
        paddingHorizontal: 10,
        marginTop: 20,
        fontSize: 16
    }
})

export default SinglePost;
