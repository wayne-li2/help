import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import screen from './ScreenUtils';

import SearchScreen from './screens/SearchScreen';
import ListingScreen from './screens/ListingScreen';


const AppNavigator = createStackNavigator(
  {
    Search: {
      screen: screen(SearchScreen),
    },
    Listing: screen(ListingScreen),
  },
  {
    initialRouteName: 'Search',
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;