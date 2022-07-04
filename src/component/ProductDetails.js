import { useParams } from "react-router-dom"

export default function ProductDetails(){
    const params = useParams();
    return <>
        <h2>Product details</h2>
        <h3>Product id: {params.product_id}</h3>
    </>
}