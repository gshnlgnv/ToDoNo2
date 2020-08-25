import React, {Component} from 'react';
import {GetURLContainer} from './Components/GetURL';
import {TableContainer} from './Components/Table';

class App extends Component{
  render() {
    return (
        <div>
            <GetURLContainer/>
            <TableContainer />
        </div>
    )
  }
}

export default App;