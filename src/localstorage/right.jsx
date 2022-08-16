import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {tenUser} from '../reduxFolder/myRedux'
import {editUser} from "../reduxFolder/myRedux"
import { useNavigate} from "react-router-dom";
export function Right(){
    const userArr = useSelector(tenUser)
    const myRedux = useDispatch()
    console.log(userArr)
    const navigate = useNavigate();
    return(
        <>
            <h3 className="title">&nbsp;Header</h3><br />
            <p>View</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>name</th>
                            <th>birthday</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody id="user_list">
                        {
                            userArr.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.birthday}</td>
                                        <td><button key={index} onClick={() => {myRedux(editUser({index})); {navigate("/")}}}>edit</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <button onClick={() => {navigate("/")}}>back</button>
            </>
    )
}