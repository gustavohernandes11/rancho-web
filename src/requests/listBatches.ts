import { IApiResponse } from "@/types/IAPIResponse";
import { getSession } from "next-auth/react";

export const listBatches = async (): Promise<IApiResponse> => {
	const session = await getSession();

	const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/batches`;
	const response = await fetch(url, {
		method: "GET",
		headers: {
			"Content-type": "application/json",
			"x-access-token": session?.accessToken!,
		},
	});

	const data = await response.json();

	return { response, data };
};
