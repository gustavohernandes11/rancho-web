import { IApiResponse } from "@/types/IAPIResponse";
import { getSession } from "next-auth/react";

interface IAddAnimalProps {
	age: string;
	name: string;
	gender: string;
	batchId?: string;
	maternityId?: string;
	paternityId?: string;
	code?: string | number;
	observation?: string;
}

export const addAnimal = async (
	animalData: IAddAnimalProps
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
