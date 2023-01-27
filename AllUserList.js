import React, { useState } from "react";
import UserDetails from "./UserDetails";
import Test from "./Test";

const AllUserList = () => {

    // state ={
    //     name : "Priyanshu Saxena",
    // }

    const [state, setState] = useState({
        name : "Priyanshu Saxena",
    })

    let allUsers = [
        {
            name: "John",
            email:"john@email.com",
            phone:"9838726546"
        },
        {
            name: "Rahul",
            email:"rahul@email.com",
            phone:"9657897296"
        },
        {
            name: "Amit",
            email:"amit@email.com",
            phone:"9812349546"
        },
        
    ]

    let setStateName = (name) => {
        setState({...state, name});
    }

    // let array = allUsers.map((user,index)=>{
    //       <UserDetails key={index} user = {user} />
    // })

    return( 
         <div>
            <Test name = {state.name} setName = {setStateName}/>
            {allUsers.map((user,index)=> (
               <UserDetails key={index} user = {user}/>
            ))}
         </div>
    )
}









// class AllUserList extends React.Component{
//     state ={
//                 name : "Priyanshu Saxena",
//             }
        
//             allUsers = [
//                 {
//                     name: "John",
//                     email:"john@email.com",
//                     phone:"9838726546"
//                 },
//                 {
//                     name: "Rahul",
//                     email:"rahul@email.com",
//                     phone:"9657897296"
//                 },
//                 {
//                     name: "Amit",
//                     email:"amit@email.com",
//                     phone:"9812349546"
//                 },
                
//             ];
        
            
//         render() {
//             setTimeout(() => {
//                 this.setState({name: "Abhay Raj Gupta" });
//             }, 15000);
//             return( 
//                 <div>

//                     {/* <UserDetails user={allUsers[0]}/>
//                     <UserDetails user={allUsers[1]}/>
//                     <UserDetails user={allUsers[2]}/> */}
//                     <h1>The name is {this.state.name}</h1>
//                     {
//                         this.allUsers.map((user,index) => {
//                             <UserDetails keys={index} user = {user}/>
//                         })
//                     }
                   
                   
//                 </div>
//             )
//         }
           
// }



// const AllUserList = () => {
//     const [state, setState] = useState({name : "Priyanshu Saxena"});

//     return (
//         <h1>The name is {state.name}</h1>
//     )
// }


export default AllUserList;