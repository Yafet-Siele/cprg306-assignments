

export default function Item ({Obj, onSelect}) {

    let {id, name, quantity, category} = Obj;


    return(
        <div className="p-2 m-4 bg-slate-900 max-w-sm text-white hover:bg-orange-500">
            <ul onClick={() => onSelect(name)}>
                <li key={id}>{name}</li>
                <li>Buy {quantity} in {category}</li>
            </ul>
        </div>
    );
}