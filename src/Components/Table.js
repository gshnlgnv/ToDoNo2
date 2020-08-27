import React, {Component} from 'react';
import '../Styles/Table.css';
import {connect} from 'react-redux';
import trash from '../Pics/trash.png'
import edit from '../Pics/edit.png'
import {bindActionCreators} from "redux";
import {deleteItem} from '../actions';

import {BrowserRouter, Route, Link} from "react-router-dom";
import editItemComponent from '../Components/editItemComponent';

class Table extends Component {



    renderTable() {
        if (this.props.data.length > 0) {
            return <BrowserRouter>
            <div>
                    <table>
                        <tbody>
                        {this.props.data.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.id}</td>
                                <td className="table__item">{item.title}</td>
                                <td> <Link to={{pathname: "/item/id", }}>  <img alt="edit" className="pic" src={edit}/> </Link>   </td>
                                <td><img alt="delete" className="pic" src={trash}
                                         onClick={() => this.props.deleteItem(item.id)}/></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                <Route path={`/item/id`} component={editItemComponent}/>
                </div>
            </BrowserRouter>
        } else {
            return <div> Нет данных </div>
        }
    }

    render() {
        return (
            <div>
                {this.renderTable()}
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
    return bindActionCreators({deleteItem}, dispatch)
};

export const TableContainer = connect(mapStateToProps, mapDispatchToProps)(Table);
