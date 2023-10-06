import { useState } from "react";
import Item from "./item";
import ItemData from "./items.json";

export default function ItemList() {
  let itemArray = ItemData.map((item) => ({ ...item }));

  let [sortBy, setSortBy] = useState("name");
  //let [filter, setFilter] = useState("all")

  itemArray = itemArray.sort((a, b) => {
    if(isNaN(parseInt(a[sortBy]))){
        let nameA = a[sortBy].toUpperCase();
        let nameB = b[sortBy].toUpperCase();
        
        if(nameA < nameB){
            return -1;
        }
        if(nameA > nameB){
            return 1;
        }
        return 0;
    } else {
        return a[sortBy] - b[sortBy];
    }
  });

  let groupedItems = {};
  itemArray.forEach((item) => {
    if (!groupedItems[item.category]) {
      groupedItems[item.category] = [];
    }
    groupedItems[item.category].push(item);
  });

  return (
    <>
      <div>
        <label>Sort by: </label>
        <button
          className="m-2 p-2 bg-yellow-100 text-lime-900 rounded-md"
          value="name"
          onClick={(event) => setSortBy(event.target.value)}
        >
          Name
        </button>
        <button className="m-2 p-2 bg-yellow-100 text-lime-900 rounded-md"
        value="category"
        onClick={(event) => setSortBy(event.target.value)}>
          Category
        </button>
        <button className="m-2 p-2 bg-yellow-100 text-lime-900 rounded-md"
        //value="groupedCat"
        value="Grouped Category" 
        
        onClick={groupedItems}>
          Grouped Category
        </button>
      </div>

      <section className="grid grid-cols-1 gap-5 p-5">
        {itemArray.map((item) => (
          <Item item={item} />
        ))}
      </section>
    </>
  );
}

