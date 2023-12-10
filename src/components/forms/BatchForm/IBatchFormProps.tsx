import { IAddBatchData } from "@/types/IAddBatchData"
import { IEditPropBatch } from "./IEditPropBatch"

export type IBatchFormProps = {
    handleSubmit: (values: IAddBatchData, resetForm: Function) => void
    initialValues?: IEditPropBatch
    onClearFields?: () => void
}
