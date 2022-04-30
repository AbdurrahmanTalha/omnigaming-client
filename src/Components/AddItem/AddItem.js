import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init.js"
const AddItem = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/item', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    };

    return (
        <div className="w-50 mx-auto">
            <h2>Add a computer</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column my-5">
                <input placeholder="Computer Name" className="mb-2" value={user.email} {...register("email", { required: true })} />
                <input placeholder="Computer Name" className="mb-2" {...register("name", { required: true })} />
                <input placeholder="Supplier" className="mb-2" {...register("supplier", { required: true })} />

                <textarea placeholder="Description" className="mb-2"{...register("desc", { required: true })} />

                <input placeholder="Price" type="number" className="mb-2"{...register("price", { min: 400 })} />
                <input placeholder="Quantity" type="number" className="mb-2"{...register("quantity", { min: 5, required: true })} />
                <input placeholder="Photo URL" type="text" className="mb-2"{...register("img", { required: true })} />

                <input type="submit" value="Add Service" className="btn btn-primary" />
            </form>
        </div>
    );

};

export default AddItem;