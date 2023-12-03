import { IApiResponse } from "@/types/IAPIResponse";

interface IAddBatchProps {
	name: string;
	observation?: string;
}

export const addBatch = async (
	userToken: string,
	updateData: IAddBatchProps
): Promise<IApiResponse> => {
	let data;
	let response = null;

	const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/batches`;
	response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-type": "application/json",
			"x-access-token": userToken,
		},
		body: JSON.stringify(updateData),
	});

	data = await response.json();

	return { response, data };
};
