import React, { useState }  from 'react'
const ItemForm = ({dispatch}) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleAddItem = () => {
        if (name && description) {
            dispatch({
                type: 'ADD_ITEM',
                payload: { id: Date.now(), name, description },
            });
            setName('');
            setDescription('');
        }
    };
    return (
        <div style={{display:'flex',gap:'10px'}}>
            <input
                type="text"
                placeholder="Item Name"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Item Description"
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            <button onClick={handleAddItem}>Add Item</button>
        </div>
    )
}

export default ItemForm