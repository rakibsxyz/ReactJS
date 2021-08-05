import React,{useEffect,useState} from 'react'
import firebase from 'firebase';
import IUser from '../Interfaces/IUser';


export default function AllUser() {

    const [userList, setUserList] = useState()

    useEffect(() => {
        const dbRef = firebase.database().ref();
        dbRef.child("User").get().then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val())
            setUserList((Object.values(snapshot.val())))
            // console.log(userList.length)
          } else {
            console.log("No data available");
          }
        }).catch((error) => {
          console.error(error);
        });
    }, [])


    return (
        <div>
            {/* All user */}
            {userList && 
            userList.map((user) =>{
               return <div><h1>Name: {user.name}</h1> 
               <h5>Age: {user.age}</h5>
               </div>
            })
            }
            {/* {userList && 
            <h1> {userList.length}</h1> } */}
        </div>
    )
}
