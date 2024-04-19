import {useState} from "react";

export const useFetching = (callback) => {
    const [isLoading, stIsLoading] = useState(false);
    const [error, setError] = useState("");
    const fetching = async () => {
        try {
            stIsLoading(true);
            await callback()
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