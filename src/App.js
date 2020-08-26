import React, {Component} from 'react';
import {GetURLContainer} from './Components/GetURL';
import {TableContainer} from './Components/Table';
import {AddUserDataContainer} from './Components/AddUserData'

class App extends Component{
  render() {
    return (
        <div>
            Список задач
            <GetURLContainer/>
            <AddUserDataContainer/>
            <TableContainer />
        </div>
    )
  }
}

export default App;
