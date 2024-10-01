export default function Counter({currentCount, incrementCountFunction, oppositeCounterFunction}){
    // button enabled
    let buttonStyles = "bg-blue-400 hover:bg-blue-700  rounded text-white mt-5 px-4 py-2";

    let buttonStyle = "bg-blue-400 hover:bg-blue-700  rounded text-white mt-5 px-4 py-2";

    if(currentCount >=20){
        buttonStyles = "bg-gray-500 rounded text-white mt-5 px-4 py-2";
    }
    if(currentCount <=1){
        buttonStyle = "bg-gray-500 rounded text-white mt-5 px-4 py-2";
    }
    return(
        <div className="flex flex-row justify-center space-x-4">
            <p className="mt-5 px-4 py-2">{currentCount}</p>
            <p><button className={buttonStyle} onClick={oppositeCounterFunction}> - </button></p><p><button onClick={incrementCountFunction} className={buttonStyles}>+</button></p>
        </div>
    );
}

