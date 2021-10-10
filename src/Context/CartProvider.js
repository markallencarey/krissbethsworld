import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext({})

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([])
	const [cartTotal, setCartTotal] = useState(0)
	const [cartIsLoading, setCartIsLoading] = useState(true)

	const getCart = () => {
		axios.get('/api/cart').then(res => {
			setCart(res)
			setCartIsLoading(false)
		})
	}

	const updateCart = cart => {
		setCart(cart)
	}

	const clearCart = () => {
		axios.delete('/api/cart/clear').then(() => setCart({}))
	}

	return (
		<CartContext.Provider
			value={{
				cart,
				setCart,
				cartTotal,
				setCartTotal,
				cartIsLoading,
				setCartIsLoading,
				getCart,
				updateCart,
				clearCart,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}
