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
      <div className="location"></div>
      <div className="timezone"></div>
      <div className="isp"></div>
    </div>
  );
}

export default IpInfo;
