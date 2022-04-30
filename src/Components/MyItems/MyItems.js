import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [item, setItem] = useState([])
    useEffect(() => {
        const getOrders = async () => {
            const email = user.email
            const url = `http://localhost:5000/myItem?email=${email}`
            const { data } = await axios.get(url, {
                headers: { 
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setItem(data)
        }
        getOrders()
    }, [user])
    return (
        <div>
            <h2>My Items: {item.length}</h2>
        </div>
    );
};

export default MyItems;