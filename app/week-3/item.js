
export default function Item ({Obj}) {

    let {name, quantity, category} = Obj;


    return(
        <div className="border-white text-white m-4 bg-rose-400 w-9/12 rounded">
            <ul>
                <li className="text-2xl text-black">{name}</li>
                <li>Buy {quantity} in {category}</li>
            </ul>
        </div>
    );
};