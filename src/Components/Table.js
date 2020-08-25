import React, {Component} from 'react';
import '../Styles/Table.css';
import {connect} from 'react-redux';

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
                            <td></td>
                            <td></td>
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

export const TableContainer = connect(mapStateToProps, null)(Table);