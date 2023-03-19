import { useState, useEffect } from 'react';

export const useLocalStorage = (itemName, initialValue) => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true)

    // Estado todos

    const [item, setItem] = useState(initialValue);

    useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);

                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }

                setItem(parsedItem);
                setLoading(false);
            } catch (error) {
                setError(error);
            }
        }, 1000);
    });

    // Guardar dones y deletes en localStorage

    const saveItem = (newItem) => {
        try {
            const stringifiedTodos = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedTodos);
            setItem(newItem);
        } catch (error) {
            setError(error);
        }
    };

    return {
        item,
        saveItem,
        loading,
        error,
    };
}