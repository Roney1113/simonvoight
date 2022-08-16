import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {setUser, addUser,tenUserInfo} from '../reduxFolder/myRedux'
import { useNavigate} from "react-router-dom";


export function Left(){
    const dispatch = useDispatch();
    const userInfo = useSelector(tenUserInfo)
    const navigate = useNavigate();

    return(
        <>
            <h3 className="title">&nbsp;Header</h3><br/>
            <p>Add</p>
            <span> name&nbsp;&nbsp;</span>
                <input onChange={(e) => {
                        dispatch(setUser({name: e.target.value}));
                }} value={userInfo.name}/><br/><br/>
            <span>birthday&nbsp;&nbsp;&nbsp;</span>
                <input onChange={(e) => {
                    dispatch(setUser({birthday:  e.target.value}));
                }} value={userInfo.birthday}/><br/><br/>
            <button  onClick={() => {dispatch(addUser({name: userInfo.name, birthday: userInfo.birthday})); {navigate("/right")}} }>Add new</button>
        </>
    )
}