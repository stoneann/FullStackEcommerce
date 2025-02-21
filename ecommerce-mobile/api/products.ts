// if want to get environment variables....
// const API_URL  = process.env.EXPO_PUBLIC_API_URL;
import {fetch} from "expo/fetch";

const API_URL = "http://localhost:8080";
import products from '../assets/products.json';


export async function listProducts() {
    console.log(API_URL)
    return products;
    // const res = await fetch(`${API_URL}/products`);
    // if (!res.ok)
    // {
    //     throw new Error(`${res.statusText} ${res.statusText}`);
    // }

    // return res.json();
}

export async function fetchProductById(id: number) {
    return products.find((product) => product.id === id);
}