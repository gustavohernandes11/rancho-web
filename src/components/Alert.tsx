import styled, { css } from "styled-components";
import { Button } from "./Button";
import { useState } from "react";

type IAlert = {
	text: string;
	type?: "info" | "warning";
};
export const Alert = ({ text, type = "warning" }: IAlert) => {
	const [isActive, setActive] = useState(true);
	return (
		<>
			{isActive && (
				<StyledBluryy onClick={() => setActive(false)}>
					<StyledContainer type={type}>
						<p>{text}</p>
						<Button onClick={() => setActive(false)}>Ok</Button>
					</StyledContainer>
				</StyledBluryy>
			)}
		</>
	);
};

const StyledBluryy = styled.div`
	position: fixed;
	width: 100vw;
	height: 100vh;
	backdrop-filter: blur(0.05rem);
	z-index: 10;
`;
const StyledContainer = styled.div<{ type: string }>`
	${({ type, theme }) => css`
		position: absolute;
		display: flex;
		padding: 1rem;
		align-items: center;
		flex-direction: column;
		justify-content: space-evenly;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: ${theme.color.surface};
		min-height: 15rem;
		min-width: 20rem;
		border: 2px solid ${theme.color.border};
		border-radius: 0.25rem;
		z-index: 15;

		${type === "warning" &&
		css`
			border: 2px solid ${theme.color.danger};
		`}
	`}
`;
