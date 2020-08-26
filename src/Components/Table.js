import React, {Component} from 'react';
import '../Styles/Table.css';
import {connect} from 'react-redux';
import trash from '../Pics/trash.png'
import edit from '../Pics/edit.png'
import {bindActionCreators} from "redux";
import {deleteItem} from '../actions';

class Table extends Component{

    renderTable() {

        if (this.props.data) {
            return  <div>
                <table>
                    <tbody>
                    {this.props.data.map( (item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td><img alt="edit" className="pic" src={edit}/></td>
                            <td><img alt="delete" className="pic" src={trash} onClick={ () => this.props.deleteItem(item.id) }/></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        } else {
            return <div>No data</div>
        }
    }

    render(){

        console.log("table data : ", this.props.data);

        return(
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
    return bindActionCreators({deleteItem},dispatch)
};

export const TableContainer = connect(mapStateToProps, mapDispatchToProps)(Table);
