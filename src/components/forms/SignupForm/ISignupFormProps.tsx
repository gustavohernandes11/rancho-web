import { IUserSignupCredentials } from "@/types/IUserSignupCredentials"

export type ISignupFormProps = {
    handleSubmit: (values: IUserSignupCredentials, resetForm: Function) => void
    onClearFields?: () => void
}
