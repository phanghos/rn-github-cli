/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['JSON.stringify', 'Invalid prop `style`']);

AppRegistry.registerComponent(appName, () => App);
