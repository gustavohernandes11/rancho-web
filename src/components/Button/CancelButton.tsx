import { useRouter } from "next/navigation"
import { Button } from "."

export const CancelButton = ({ ...props }) => {
    const router = useRouter()
    return (
        <Button {...props} light={true} onClick={() => router.back()}>
            Cancelar
        </Button>
    )
}
