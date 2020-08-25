import React, {Component} from 'react';
import {GetURLContainer} from './Components/GetURL';
import {TableContainer} from './Components/Table';
import AddUserData from './Components/AddUserData'

class App extends Component{
  render() {
    return (
        <div>
            Список задач
            <GetURLContainer/>
            <AddUserData/>
            <TableContainer />
        </div>
    )
  }
}

export default App;