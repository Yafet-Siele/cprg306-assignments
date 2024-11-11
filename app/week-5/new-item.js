"use client"

import { useState } from "react"


export default function NewItem({currentCount}) {

    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");

    const [counter, setCounter] = useState(1);
    
    const incrementCounter = () => {
        if (counter <= 19) {
            setCounter(counter + 1);
        }
    };
    
    const oppositeCounter = () => {
    if (counter >= 2) {
        setCounter(counter - 1);
        }
    };

    let buttonStyles = "bg-blue-500 hover:bg-blue-700  rounded text-white mt-5 px-4 py-2";

    let buttonStyle = "bg-blue-500 hover:bg-blue-700  rounded text-white mt-5 px-4 py-2";

    if(counter >=20){
        buttonStyles = "bg-gray-500 rounded text-white mt-5 px-4 py-2";
    }
    if(counter <=1){
        buttonStyle = "bg-gray-500 rounded text-white mt-5 px-4 py-2";
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {
            itemName: name,
            itemCounter: counter,
            itemCategory: category,
        }

        console.log(item);
        alert(`Added item: ${item.itemName}, quantity: ${item.itemCounter}, category: ${item.itemCategory}`)
        setCategory("produce")
        setName("")
        setCounter(1) 
        
    }

    const handleName = (event) => setName(event.target.value);
    const handleCategory = (event) => setCategory(event.target.value);
    


    return(
        <main className="flex justify-center h-screen bg-black">
            <div>
                <form onSubmit={handleSubmit} className="m-4 p-2 bg-black w-96">
                    <div>
                        <input type="text" placeholder="Item Name" value={name} onChange={handleName} className="h-12 rounded-xl w-full p-3"/>
                    </div>
                    <div className="flex justify-between text-white ">
                    <div className="flex flex-row justify-center space-x-4">
                        <p className="mt-5 px-4 py-2">{counter}</p>
                        <p><button type="button" className={buttonStyle} onClick={oppositeCounter}> - </button></p>
                        <p><button type="button" className={buttonStyles} onClick={incrementCounter}> + </button></p>
                    </div>
                        <select value={category} onChange={handleCategory} className="rounded-xl w-40 h-10 text-black mt-5">
                            <option value="produce">Produce</option>
                            <option value="diary">Diary</option>
                            <option value="bakery">Bakery</option>
                            <option value="meat">Meat</option>
                            <option value="frozen">Frozen Foods</option>
                            <option value="canned">Canned Goods</option>
                            <option value="dry">Dry Goods</option>
                            <option value="beverages">Beverages</option>
                            <option value="snacks">Snacks</option>
                            <option value="household">Household</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div>
                        <button className="bg-blue-500 hover:bg-blue-700 rounded-xl w-full h-10 mt-2 text-white">+</button>
                    </div>
                </form>
            </div>
        </main>
    );
}


