import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyBIjV73S607IEh7f_IaD1QgK5VFJBvQHeg",
    authDomain: "todolist-d5d8c.firebaseapp.com",
    databaseURL: "https://todolist-d5d8c.firebaseio.com",
    projectId: "todolist-d5d8c",
    storageBucket: "todolist-d5d8c.appspot.com",
    messagingSenderId: "16575300300",
    appId: "1:16575300300:web:d54768ea67796052"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// data.on('value', (snapshot) => {
//     console.log(snapshot.val())
// })
export const todoListData = firebase.database().ref('/Todo')
