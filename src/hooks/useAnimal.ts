import { useState, useEffect, useCallback } from "react";

const feachAnimal = async (url: string, apiKey?: string) => {
  const response = await fetch(url, {
    headers: {
      "x-api-key": apiKey || "",
    },
  });
  return response;
};

export const useAnimal = <T extends {}>(url: string, apiKey?: string) => {
  const [animal, setAnimal] = useState<T | []>([]);
  const [loading, setLoading] = useState(true);

  const getAnimal = useCallback(async () => {
    setLoading(true);
    let response = await feachAnimal(url, apiKey);

    if (response.ok) {
      const data = await response.json();
      setAnimal(data);
    }

    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getAnimal();
  }, [getAnimal]);

  return { animal, loading, refetch: getAnimal };
};
