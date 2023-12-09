import { IAnimalFormInitialValues } from "./IAnimalFormInitialValues"

export type IAnimalFormProps = {
    handleSubmit: Function
    initialValues?: IAnimalFormInitialValues
    onClearFields?: () => void
}
