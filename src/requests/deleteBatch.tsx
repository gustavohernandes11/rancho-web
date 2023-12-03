import { IApiResponse } from "@/types/IAPIResponse";
import { getSession } from "next-auth/react";

export const deleteBatch = async (id: string): Promise<IApiResponse> => {
	const session = await getSession();
	const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/batches/${id}`;
	const response = await fetch(url, {
		method: "DELETE",
		headers: {
			"Content-type": "application/json",
			"x-access-token": session?.accessToken!,
		},
	});

	const data = await response.json();

	return { response, data };
};
