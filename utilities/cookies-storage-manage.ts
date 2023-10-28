'use client'

export function saveCookie<TData> (key: string, value: TData) {
    document.cookie = `${key}=${JSON.stringify(value)}` 
}