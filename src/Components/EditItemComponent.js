import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {editTitle} from '../actions';
import {bindActionCreators} from 'redux';
import {deleteItem, closeEditWindow, btnBackFalse, btnSaveTrue} from '../actions';
import "../Styles/EditItemComponent.css";

class EditItemComponent extends Component {

    inputEditedRef = React.createRef();

    showMeTitle = (params) => {
        let inputValue = "";

        this.props.data.forEach((item) => {
            if (item.id === Number(params.id)) {
                inputValue = item.title;
            }
            return inputValue;
        });
        return inputValue;
    };

    checkingValueToSwitch = (titleValue) => {
        if (titleValue === this.inputEditedRef.current.value) {
            return this.props.btnBackFalse();  // false
        } else {
            return this.props.btnSaveTrue();  // true
        }
    };

    saveOrBackButtonSwitcher = (paramsNumber) => {
        if (this.props.buttonSwitcher) {
            return <button className="btn__block"
                           onClick={() => {
                               this.props.editTitle(paramsNumber, this.inputEditedRef.current.value);
                               this.props.btnBackFalse();
                               this.props.closeEditWindow();
                           }}> Сохранить
            </button>
        } else {
            return <Link to={"/items/"}>
                <button className="btn__block" onClick={() => this.props.closeEditWindow()}>Вернуться к списку</button>
            </Link>
        }
    };

    render() {

        let {match: {params}} = this.props;
        let paramsNumber = Number(params.id);  // params.id

        return (
            <div>
                <div className="title__block">
                    <h2> {`Задача № ${params.id}`} </h2>
                    <button className="btn__delete" onClick={() => {
                        this.props.deleteItem(paramsNumber);
                        this.props.closeEditWindow();
                    }}> Удалить
                    </button>
                </div>


                <div className="container__block">
                    <h4>Краткое описание</h4>
                    <input className="input__box" type="text" defaultValue={this.showMeTitle(params)}
                           ref={this.inputEditedRef}
                           onChange={() => this.checkingValueToSwitch(this.showMeTitle(params))}/>
                    {this.saveOrBackButtonSwitcher(paramsNumber)}
                </div>


            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.gettingDataReducer.data.data,
        openEditWindow: state.gettingDataReducer.openEditWindow,
        buttonSwitcher: state.gettingDataReducer.buttonSwitcher,
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({editTitle, deleteItem, closeEditWindow, btnBackFalse, btnSaveTrue}, dispatch)
};

export const EditItemContainer = connect(mapStateToProps, mapDispatchToProps)(EditItemComponent);