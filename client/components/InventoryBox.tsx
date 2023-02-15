import React from 'react';

export default function InventoryBox() {
    return (
        <div className="inventoryBox">
            <img src="../assets/potato.png" alt="product picture"></img>
            <h3>Potato</h3>
            <div className="inventoryRight">
                <input className="input"></input>
                <button className="smallBtn">Update</button>
                <button className="smallBtn">Delete</button>
            </div>
        </div>
    )
}