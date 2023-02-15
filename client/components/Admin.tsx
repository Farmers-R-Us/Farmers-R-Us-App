import React from 'react';
import InventoryBox from './InventoryBox';

export default function Admin() {

    return (
        <div className="adminPage">
            <h3 className="adminTitle">View Your Inventory</h3>
            <div className="inventoryList">
                <InventoryBox />
            </div>
        </div>
    )
}