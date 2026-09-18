import Header from "./components/Header";
import IpInfo from "./components/IpInfo";
import SearchBar from "./components/SearchBar";
import { useIpAddress } from "./hooks/useIpAddress";
import Map from "./components/Map";

function App() {
  const { data, loading, error, searchIp } = useIpAddress();

  if (loading) {
    return <div>Loading IP address...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      <Header />
      <SearchBar onSearch={searchIp} />
      {data && <IpInfo data={data} />}
      {data && <Map lat={data.location.lat} lng={data.location.lng} />}
    </div>
  );
}

export default App;
