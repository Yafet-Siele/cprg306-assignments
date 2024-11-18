"use client"
import ItemList from "../week-7/item-list";
import itemsData from './item.json';
import { useState } from "react";




export default function Page() {
    let itemArray = itemsData.map((contact) => ({...contact}));
    const [items] = useState(itemArray);
    
    return(
        <main className="bg-slate-950">
            <h1 className="text-4xl mb-4 text text-white">Shopping List</h1>
            <ItemList items={items} />
        </main>
    );
}