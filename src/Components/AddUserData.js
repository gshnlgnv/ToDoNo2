import React, {Component} from "react";
import Modal from 'react-modal';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {modalOpenWindow, closeModalWindow, addItemFromInput} from '../actions';
import '../Styles/ModalWindowAddItem.css';

class AddUserData extends Component {

    inputRef = React.createRef();

    render() {

        return (
            <div>
                <button className="btn__add" onClick={() => this.props.modalOpenWindow()} > Добавить </button>

                <Modal isOpen={this.props.isModalOpen}>

                    <div className="modal__title">
                        <h2> Добавить новую заметку </h2>
                        <button className="btn__close" onClick={()=>this.props.closeModalWindow()}> X </button>
                    </div>

                    <div className="input__group">

                        <input className="input__box" type="text" ref={this.inputRef}/>
                        <div>
                            <button className="btn__add" onClick={()=> {
                                this.props.addItemFromInput(this.inputRef.current.value);
                                this.props.closeModalWindow();
                            } }> Добавить </button>
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
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({modalOpenWindow, closeModalWindow, addItemFromInput}, dispatch)
};

export const AddUserDataContainer = connect(mapStateToProps, mapDispatchToProps)(AddUserData);
