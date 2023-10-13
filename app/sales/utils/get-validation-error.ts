import { TypeWithKey } from "../models/type-with-key";

interface ErrorCode {
    title: string
    message: string
}

export const getValidationErrors = (errorCode: string) => {
    const codeMatcher:TypeWithKey<ErrorCode> = {
        ORDER_NOT_ADDED: {
            title: "Hubo un error al agregar la orden",
            message: "La orden no pudo ser agregada."
        },
        ORDER_NOT_AVAILABILITY: {
            title: "Insumos insuficientes",
            message: "No contamos con los insumos necesarios para el producto."
        },
        ORDER_NOT_FOUND: {
            title: "Orden no encontrada",
            message: "Lo sentimos, la orden no pudo ser encontrada."
        },
        Duplicate: {
            title: "Comprobante duplicado",
            message: "El comprobante ya existe en la base de datos."
        }
    }

    return codeMatcher[errorCode]
}