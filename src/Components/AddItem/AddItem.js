import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init.js"
const AddItem = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, event) => {
        fetch('https://omnigaming.onrender.com/item', {
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
        event.target.reset()
    };

    return (
        <div className="w-50 mx-auto">
            <h2>Add a computer</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column my-5">
                <input placeholder="Email" className="mb-2 form-control" readOnly type="email" value={user.email} {...register("email")} required />
                <input placeholder="Computer Name" type="text" className="mb-2 form-control" {...register("name", { required: true })} />
                <input placeholder="Supplier" type="text" className="mb-2 form-control" {...register("supplier", { required: true })} />

                <textarea placeholder="Description" className="mb-2 form-control"{...register("desc", { required: true })} />

                <input placeholder="Price" type="number" className="mb-2 form-control"{...register("price", { min: 400 })} />
                <input placeholder="Quantity" type="number" className="mb-2 form-control"{...register("quantity", { min: 5, required: true })} />
                <input placeholder="Photo URL" type="text" className="mb-2 form-control"{...register("img", { required: true })} />
                <input placeholder="Sold" type="text" className="mb-2 form-control"{...register("sold")} value="0" readOnly />
                <input type="submit" value="Add Service" className="btn btn-primary" />
            </form>
        </div>
    );

};

export default AddItem;
