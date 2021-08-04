import React, { useEffect, useContext} from 'react';
import firebase from "firebase/app";
import { Context } from '../../contaxt';


const FirebaseAuth = ({Children}) => {
    const { dispatch } = useContext(Context)
    useEffect(() => {
        return firebase.auth().onAuthStateChanged((user) => {
            if (!user) {
                dispatch({
                   type:'LOGOUT' 
                });
            }else{
                dispatch({
                    type:'LOGIN',
                    payload:user,
                })
            }
        })
    }, [])
    return (
        <div>
        {
            Children
        }
        </div>
    );
};

export default FirebaseAuth;