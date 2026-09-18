export type IpData = {
  ip: string;
  location: {
    city: string;
    region: string;
    country: string;
    postalCode: string;
    lat: number;
    lng: number;
  };
  timezone: string;
  isp: string;
};

