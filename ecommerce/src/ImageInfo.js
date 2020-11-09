import React, {useState, useEffect } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import './ImageInfo.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from'./CheckoutProduct';

function ImageInfo({title,price,description,image,category}) {
    const [items, setItems] = useState([]);
    const [{ basket, user }] = useStateValue();
    const [{}, dispatch] = useStateValue();
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        axios
            .get(
                "https://fakestoreapi.com/products/"+id
            )
            .then(({ data }) => {
                console.log(data);
                setItems(data);
            })
            .then(json=>console.log(json))
    },[]);

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


    return (
        <div className="imageInfo">
            <h1 className="imageInfo_header">{items.title}</h1>
            <img className="imageInfo_image" src={items.image} alt=""/>
            <p className="imageInfo_description">{items.description}</p>
            
        </div>
    )
}

export default ImageInfo;
