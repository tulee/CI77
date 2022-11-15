import { useParams } from "react-router-dom"

export default function ProductDetail (){
    const params = useParams()
    
    return (
        <div>
            <h3>Product {params.productId} Page</h3>
        </div>
    )
}