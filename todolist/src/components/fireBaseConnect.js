import * as firebase from 'firebase';
var firebaseConfig = {
    
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// data.on('value', (snapshot) => {
//     console.log(snapshot.val())
// })
export const todoListData = firebase.database().ref('/Todo')
