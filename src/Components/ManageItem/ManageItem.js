import React from 'react';
import { useParams } from 'react-router-dom';
import useItemDetail from '../../Hooks/useItemDetail';

const ManageItem = () => {
    const { itemId } = useParams();
    const [item] = useItemDetail(itemId);
    console.log(item)
    return (
        <div>
            <h2>{item.name}</h2>
        </div>
    );
};

export default ManageItem;