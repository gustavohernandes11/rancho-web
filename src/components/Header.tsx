import styled from "styled-components";

export const Header = ({ children }: { children: React.ReactNode }) => {
	return <StyledHeader>{children}</StyledHeader>;
};

const StyledHeader = styled.header`
	display: flex;
	grid-area: header;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 3.75rem;
	padding-inline: 1rem;
`;
