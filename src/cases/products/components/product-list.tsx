/* eslint-disable @typescript-eslint/no-unused-vars */
import { useProducts } from "../hooks/use-products"
import { ProductCard } from "./product-card";

type ProductListProps ={
    categoryId?: string
}

export function ProductList({categoryId}:ProductListProps){
    const {data: products = []} = useProducts(categoryId);
    
    return(
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {products.map(product => (
                <li key={product.id}>
                    <ProductCard product={product} />
                </li>
            ))}

        </ul>
    )
}