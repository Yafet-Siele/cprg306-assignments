

export default function Item ({Obj}) {

    let {id, name, quantity, category} = Obj;


    return(
        <div className="p-2 m-4 bg-slate-900 max-w-sm text-white">
            <ul>
                <li key={id}>{name}</li>
                <li>Buy {quantity} in {category}</li>
            </ul>
        </div>
    );
}
