export default function Item({name, quantity, category}) {
    return(
        <div className="p-6 m-2 border border-red-500 rounded-lg bg-stone-700 w-auto">
            <h2 className = "text-2xl font-bold text-justified text-yellow-300">{name}</h2>
            <p className = "text-xl text-white">Buy {quantity} in {category}</p>
        </div>
    );
}