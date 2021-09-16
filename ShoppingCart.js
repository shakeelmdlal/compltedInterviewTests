import React, { useState } from "react";
import "./index.css";

function ShoppingCart() {


    // console.log(
    //     Array.apply(null, {length: 15}).map(function(val, index) {
    //       index++;
    //       if (index % 15 == 0){return "FizzBuzz";}
    //       if (index % 3 == 0){return "Fizz";}
    //       if (index % 5 == 0){return "Buzz";}
    //       return index;
    //     }).join('\n')
    //   );
    const ShopList = {
        "shopList": [
            {
                "name": "Detergent",
                "price": 4.99
            },
            {
                "name": "Apples",
                "price": 5.95
            },
            {
                "name": "White Bread",
                "price": 2.40
            },
            {
                "name": "Pork",
                "price": 6.70
            },
            {
                "name": "Celery",
                "price": 3.10
            },
        ]
    }

    const shopItemHandler = (event) => {
        const index = event.nativeEvent.target.selectedIndex;
        const selectedItem = event.nativeEvent.target[index].text;
        const shopList = ShopList.shopList.filter(item => item.name === selectedItem);
        console.log('shoplist :', shopList)
        shopList.map(item => {
            setShopItem({
                name: item.name,
                price: item.price
            })
        })
    }

    const submitHandler = () => {
        let newShopItem;
        if (JSON.stringify(shopItem) !== '{}') {
            newShopItem = [...shoppingList, {
                "name": shopItem.name,
                "price": shopItem.price,
            }]
            console.log('new shop item', newShopItem)
            setShoppingList(newShopItem);
            totalPriceHandler()
        }
    };
    const totalPriceHandler = () => {
        let totPrice = totalPrice;
        totPrice = totPrice + shopItem.price;
        setTotalPrice(totPrice)
    }
    const [shoppingList, setShoppingList] = useState([]);
    const [shopItem, setShopItem] = useState({});
    const [totalPrice, setTotalPrice] = useState(0.00);
    const all_table_rows = shoppingList.map((shopitem, index) => {
        return (<tr key={index}>
            <td>{shopitem.name}</td>
            <td>{shopitem.price.toFixed(2)}</td>
        </tr>);
    });
    const dropdown_options = ShopList.shopList.map((shopitem, index) => {
        return <option key={index} value={index} >{shopitem.name}</option>
    });
    return (
        <div className="App">
            <h1 className="flexHeader">Shopping List</h1>
            <div className="content">
                <div className="ui form">
                    <div className="field">
                        <label className="formTitle">Name of Item</label>
                        <select className="ui dropdown" onChange={shopItemHandler}>
                            {dropdown_options}
                        </select>
                    </div>
                    <div className="field">
                        <p className="fontTitle">Price of Item: ${JSON.stringify(shopItem) === "{}" ? "0.00" : shopItem.price.toFixed(2)}</p>
                    </div>
                    <div className="ui submit button" onClick={submitHandler} >Submit</div>
                </div>
                <div className="ui container" >
                    <table className="ui celled table" >
                        <thead >
                            <tr>
                                <th>Name of Shopping Item</th>
                                {shoppingList.length !== 0 && <th>Price</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {shoppingList.length === 0 ?
                                <tr>
                                    <td><center>No items in the shopping list. Add now!</center></td>
                                </tr> :
                                all_table_rows}
                        </tbody>
                        <tfoot className="tablefoot">
                            <tr>
                                <td className="foot_cell_style">Total Price</td>
                                {shoppingList.length !== 0 && <td>${totalPrice.toFixed(2)}</td>}
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;