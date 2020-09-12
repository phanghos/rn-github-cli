/**
 * @format
 */

import 'react-native-gesture-handler';
import { AppRegistry, LogBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

LogBox.ignoreLogs(['JSON.stringify', 'Invalid prop `style`']);

AppRegistry.registerComponent(appName, () => App);
