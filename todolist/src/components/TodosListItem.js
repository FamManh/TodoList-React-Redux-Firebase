import React, { Component } from 'react';
import { connect } from 'react-redux'

class TodosListItem extends Component {
    changeStatus = (id) => {
        this.props.updateData(id);
    }
    render() {
        return (
            <li className="ui-state-default">
                <div className="checkbox">
                    <label>
                        <input type="checkbox" defaultValue onClick={() => { this.changeStatus(this.props.Id) }} />{this.props.Name}</label>
                </div>
            </li>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateData: (updateId) => {
            dispatch({ type: "CHANGE_STATUS_DONE", updateId: updateId })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosListItem)
