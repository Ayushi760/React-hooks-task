import React from 'react'

const ItemList = ({ items, dispatch }) => {
    console.log(items)
    const handleDeleteItem = (id) => {
        dispatch({ type: 'REMOVE_ITEM', payload: id })
    }
    return (
        <div style={{ padding: '20px' }}>
            {items?.map((item, index) => (
                <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', marginBottom: '5px' }}>
                    <div><b>Name:</b> {item.name}</div>
                    <div><b>Description:</b> {item.description}</div>
                    <button onClick={() => handleDeleteItem(item.id)}>Delete Item</button>
                </div>
            ))}
        </div>
    )
}

export default ItemList