import React, { Component } from 'react';
import DoneListItem from './DoneListItem';
import { connect } from 'react-redux';


class DoneList extends Component {
    setData = () => (
        this.props.data.map((item, key) => {
            if (item.Status === 0)
                return (<DoneListItem key={key} Name={item.Name} Id={item.Id}></DoneListItem>)
        })
    )
    clearAll = () => {
        this.props.clearAll();
    }
    render() {
        return (
            <div className="col-md-6">
                <div className="todolist">
                    <h1>Already Done</h1>
                    <button id="checkAll" className="btn btn-danger" onClick={() => this.clearAll()}>Clear all</button>

                    <ul id="done-items" className="list-unstyled">
                        {this.setData()}
                    </ul>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.data
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        clearAll: () => {
            dispatch({ type: "CLEAR_ALL" });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DoneList)
