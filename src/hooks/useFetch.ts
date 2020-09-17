import { useEffect, useState } from 'react';

export default function useFetch<T>(
    url: RequestInfo,
): { response: T | null; responseCode: number | null; error: Error | null; isLoading: boolean } {
    const [response, setResponse] = useState(null);
    const [responseCode, setResponseCode] = useState<number | null>(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setError(null);
            setIsLoading(true);
            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        // Authorization: 'Bearer ' + ls.get<string>('token'),
                    },
                });
                setResponseCode(response.status);

                if (response.ok) {
                    const json = await response.json();
                    setResponse(json);
                } else {
                    throw new Error('Something went wrong');
                }
            } catch (error) {
                setError(error);
            }
            setIsLoading(false);
        };

        fetchData();
    }, [url]);

    return { response, responseCode, error, isLoading };
}
