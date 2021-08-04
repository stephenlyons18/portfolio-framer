import React, {Component} from 'react';

import { color } from 'style-value-types'
import NavBar from './components/NavBar/NavBar';
import RouterWrap from './components/Router/RouterWrap';

class App extends Component {
  render(){
  return (
    <div>
      <RouterWrap/>
      <NavBar/>
    </div>
  );
  }
}

export default App;
