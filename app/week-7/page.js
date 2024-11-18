"use client"
import ItemList from "./item-list";
import App from "./new-item";
import itemsData from './items.json';
import { useState } from "react";


export default function Page() {
    let itemArray = itemsData.map((contact) => ({...contact}));
    const [items, setItems] = useState(itemArray);

    
    const handleAddItem = (event) => {
        setItems(itemArray => [...itemArray,event] );
    }


    return(
        <main className="bg-black">
            <h1 className="text-3xl text-white">Shopping List</h1>

            <div className="flex">
                <div>
                    <App onAddItem={handleAddItem} />
                    <ItemList items={items} />
                </div>
            </div>
        </main>
    );
}