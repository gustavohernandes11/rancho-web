import styled from "styled-components";
import CowImage from "../assets/cow.svg";
import Image from "next/image";

export const Cover = () => {
	return (
		<Container>
			<Image alt="cow cover" height={626} width={626} src={CowImage} />
		</Container>
	);
};

const Container = styled.div`
	margin: auto;
`;
