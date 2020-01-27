import {createAppContainer} from 'react-navigation';
import {createStackNavigator, HeaderTitle} from 'react-navigation-stack';
import Home from '../screens/HomeScreen';
import SinglePost from '../components/SinglePost';
import UserProfile from '../modules/UserProfile/UserProfile.container';

const StackNavigator = createStackNavigator({
  home: {
    screen: Home,
  },
  singlePost: {
    screen: SinglePost
  },
  userProfile: {
    screen: UserProfile,
  }
}, {
  initialRouteName: 'home',
  defaultNavigationOptions: {
    headerTintColor: 'black'
  }
});

export default createAppContainer(StackNavigator);