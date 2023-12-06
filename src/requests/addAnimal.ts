import { IApiResponse } from "@/types/IAPIResponse";
import { IAddAnimalData } from "@/types/IAddAnimalData";
import { getSession } from "next-auth/react";

export const addAnimal = async (
	animalData: IAddAnimalData
): Promise<IApiResponse> => {
	const session = await getSession();

	const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/animals`;
	const response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-type": "application/json",
			"x-access-token": session?.accessToken!,
		},
		body: JSON.stringify(animalData),
	});

	const data = await response.json();

	return { response, data };
};
