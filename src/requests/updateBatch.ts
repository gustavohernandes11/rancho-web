import { IApiResponse } from "@/types/IAPIResponse";

interface IUpdateBatchProps {
	name?: string;
	observation?: string;
}

export const updateAnimal = async (
	userToken: string,
	id: string,
	updateData: IUpdateBatchProps
): Promise<IApiResponse> => {
	let data;
	let response = null;

	const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/batches/${id}`;
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
