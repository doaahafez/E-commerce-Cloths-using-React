import axios from "axios"

const baseUrl = "https://fakestoreapi.com/products"

export const getProducts = async () => {
    const  {data}  = await axios.get(baseUrl)
    return data
}

export const getProductsDetails = async (id) => {
    const  {data}  = await axios.get(baseUrl+`/${id}`
    )
    return data
}


// ,{
//     headers:{
//         // token:localStorage.getItem("token")|null
//         token:sessionStorage.getItem("token")
//     }
// }