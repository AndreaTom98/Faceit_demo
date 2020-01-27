import React from 'react';
import { View, StyleSheet, ImageBackground, Image, Text, Dimensions} from 'react-native';

class UserProfile extends React.Component {
  render() {
    const {navigation} = this.props;
    const imageSource = navigation.getParam('imageSource');
    return (
      <View>
        <ImageBackground blurRadius={10} style={styles.imageBackground} source={{uri: imageSource}}>
        </ImageBackground>
        {this._renderTopInfo()}
      </View>
    );
  }
  _renderTopInfo = () => {
      const {navigation} = this.props
      const userName = navigation.getParam('userName');
      const userLocation = navigation.getParam('userLocation')
      const imageSource = navigation.getParam('imageSource');
      return (
          <View style={{flexDirection: 'row'}}>
            <Image source={{uri: imageSource}} style={styles.profile} />
            <View style={{marginLeft: 25, marginTop: 10, alignItems: 'center'}}>
                <Text style={styles.userName}>{userName}</Text>
                <Text>{userLocation.country}, {userLocation.state}</Text>
            </View>
          </View>
      )
  }
}
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
    imageBackground: {
        width,
        height: 150
    },
    profile: {
        borderRadius: 50,
        width: 100, 
        height: 100,
        zIndex: 30,
        bottom: 40,
        marginLeft: 20
    }, 
    userName: {
        fontSize: 20,
        fontWeight: '600'
    }
});



export default UserProfile;

