import React, {Component} from "react";
import Modal from 'react-modal';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {modalOpenWindow, closeModalWindow, addItemFromInput, inputError, clearError} from '../actions';
import '../Styles/ModalWindowAddItem.css';

class AddUserData extends Component {
    inputRef = React.createRef();

    sendMsg = () => {
        if (this.inputRef.current.value) {
            this.props.addItemFromInput(this.inputRef.current.value);
            this.props.closeModalWindow();
        } else {
            this.props.inputError();
            this.errorDiv();
        }
    };

    errorDiv() {
        if (this.props.isError === true) {
            return <div className="empty_input_error"> Заголовок не может быть пустым </div>
        } else {
            return null;
        }
    };

    render() {
        return (
            <div>
                <button className="btn__add" onClick={() => this.props.modalOpenWindow()}> Добавить</button>
                <Modal isOpen={this.props.isModalOpen}>
                    <div className="modal__title">
                        <h2> Краткое описание </h2>
                        <button className="btn__close" onClick={() => {
                            this.props.closeModalWindow();
                            this.props.clearError()
                        }}><b>x</b>
                        </button>
                    </div>
                    <div className="input__group">
                        <input className="input__box" type="text" ref={this.inputRef} onKeyDown={this.handleKeyDown}/>
                        <div>
                            <button className="btn__add" onClick={() => {
                                this.sendMsg();
                            }}> Создать
                            </button>
                            {this.errorDiv()}
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isModalOpen: state.gettingDataReducer.isModalOpen,
        isError: state.gettingDataReducer.inputError,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({modalOpenWindow, closeModalWindow, addItemFromInput, inputError, clearError}, dispatch)
};

export const AddUserDataContainer = connect(mapStateToProps, mapDispatchToProps)(AddUserData);
