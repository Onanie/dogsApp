/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import Home from '../pages/Home/Home';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';


/*it('renders correctly', () => {
  renderer.create(<App />);
});
*/

it('renders correctly',()=>{
const tree = renderer.create(
  <Home/>
).toJSON();
expect(tree).toMatchSnapshot(); 
});
