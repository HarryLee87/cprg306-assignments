export default function Item({name, quantity, category}) {
    return(
        <div className="p-6 m-1 border border-red-50o bg-stone-800 ">
            <h2 className = "text-2xl font-bold text-justified text-red-100">{name}</h2>
            <p className = "text-xl text-orange-100">Qty: {quantity}</p>
            <p className = "text-xl text-orange-100">Cat: {category}</p>
        </div>
    );
}