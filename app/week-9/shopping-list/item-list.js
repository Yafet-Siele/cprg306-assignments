"use client"
import Item from "./item";
import { useEffect, useState } from "react";


export default function ItemList({items, onItemSelect}) {

    const [sortBy, setSortBy] = useState("name");
    let itemArray = items.map((contact) => ({...contact}));
    itemArray.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

    const handleName = () => {
        setSortBy("name")
    }

    const handleCategory = () => {
        setSortBy("category")
        


    }

    return(
        <main>
            <div>
                <h1 className="text-white">Sort By:</h1>
                <button className={sortBy === "name" ? "bg-orange-500 p-1 m-2 w-28 rounded": "bg-orange-700 p-1 m-2 w-28 rounded" } onClick={handleName}>Name</button>
                <button className={sortBy === "category" ? "bg-orange-500 p-1 m-2 w-28 rounded": "bg-orange-700 p-1 m-2 w-28 rounded" } onClick={handleCategory}>Category</button>
            </div>
            <div>
                {itemArray.map( (food) => (
                <Item foodObj={food} key={food.id} onSelect={onItemSelect} />
            ) )
            }
            </div>
        </main>
    );

}