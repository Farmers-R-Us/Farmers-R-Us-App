import React from 'react';

export default function InventoryBox() {
    return (
        <div className="inventoryBox">
            <img className="imgClass" src={require("../assets/potato.png").default} alt="product picture"></img>
            <h3>Potato</h3>
            <div className="inventoryRight">
                <input className="input"></input>
                <button className="smallBtn">Update</button>
                <button className="smallBtn">Delete</button>
            </div>
        </div>
    )
}