import {useState} from "react";

export const useFetching = (callback) => {
    const [isLoading, stIsLoading] = useState(false);
    const [error, setError] = useState("");
    const fetching = async (...args) => {
        try {
            stIsLoading(true);
            await callback(...args)
        }
        catch (e) {
            setError(e.message)
        }
        finally {
            stIsLoading(false);
        }
    }
    return [fetching, isLoading, error]
}