import React, { Component } from 'react';
import { connect } from 'react-redux'

class DoneListItem extends Component {
    deleteData = (deleteId) => {

        this.props.deleteData(deleteId);
    }
    render() {
        return (
            <li>{this.props.Name}
                <button onClick={() => this.deleteData(this.props.Id)} className="btn btn-default btn-xs pull-right"><span className="glyphicon glyphicon-remove" /></button>
            </li>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deleteData: (deleteId) => {
            dispatch({ type: "DELETE_DATA", deleteId: deleteId })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DoneListItem)
