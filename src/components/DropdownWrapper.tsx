import { useState } from "react";
import styled, { css } from "styled-components";

interface IDropdown {
	children: React.ReactNode;
	itemsToDropDown: React.ReactNode;
}

export const DropdownWrapper = ({ children, itemsToDropDown }: IDropdown) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<Dropdown>
			<ButtonContainer onClick={() => setIsOpen(() => !isOpen)}>
				{children}
			</ButtonContainer>
			{isOpen && <Menu> {itemsToDropDown} </Menu>}
		</Dropdown>
	);
};

const ButtonContainer = styled.div`
	${() => css``}
`;

const Dropdown = styled.div`
	position: relative;
`;

const Menu = styled.div`
	position: absolute;
	background-color: ${({ theme }) => theme.color.surface};
	outline: 2px solid ${({ theme }) => theme.color.border};
	border-radius: 0.25rem;
	padding: 0.5rem;
	right: 0;
	z-index: 10;
`;
