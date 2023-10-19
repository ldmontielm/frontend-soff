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

        // EXCEPTIONS PURCHASES

        PROVIDER_NOT_FOUND: {
            title: "Proveedor no encontrado",
            message: "No se encontro el proveedor."
        },
        PURCHASES_NOT_FOUND: {
            title: "Compras no encontradas",
            message: "No se encontraron las compras."
        },
        PURCHASE_NOT_FOUND: {
            title: "Compra no encontrada",
            message: "No se encontró la compra."
        },
        SUPPLY_NOT_FOUND: {
            title: "Insumo no encontrado",
            message: "No se encontró el insumo."
        },
        NOT_ADD_ORDERS_PURCHASE_CONFIRMED: {
            title: "No se pudo agregar la orden",
            message: "No se puede agregar una nueva orden en una compra confirmada."
        },
        ORDERS_REQUIRED_CONFIRM_PURCHASE: {
            title: "No se pudo confirmar la compra",
            message: "No se puede confirmar una compra sin ordenes."
        },
        ID_PURCHASE_IF_REQUIRED: {
            title: "Requiere el Id",
            message: "No se ver las ordenes de la compra sin su ID."
        },
        PURCHASE_IS_CONFIRMED: {
            title: "Compra confirmada",
            message: "No se pude eliminar las compras confirmadas."
        },
        INVOICE_NUMBER_IS_NULL: {
            title: "Número de Factura Vacío",
            message: "No se puede confirmar una compra con el número de factura vacio."
        },
        INVOICE_NUMBER_EXIST: {
            title: "Número de Factura ya existe",
            message: "No se puede confirmar una compra con el número de factura repetido."
        },

    }

    return codeMatcher[errorCode]
}