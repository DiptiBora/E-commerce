import React, { useState, useEffect } from 'react'
import './Home.css';
import Product from './Product';
import axios from "axios";
import ImageInfo from './ImageInfo';

function Home() {

    const [product, setProduct] = useState();
    const [image, setImage] = useState();
    var itemsToRender;
    useEffect(() => {
        axios
            .get(
                "https://fakestoreapi.com/products"
            )
            .then(({ data }) => {
                console.log(data);
                setProduct(data);
            });
    }, []);

    return (
        <div className="home">
            
            {/* Product id,rating,price */}
            {/** <div className= "home_row">
                <Product id="1234"
                     title= "The first product"
                     price = {11.25}
                     image = "https://images-na.ssl-images-amazon.com/images/I/71f-cXVHaaL._SL1500_.jpg"
                />
                <Product id="1234"
                     title= "The first product"
                     price = {11.25}
                     image = "https://images-na.ssl-images-amazon.com/images/I/71f-cXVHaaL._SL1500_.jpg"
                />
            </div>

            <div className= "home_row">
                <Product id="1234"
                     title= "The first product"
                     price = {11.25}
                     image = "https://images-na.ssl-images-amazon.com/images/I/71f-cXVHaaL._SL1500_.jpg"
                />
                <Product id="1234"
                     title= "The first product"
                     price = {11.25}
                     image = "https://images-na.ssl-images-amazon.com/images/I/71f-cXVHaaL._SL1500_.jpg"
                />
                <Product id="1234"
                     title= "The first product"
                     price = {11.25}
                     image = "https://images-na.ssl-images-amazon.com/images/I/71f-cXVHaaL._SL1500_.jpg"
                />
            </div>

            <div className= "home_row">
                <Product id="1234"
                     title= "The first product"
                     price = {11.25}
                     image = "https://images-na.ssl-images-amazon.com/images/I/71f-cXVHaaL._SL1500_.jpg"
                />
                 <Product id="1234"
                     title= "The first product"
                     price = {11.25}
                     image = "https://images-na.ssl-images-amazon.com/images/I/71f-cXVHaaL._SL1500_.jpg"
    />
    </div>*/}

            <div className="home_row">
                {product && product.map((user) => (
                    <Product id={user.id}
                        title={user.title}
                        price={user.price}
                        image={user.image}
                        category= {user.category}
                        description= {user.description} />
                ))}
            </div>



            {/* Products */}
            
        </div>
    );
}

export default Home
