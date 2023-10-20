interface ErrorCode {
    title: string
    message: string
}

export type TypeWithKey<T> = {[key: string]: T}

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
        },
        ERR_NETWORK: {
            title: "Se ha rompido la red",
            message: "Ah ocurrido un error del lado del servidor, si el error persiste, comuniquese con el equipo de desarrollo."
        },
        SALE_NOT_CONTENT:{
            title: "Venta sin contenido",
            message: "No podemos confirmar una venta si no hay ordenes."
        }
    }

    return codeMatcher[errorCode]
}