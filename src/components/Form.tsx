import styled from "styled-components";

export const Form = ({ children }: any) => {
	return <StyledForm>{children}</StyledForm>;
};

const StyledForm = styled.form`
	width: 100%;
	& > input,
	& > span {
		margin-bottom: 1rem;
	}
	& > button {
		margin-top: 1rem;
	}
`;
