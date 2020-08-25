import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {getURL} from '../actions';

class GetURLComponent extends Component{
    render() {
        return (
            <div>
                <button onClick={this.props.getURL}> Get Data </button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({getURL}, dispatch)
};

export const GetURLContainer = connect(null, mapDispatchToProps)(GetURLComponent);