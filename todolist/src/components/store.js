import { todoListData } from './fireBaseConnect'
let redux = require('redux');



const todoListInitialState = {
    data: []
}
const todoListReducer = (state = todoListInitialState, action) => {
    switch (action.type) {
        case 'GET_DATA':
            return { ...state, data: action.newData };
        case 'ADD_NEW':
            todoListData.push(action.newItem)
            return state;
        case 'DELETE_DATA':
            todoListData.child(action.deleteId).remove();
            return state;
        case "CHANGE_STATUS_DONE":
            todoListData.child(action.updateId).update({
                Status: 0
            })
            return state;
        case "MARK_ALL_AS_DONE":
            state.data.forEach(item => {
                if (item.Status === 1) {
                    todoListData.child(item.Id).update({
                        Status: 0
                    })
                }
            })
            return state;
        case "CLEAR_ALL":
            state.data.forEach(item => {
                if (item.Status === 0) {
                    todoListData.child(item.Id).remove();
                }
            })
            return state;
        default:
            return state
    }
}

let store = redux.createStore(todoListReducer);
export default store;