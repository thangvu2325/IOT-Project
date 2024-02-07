import { FunctionComponent } from "react";
// import { config } from "@/config";
// import Map, {
//   NavigationControl,
//   FullscreenControl,
//   ScaleControl,
//   GeolocateControl,
// } from "react-map-gl";
// import GeocoderControl from "./geocoder-control";

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
  // const [popupInfo, setPopupInfo] = useState(null);

  return (
    <div className="w-full h-full">
      {/* <Map
        initialViewState={{
          latitude: 10.7880104,
          longitude: 106.6036807,
          zoom: 12,
          bearing: 0,
          pitch: 0,
        }}
        style={{ width: "100vw" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={config.mapboxToken}
      >
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />
        <GeocoderControl
          mapboxAccessToken={config.mapboxToken}
          position="top-left"
        />
      </Map> */}
    </div>
  );
};

export default HomePage;
