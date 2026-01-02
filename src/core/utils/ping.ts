export const pingBackend = async (): Promise<{ status: string }> => {
  const res = await fetch("/api/ping");

  if (!res.ok) {
    throw new Error("Сервер не відповідає");
  }

  return res.json();
};
