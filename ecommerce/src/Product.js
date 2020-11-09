import { Description } from '@material-ui/icons';
import React,{useEffect} from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';
import { Link ,useHistory} from 'react-router-dom';
import ImageInfo from './ImageInfo';
import axios from "axios";

function Product({id, title, price, image, description,category}) {

    const [ {}, dispatch] = useStateValue();
    let history = useHistory();

    const addToBasket = () => {
        dispatch ({
            type : 'ADD_TO_BASKET',
            item : {
                id : id,
                title : title,
                description :description,
                image : image,
                price : price,
                category : category
            }
        })
    };


    function clickHandler(){
        history.push(`/imageinfo/${id}`);
    }

    return (
        <div className = "product">
            <div className= "product_info">
            <h1 className="product_title">{title}{id}</h1>
            <h2>{category}</h2>
            <p className = "product_prize">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            </div>
           <img className= "product_image" onClick={clickHandler} src={image} alt=""/>
            <button className="product_button" onClick= {addToBasket}>Add to Cart</button>
        </div>
    )
}

export default Product;
