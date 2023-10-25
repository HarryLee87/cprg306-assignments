"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import ItemData from "./items.json";
import MealIdeas from "./meal-ideas";


export default function Page() {
  const [items, setItems] = useState(ItemData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (event) => {
    setItems([...items, event]);

    
  };

  const handleItemSelect = (item) => {
    let cleanedItemName = item.name.split(",")[0].trim().replace("/[\u{1F600}-\u{1F6FF}]/gu", "");
    setSelectedItemName(cleanedItemName);
  };
  return (
    <main>
      <h1 className="text-5xl font-semibold text-justified text-justified m-5">
        Shopping List
      </h1>
      <div className="flex">
        <div>
          <NewItem onAddItem={handleAddItem} />
        </div>
        <div>
          <ul>
            <ItemList items={items}
            onItemSelect={handleItemSelect} />
          </ul>
        </div>
        <div>
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
