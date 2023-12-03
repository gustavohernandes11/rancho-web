import { IApiResponse } from "@/types/IAPIResponse";
import { IAnimal } from "@/types/IAnimal";
import { getToken } from "next-auth/jwt";

interface IUpdateAnimalProps {
	name?: string;
	gender?: string;
	age?: string;
}

export const updateAnimal = async (
	userToken: string,
	id: string,
	updateData: IUpdateAnimalProps
): Promise<IApiResponse> => {
	let data;
	let response = null;

	const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/animals/${id}`;
	response = await fetch(url, {
		method: "PUT",
		headers: {
			"Content-type": "application/json",
			"x-access-token": userToken,
		},
		body: JSON.stringify(updateData),
	});

	data = await response.json();

	return { response, data };
};
