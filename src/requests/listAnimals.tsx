interface ApiResponse {
	response: Response | null;
	data: any;
}

export const listAnimals = async (userToken: string): Promise<ApiResponse> => {
	let data;
	let response = null;

	const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/animals`;
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
