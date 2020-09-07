import React, {Component} from 'react';
import '../Styles/Table.css';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {deleteItem, setEditWindowActive} from '../actions';
import {Link} from "react-router-dom";
import {GetURLContainer} from "./GetURL";
import {AddUserDataContainer} from "./AddUserData";

class Table extends Component {
    renderTable() {
        if (this.props.data.length > 0) {
            return <div>
                <table>
                    <tbody>
                    {this.props.data.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.id}</td>
                            <td className="table__item">{item.title}</td>
                            <td>
                                <Link to={{pathname: `/items/${item.id}`,}}>
                                    <button className="btn__edit" onClick={() => this.props.setEditWindowActive()}>
                                        <i className="far fa-edit"></i>
                                    </button>
                                </Link>
                            </td>
                            <td>
                                <button className="btn__delete1" onClick={() => this.props.deleteItem(item.id)}>
                                    <i className="far fa-trash-alt"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

        } else {
            return <div> Нет данных </div>
        }
    }

    render() {
        return (
            <div>
                <div className="app__title">
                    <h2>Список задач</h2>
                    <div>
                        <GetURLContainer/>
                        <AddUserDataContainer/>
                    </div>
                </div>
                <div>
                    {this.renderTable()}
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        data: state.gettingDataReducer.data.data,
    })
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({deleteItem, setEditWindowActive}, dispatch)
};

export const TableContainer = connect(mapStateToProps, mapDispatchToProps)(Table);
