import React, {Component} from 'react';
import {GetURLContainer} from './Components/GetURL';
import {TableContainer} from './Components/Table';
import {AddUserDataContainer} from './Components/AddUserData';
import './Styles/App.css';

class App extends Component{
  render() {
    return (
        <div className="wrapper">
            <div className="app__title">
                <h2>Список задач</h2>
                <div>
                    <GetURLContainer/>
                    <AddUserDataContainer/>
                </div>
            </div>
            <div>
                <TableContainer />
            </div>
        </div>
    )
  }
}

export default App;
