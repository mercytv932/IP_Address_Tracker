import "./App.css";
import Header from "./components/Header";
import IpInfo from "./components/IpInfo";
// import SearchBar from "./components/SearchBar";
import { useIpAddress } from "./hooks/useIpAddress";
import Map from "./components/Map";

function App() {
  const { data, loading, error, searchIp } = useIpAddress();

  return (
    <div className="app">
      <Header onSearch={searchIp} />
      {loading && <div>Loading IP address...</div>}
      {error && <div>{error}</div>}
      {data && <IpInfo data={data} />}
      {data && <Map lat={data.location.lat} lng={data.location.lng} />}
    </div>
  );
}

export default App;
