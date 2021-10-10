import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState({})
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [isRegistered, setIsRegistered] = useState(false)

	const registerUser = user => {
		setUser(user)
		setIsRegistered(true)
		setIsLoggedIn(true)
	}

	const loginUser = user => {
		setUser(user)
		setIsRegistered(true)
		setIsLoggedIn(true)
	}

	const logoutUser = () => {
		setUser({})
		setIsLoggedIn(false)
		setIsRegistered(false)
	}

	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
				isLoggedIn,
				setIsLoggedIn,
				isRegistered,
				setIsRegistered,
				registerUser,
				loginUser,
				logoutUser,
			}}
		>
			{children}
		</UserContext.Provider>
	)
}
