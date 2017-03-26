import { StackNavigator } from 'react-navigation';

import PlacesListScreen from '../PlacesListScreen';
import PlaceDetailsScreen from '../PlaceDetailsScreen';

const AppNavigator = StackNavigator({
  Home: { screen: PlacesListScreen },
  PlaceDetails: { screen: PlaceDetailsScreen },
  // Chart: { screen: ChartScreen },
}, {
  navigationOptions: {
    header: { visible: false }
  },
  headerMode: 'screen'
});

export default AppNavigator;
