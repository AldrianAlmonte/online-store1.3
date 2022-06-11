import "./product.css"
import QuantityPicker from "./quantityPicker";
import {useState} from "react";


// function Product() {
//     return (
//     <div className="product">
        
//     </div>);
// }

// arrow function

const Product = (props) => {
    let [quantity, setQuantity] = useState(1);

    let onQuantityChange = (value) => {
        // use the value to update the quanity
        setQuantity(value);
        
    };


    //add a fn to rtrn the total. total = price*quantity
        const calculateTotal = () => {
        let total = props.data.price * quantity;
        return total.toFixed(2);
    };

    return (
        <div className="product">
            <img className="product-img" src={'/img/' + props.data.image}></img>
            <h2>{props.data.title}</h2>
            <h3>${props.data.price}</h3>
            <h3>Total: ${calculateTotal()}</h3>
            <QuantityPicker onChange={onQuantityChange}></QuantityPicker>
            <button className="btn btn-primary btn-sm">Add to Cart</button>
        </div>
    );
};

export default Product;