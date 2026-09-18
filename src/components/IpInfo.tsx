import type { IpData } from "../types/ip";

interface IpInfoProps {
  data: IpData;
}

function IpInfo({ data }: IpInfoProps) {
  return (
    <div className="ip-result">
      <div className="ip-address">
        <h6>IP ADDRESS</h6>
        <h2>{data.ip}</h2>
      </div>
      <div className="location">
        <h6>LOCATION</h6>
        <h2>
          {data.location.city}, {data.location.region},{" "}
          {data.location.postalCode}
        </h2>
      </div>
      <div className="timezone">
        <h6>TIMEZONE</h6>
        <h2>{data.location.timezone}</h2>
      </div>
      <div className="isp">
        <h6>ISP</h6>
        <h2>{data.isp}</h2>
      </div>
    </div>
  );
}

export default IpInfo;
