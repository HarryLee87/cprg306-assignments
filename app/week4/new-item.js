"use client";

import { useState } from "react";

export default function NewItem() {
    
    const[name, setName] = useState("");
    const[quantity, setQuantity] = useState(1);
    const[category, setCategory] = useState("produce");

    const qtyChangeHandler = (event) => {
        setQuantity(event.target.value);

    }

    return(
        <main>
            <div>
                <input className="text-black" placeholder="Item Name"
                    type="text" 
                    required value={name} 
                    onChange={setName}></input>
            </div>
            <div>
                <input className="text-black"
                    type="number"
                    value={quantity}
                    onChange={qtyChangeHandler}
                    required
                    min={1}
                    max={99}>
                </input>
            </div>
        </main>
    );
}