import styled, { css } from "styled-components";

export const FormContainer = ({ children }: any) => {
	return <StyledFormContainer>{children}</StyledFormContainer>;
};

const StyledFormContainer = styled.form`
	${() => css`
		& > input,
		& > span {
			margin-bottom: 1rem;
		}
		& > button {
			margin-top: 1rem;
		}
	`}
`;
