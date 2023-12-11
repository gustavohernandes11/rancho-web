"use client"

import { AlertPopup } from "@/components/AlertPopup"
import { ConfirmPopup } from "@/components/ConfirmPopup"
import { createContext, useState } from "react"

type IPopupContextProps = {
    dispatchAlert: (text: string, onAlertClose?: () => void) => void
    dispatchConfirmation: (
        text: string,
        onConfirm?: () => void,
        onDeniedConfirmation?: () => void
    ) => void
}

export const PopupContext = createContext<IPopupContextProps>(
    null as unknown as IPopupContextProps
)

export const PopupContextProvider = ({ children }: any) => {
    const [alertMessage, setAlertMessage] = useState("")
    const [onAlertCloseCallback, setOnAlertCloseCallback] =
        useState<() => void>()
    const [confirmationMessage, setConfirmationMessage] = useState("")
    const [onConfirmCallback, setOnConfirmCallback] = useState<() => void>()
    const [onDeniedConfirmationCallback, setOnDeniedConfirmationCallback] =
        useState<() => void>()

    const dispatchAlert = (text: string, onAlertCloseFn?: () => void) => {
        setAlertMessage(text)
        setOnAlertCloseCallback(() => onAlertCloseFn)
    }
    const dispatchConfirmation = (
        text: string,
        onConfirmFn?: () => void,
        onDeniedConfirmationFn?: () => void
    ) => {
        setConfirmationMessage(text)
        setOnConfirmCallback(() => onConfirmFn)
        setOnDeniedConfirmationCallback(() => onDeniedConfirmationFn)
    }

    const onAlertClose = () => {
        setAlertMessage("")
        if (onAlertCloseCallback) {
            onAlertCloseCallback()
            setOnAlertCloseCallback(() => {})
        }
    }

    const onConfirm = () => {
        setConfirmationMessage("")
        if (onConfirmCallback) {
            onConfirmCallback()
            setOnConfirmCallback(() => {})
        }
    }

    const onDeniedConfirmation = () => {
        setConfirmationMessage("")
        if (onDeniedConfirmationCallback) {
            onDeniedConfirmationCallback()
            setOnDeniedConfirmationCallback(() => {})
        }
    }

    return (
        <PopupContext.Provider
            value={{
                dispatchAlert,
                dispatchConfirmation,
            }}
        >
            {alertMessage && (
                <AlertPopup onAlertClose={onAlertClose} text={alertMessage} />
            )}
            {confirmationMessage && (
                <ConfirmPopup
                    text={confirmationMessage}
                    onConfirm={onConfirm}
                    onDeniedConfirmation={onDeniedConfirmation}
                />
            )}
            {children}
        </PopupContext.Provider>
    )
}
