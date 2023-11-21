import styled from "styled-components";

export const Label = styled.label`
	display: inline-block;
	margin-block: 0.5rem;
	color: ${({ theme }) => theme.color.secondaryText};
	font-size: 0.875rem;
`;
