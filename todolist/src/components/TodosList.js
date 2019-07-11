import React, { Component } from 'react';
import TodosListItem from './TodosListItem';
import { connect } from 'react-redux';


class TodosList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            Name: "",
        }
    }

    isChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    keyPress = (event) => {
        if (event.key === "Enter" && this.state.Name !== "") {
            let item = {
                Name: this.state.Name,
                Status: 1
            }
            this.props.addNew(item)
            this.setState({
                Name: ""
            })
        }
    }

    setData = () => (
        this.props.data.map((item, key) => {
            if (item.Status !== 0)
                return (<TodosListItem key={key} Name={item.Name} Id={item.Id}></TodosListItem>)
            return "";
        })
    )

    markAllAsDone = () => {
        this.props.markAllAsDone();
    }

    getTodosCount = () => {
        let count = 0;
        this.props.data.map((item, key) => {
            if (item.Status !== 0)
                count++;
        })
        return count;
    }

    render() {
        return (
            <div className="col-md-6">
                <div className="todolist not-done">
                    <h1>Todos</h1>
                    <input type="text" value={this.state.Name} name="Name" onKeyPress={(event) => this.keyPress(event)} onChange={(event) => this.isChange(event)} className="form-control add-todo" placeholder="Add todo" />


                    <button id="checkAll" className="btn btn-success" onClick={() => this.markAllAsDone()}>Mark all as done</button>
                    <hr />
                    <ul id="sortable" className="list-unstyled">
                        {this.setData()}

                    </ul>
                    <div className="todo-footer">
                        <strong><span className="count-todos" />{this.getTodosCount()}</strong> Items Left
    </div>
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
        addNew: (item) => {
            dispatch({ type: "ADD_NEW", newItem: item })
        },
        getData: (data) => {
            dispatch({ type: "GET_DATA", newData: data })
        },
        markAllAsDone: () => {
            dispatch({ type: "MARK_ALL_AS_DONE" });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosList)
