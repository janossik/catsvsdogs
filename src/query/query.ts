export const feachAnimal = async (url: string, apiKey?: string) => {
  const response = await fetch(url, {
    headers: {
      "x-api-key": apiKey || "",
    },
  });
  return response;
};
