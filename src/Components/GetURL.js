import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getURL} from '../actions';
import '../Styles/GetURL.css'

class GetURLComponent extends Component{
    render() {
        return (
            <div>
                <button className="btn__add__url" onClick={this.props.getURL}> Загрузить </button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({getURL}, dispatch)
};

export const GetURLContainer = connect(null, mapDispatchToProps)(GetURLComponent);
