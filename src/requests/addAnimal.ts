import { IApiResponse } from "@/types/IAPIResponse";
import { getSession } from "next-auth/react";

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
	id: string,
	updateData: IAddAnimalProps
): Promise<IApiResponse> => {
	const session = await getSession();

	const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/animals/${id}`;
	const response = await fetch(url, {
		method: "PUT",
		headers: {
			"Content-type": "application/json",
			"x-access-token": session?.accessToken!,
		},
		body: JSON.stringify(updateData),
	});

	const data = await response.json();

	return { response, data };
};
