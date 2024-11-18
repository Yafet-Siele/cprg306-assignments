"use client"
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdea from "./meal-ideas";
import { useState, useEffect } from "react";
import { useUserAuth } from '../_utils/auth-context';
import { getItems, addItem } from '../_service/shopping-list-service';

export default function Page() {
    const { user } = useUserAuth();
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState('');
    
    const loadItems = async () => {
        if (user?.uid) {
            try {
                let itemsData = await getItems(user.uid);
                setItems(itemsData);
            } catch (error) {
                console.error(error);
            }
        }
    };

    useEffect(() => {
        loadItems();
    }, [user?.uid]);

        
    const handleAddItem = async (newItem) => {
        if (user?.uid) {
        try {
            let newId = await addItem(user.uid, newItem); 
            setItems([...items, { ...newItem, id: newId }]);
        } catch (error) {
            console.error(error);
        }
        }
    };

    const handleClick = (item) => {
        let cleanedName = item.split(",")[0].trim();
        cleanedName = cleanedName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');

        console.log(cleanedName)
        setSelectedItemName(cleanedName)
    };
    
    if (!user) {
        return 
    }

    return(
        <main className="bg-black">
            <h1 className="text-3xl mb-4 text text-white font-bold">Shopping List</h1>

            <div className="flex">
                <div>
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleClick} />
                </div>
                <div>
                    <MealIdea mealIngredient={selectedItemName} />
                </div>
            </div>
        </main>
    );
}


