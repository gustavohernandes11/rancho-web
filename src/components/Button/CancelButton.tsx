import { useRouter } from "next/navigation";
import { Button } from ".";

export const CancelButton = () => {
	const router = useRouter();
	return (
		<Button light onClick={() => router.back()}>
			Cancelar
		</Button>
	);
};
