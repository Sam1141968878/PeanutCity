import { AppRegistry } from 'react-native';
import App from './App';



console.ignoredYellowBox=[
    'Warning:',
    'Remote debugger is in a background',
    'source.uri should not be an empty string'
]
if((process.env.NODE_ENV || '').toLowerCase() === 'production'){
  // disable console. log in production
  console.log = function () {};
  console.info = function () {};
  console.warn = function () {};
  console.error = function () {}
  console.debug = function () {}
}
AppRegistry.registerComponent('PeanutCity', () => App);
