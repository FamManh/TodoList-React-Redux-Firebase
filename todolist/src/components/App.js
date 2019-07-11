import React, { Component } from 'react';
import '../App.css';
import TodosList from "./TodosList"
import DoneList from "./DoneList"
import { connect } from 'react-redux'
import { todoListData } from './fireBaseConnect'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentWillMount() {
    todoListData.on('value', (snapshot) => {
      let data = [];
      snapshot.forEach(item => {
        let Id = item.key;
        let Name = item.val().Name;
        let Status = item.val().Status;
        data.unshift({
          Id: Id,
          Name: Name,
          Status: Status
        });

      });
      this.setState({ data: data });
      //this.props.getData(data);
    });
  }

  render() {
    { this.props.getData(this.state.data) }
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <TodosList></TodosList>
            <DoneList></DoneList>
          </div>
        </div>

      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getData: (data) => {
      dispatch({ type: "GET_DATA", newData: data })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
