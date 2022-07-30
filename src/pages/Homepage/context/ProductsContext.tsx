import { createContext, useContext, useState, useEffect } from 'react'

// API
import { getAllProducts } from '../../../api/productsRequests'

// Interfaces
import { Product } from '../../../interfaces/Products'

interface ProductsContext {
    products: Product[];
}

interface ProviderProps {
    children: React.ReactNode
}

export const ProductsContext = createContext({} as ProductsContext)

export const useProductsContext = () => useContext(ProductsContext)

export const ProductsContextProvider = ({ children }: ProviderProps) => {
    const [products, setProducts] = useState<Product[]>([])
    useEffect(() => {
        (async function _await() {
            const res = await getAllProducts()
            setProducts(res.data)
        })()
    })

    return (
        <ProductsContext.Provider value={{
            products
        }}>
            {children}
        </ProductsContext.Provider >
    )
}