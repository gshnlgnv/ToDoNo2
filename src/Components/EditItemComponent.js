import React, {Component} from "react";
import {Link} from "react-router-dom";

class editItemComponent extends Component {
    render() {
        return(
            <div>
                <div>edit</div>
                <Link to={/items/}>Back</Link>
            </div>
        );
    }
}

export default editItemComponent;