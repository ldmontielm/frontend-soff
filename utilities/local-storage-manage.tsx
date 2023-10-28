'use client'

export enum LocalStorageKeys {
    REFRESH_TOKEN = "session",
    TOKEN = "token",
    USER="profile"
}

export const saveInLocalStorage = (key: string, value: string) => {
    localStorage.setItem(key, value);
};

export const getInLocalStorage = (key: string) => {
    return localStorage.getItem(key);

};

export const clearLocalStorage = () => {
    localStorage.clear();
};