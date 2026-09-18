import type { IpData } from "../types/ip";

const API_KEY = import.meta.env.VITE_IP_API_KEY;

export async function fetchIpData(ip: string): Promise<IpData> {
  const response = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch IP information");
  }
  return response.json();
}
