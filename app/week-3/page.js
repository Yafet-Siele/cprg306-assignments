import ItemList from "./item-list";

export default function Page() {
    return (
        <main className="bg-purple-200 p-3">
            <div className="bg-blue-300 rounded-xl p-3">
                <h1 className="text-2xl font-bold text-center text-white">Shopping List</h1>
            </div>
            <ItemList />
        </main>
    );
}
