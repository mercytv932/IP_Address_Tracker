import { useState } from "react";
import { fetchIpData } from "../services/ipApi";
import type { IpData } from "../types/ip";

export function useIpAddress() {
  const [data, setData] = useState<IpData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function searchIp(ip: string) {
    setLoading(true);
    setError(null);

    try {
      const result = await fetchIpData(ip);
      setData(result);
    } catch {
      setError("Unable to find IP address");
    } finally {
      setLoading(false);
    }
  }

  return {
    data,
    loading,
    error,
    searchIp,
  };
}
