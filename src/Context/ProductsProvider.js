import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const ProductsContext = createContext({})

export const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState([])
	const [singleProduct, setSingleProduct] = useState({})
	const [productsAreLoading, setProductsAreLoading] = useState(true)
	const [productIsLoading, setProductIsLoading] = useState(true)

	const getAllProducts = () => {
		axios.get('/api/products').then(res => {
			setProducts(res)
			setProductsAreLoading(false)
		})
	}

	const getSingleProduct = productId => {
		axios.get(`/api/products/${productId}`).then(res => {
			setSingleProduct(res)
			setProductIsLoading(false)
		})
	}

	return (
		<ProductsContext.Provider
			value={{
				products,
				setProducts,
				singleProduct,
				setSingleProduct,
				productsAreLoading,
				productIsLoading,
				getAllProducts,
				getSingleProduct,
			}}
		>
			{children}
		</ProductsContext.Provider>
	)
}
