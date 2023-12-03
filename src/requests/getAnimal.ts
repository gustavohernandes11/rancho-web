import { IApiResponse } from "@/types/IAPIResponse";

export const getAnimal = async (
	userToken: string,
	id: string
): Promise<IApiResponse> => {
	let data;
	let response = null;

	const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/animals/${id}`;
	response = await fetch(url, {
		method: "GET",
		headers: {
			"Content-type": "application/json",
			"x-access-token": userToken,
		},
	});

	data = await response.json();

	return { response, data };
};
