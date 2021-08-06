// import { useState, useEffect } from 'react';
// import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';

// const defaultCenter = { lat: 51.1864708, lng: 10.0671016 };
// const defaultZoom = 6;

// const myPosition = { lat: 52.50119, lng: 13.41626 };

// export default function LocationFinder() {
//   const [mapCenter, setMapCenter] = useState(defaultCenter);
//   const [zoom, setZoom] = useState(defaultZoom);

//   function showUserLocation() {
// 	setMapCenter(myPosition);
// 	setZoom(17);
//   }

//   return (
// 	<section>
//   	<button onClick={showUserLocation}>Zeige meine Position</button>
//   	{/* Die Props von MapContainer werden nur beim ersten Rendern der Karte
//     	berücksichtig, spätere Änderungen haben keine Auswirkung! */}
//   	<MapContainer center={mapCenter} zoom={zoom} scrollWheelZoom={false}>
//     	{/* MapController hat Zugriff auf die Leaflet-Karte, Änderungen bei
//       	den Props haben Auswirkungen. */}
//     	<MapController center={mapCenter} zoom={zoom} />
//     	<TileLayer
//       	attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//       	url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//     	/>

//     	<Marker position={myPosition}>
//       	<Popup>
//         	<i>Jonathan</i>
//       	</Popup>
//     	</Marker>
//   	</MapContainer>
// 	</section>
//   );
// }

// function MapController({ center, zoom }) {
//   /* map enthält die Leaflet-Instanz. */
//   const map = useMap();

//   /* Hier werden Methoden der Leaflet-Bibliothek verwendet, ganz unabhängig
// 	von React!
// 	https://leafletjs.com/reference-1.7.1.html#map-methods-for-modifying-map-state
// 	*/
//   useEffect(() => map.setView(center, zoom), [center, zoom, map]);

//   return null;
// }


