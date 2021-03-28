import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen'
import WishScreen from './src/screens/others/WishScreen'
import MicrocontrollerScreen from './src/screens/microcontroller/MicrocontrollerScreen';
import ProgrammingScreen from './src/screens/programming/ProgrammingScreen';
import MoreDataScreen from './src/screens/data-structure/MoreDataScreen';
import MoreProgScreen from './src/screens/programming/MoreProgScreen';
import MoreMicroScreen from './src/screens/microcontroller/MoreMicroScreen';
import ArrayScreen from './src/screens/data-structure/contents/array/ArrayScreen';
import DataStructureScreen from './src/screens/data-structure/DataStructureScreen';
import LinkedListScreen from './src/screens/data-structure/contents/linked-list/LinkedListScreen';
import StackScreen from './src/screens/data-structure/contents/stack/StackScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Data: DataStructureScreen,
    Wish: WishScreen,
    Micro: MicrocontrollerScreen,
    Programming: ProgrammingScreen,
    MoreData: MoreDataScreen,
    Array: ArrayScreen,
    MoreProg: MoreProgScreen,
    MoreMicro: MoreMicroScreen,
    Linked: LinkedListScreen,
    Stack: StackScreen,

  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'MCQ Exam App',
    },
  }
);

export default createAppContainer(navigator);
