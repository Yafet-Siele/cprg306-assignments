// "use client"
// import { useState } from "react"

// export default function NewItem({onAddItem}) {

//     const [name, setName] = useState("");
//     const [quantity, setQuantity] = useState(1);
//     const [category, setCategory] = useState("produce");

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         const item = {
//             id: Math.random().toString(36).substring(2,20),
//             name: name,
//             quantity: quantity,
//             category: category,
//         }
//         onAddItem(item)
//     }

//     const handleName = (event) => setName(event.target.value);
//     const handleQuantity = (event) => setQuantity(Number(event.target.value));
//     const handleCategory = (event) => setCategory(event.target.value);


//     return(
//         <main>
//             <div className="flex">
//                 <form onSubmit={handleSubmit} className="m-4 p-2 bg-cyan-100 w-96">
//                     <div>
//                         <input type="text" placeholder="Item Name" value={name} onChange={handleName} required className="h-12 rounded-xl w-full"/>
//                     </div>
//                     <div className="flex justify-between mt-2">
//                         <input type="number" min="1" max="99" value={quantity} onChange={handleQuantity} className="rounded-xl w-20 h-10"  />
//                         <select value={category} onChange={handleCategory} className="rounded-xl w-40 h-10">
//                             <option value="produce" className="p-2 m-4 bg-slate-900 max-w-sm">Produce</option>
//                             <option value="diary" className="p-2 m-4 bg-slate-900 max-w-sm">Diary</option>
//                             <option value="bakery" className="p-2 m-4 bg-slate-900 max-w-sm">Bakery</option>
//                             <option value="meat" className="p-2 m-4 bg-slate-900 max-w-sm">Meat</option>
//                             <option value="frozen" className="p-2 m-4 bg-slate-900 max-w-sm">Frozen Foods</option>
//                             <option value="canned" className="p-2 m-4 bg-slate-900 max-w-sm">Canned Goods</option>
//                             <option value="dry" className="p-2 m-4 bg-slate-900 max-w-sm">Dry Goods</option>
//                             <option value="beverages" className="p-2 m-4 bg-slate-900 max-w-sm">Beverages</option>
//                             <option value="snacks" className="p-2 m-4 bg-slate-900 max-w-sm">Snacks</option>
//                             <option value="household" className="p-2 m-4 bg-slate-900 max-w-sm">Household</option>
//                             <option value="other" className="p-2 m-4 bg-slate-900 max-w-sm">Other</option>
//                         </select>
//                     </div>
//                     <div>
//                         <button className="rounded-xl w-full h-10 mt-2">+</button>
//                     </div>
//                 </form>
//             </div>
//         </main>
//     );
// }