import { AppRegistry } from 'react-native';
import App from './App';



console.ignoredYellowBox=[
    'Warning:',
    'Remote debugger is in a background',
    'source.uri should not be an empty string'
]
AppRegistry.registerComponent('PeanutCity', () => App);
