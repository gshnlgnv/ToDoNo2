import React, {Component} from "react";
import Modal from 'react-modal';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {modalOpenWindow, closeModalWindow, addItemFromInput} from '../actions';

class AddUserData extends Component {

    inputRef = React.createRef();

    render() {

        return (
            <div>
                <button onClick={() => this.props.modalOpenWindow()} > Create New </button>

                <Modal isOpen={this.props.isModalOpen}>
                    <h2>Add new item</h2>
                    <input type="text" ref={this.inputRef}/>

                    <button onClick={()=> {
                        this.props.addItemFromInput(this.inputRef.current.value);
                        this.props.closeModalWindow();
                    } }>Add item</button>

                    <button onClick={()=>this.props.closeModalWindow()}> Close </button>
                </Modal>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isModalOpen: state.gettingDataReducer.isModalOpen,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({modalOpenWindow, closeModalWindow, addItemFromInput}, dispatch)
};

export const AddUserDataContainer = connect(mapStateToProps, mapDispatchToProps)(AddUserData);
