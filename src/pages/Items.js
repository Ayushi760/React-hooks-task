import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import ItemForm from '../components/ItemForm';
import ItemList from '../components/ItemList';
import { useItems } from '../context/ItemContext';
import { useSortedItems } from '../hooks/useSortedItems';


const Items = () => {
    const { state, dispatch } = useItems();
    const [sortOption, setSortOption] = useState('name');
    const [isAscending, setIsAscending] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const sortedItems = useSortedItems(state.items, sortOption, isAscending, searchTerm);

    const searchRef = useRef(null);

    useLayoutEffect(() => {
        searchRef.current.focus();
    }, []);

    useEffect(() => {
        console.log("List of Items: ", state.items);
    }, [state.items])

    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: '100vh', margin: '50px' }}>
            <h1>Hooks Practice</h1>
            <ItemForm dispatch={dispatch} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <h3 style={{ marginRight: '40px' }}>Item List</h3>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    ref={searchRef}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select onChange={(e) => setSortOption(e.target.value)} value={sortOption}>
                    <option value="name">Sort By Name</option>
                    <option value="description">Sort By Description</option>
                </select>
                <button onClick={() => setIsAscending(!isAscending)}>
                    {isAscending ? 'Sort Descending' : 'Sort Ascending'}
                </button>
            </div>
            <ItemList items={sortedItems} dispatch={dispatch} />
        </div>
    );
};

export default Items;
