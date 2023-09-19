import Item from "./item";
import ItemList from "./item-list";


export default function Page() {
    return(
        <main>
            <h1 className="text-5xl font-semibold text-justified text-justified mb-5">
                Shopping List
            </h1>
            <ul>
                <ItemList />
            </ul>
        </main>
    );
}