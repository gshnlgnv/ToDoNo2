import React, {Component} from 'react';
import {TableContainer} from './Components/Table';
import './Styles/App.css';
import {BrowserRouter, Route, Redirect} from "react-router-dom";
import {EditItemContainer} from "./Components/EditItemComponent";
import {connect} from 'react-redux';

class App extends Component {

    renderTable = () => {
        if (this.props.openEditWindow) {
            return <Route path={"/items/:id"} component={EditItemContainer}/>
        } else {
            return <Route path={"/items/"} component={TableContainer}/>
        }
    };

    render() {
        return (
            <BrowserRouter>
                <div className="wrapper">
                    <div className="table__wrapper">
                        {this.renderTable()}
                    </div>

                    <footer className="footer">
                        <p className="footer__text">2020 .</p>
                    </footer>
                </div>
                <Redirect from='/' to='/items'/>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        openEditWindow: state.gettingDataReducer.openEditWindow,
    }
};

export const AppContainer = connect(mapStateToProps, null)(App);

