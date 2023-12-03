import { IApiResponse } from "@/types/IAPIResponse";

interface IAddAnimalProps {
	age: string;
	name: string;
	gender: string;
	maternityId?: string;
	paternityId?: string;
	code?: number;
	observation?: string;
}

export const updateAnimal = async (
	userToken: string,
	id: string,
	updateData: IAddAnimalProps
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
