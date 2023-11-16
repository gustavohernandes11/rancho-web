"use client";

import { createContext, useState } from "react";

export const MenuContext = createContext<any>(null);

export const MenuContextProvider = ({ children }: any) => {
	const [isOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(() => !isOpen);
	};

	return (
		<MenuContext.Provider value={{ isOpen, setMenuOpen, toggleMenu }}>
			{children}
		</MenuContext.Provider>
	);
};
