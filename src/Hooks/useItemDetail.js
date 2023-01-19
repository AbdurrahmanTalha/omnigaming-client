import { useEffect, useState } from "react";

const useItemDetail = itemId => {
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `https://omnigaming.onrender.com/item/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));

    }, [itemId]);
    return [item, setItem]
}

export default useItemDetail;
