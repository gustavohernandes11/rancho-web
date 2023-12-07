export const getAgeFromISO = (input: string): string => {
	const currentDate = new Date();
	const birthDate = new Date(input);

	const years = currentDate.getFullYear() - birthDate.getFullYear();
	const months = currentDate.getMonth() - birthDate.getMonth();
	const days = currentDate.getDate() - birthDate.getDate();

	if (months < 0 || (months === 0 && days < 0)) {
		return `${years - 1} anos e ${12 + months} meses`;
	} else if (months === 0) {
		return `${years} anos`;
	} else {
		return `${years} anos e ${months} meses`;
	}
};
