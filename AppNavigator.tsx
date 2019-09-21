import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from './screens/SearchScreen';
import ListingScreen from './screens/ListingScreen';

const AppNavigator = createStackNavigator(
  {
    Main: {
      screen: SearchScreen
    },
    Listing: ListingScreen,
  },
  {
    initialRouteName: 'Main',
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;