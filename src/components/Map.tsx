import { MapContainer, TileLayer, Marker } from "react-leaflet";
// import type { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
interface MapProps {
  lat: number;
  lng: number;
}

function Map({ lat, lng }: MapProps) {
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={13}
      scrollWheelZoom={false}
    ></MapContainer>
  );
}

export default Map;
