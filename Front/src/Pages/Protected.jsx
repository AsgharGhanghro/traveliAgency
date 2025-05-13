
// import  { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';

// const Protected = (props) => {

//     const {Component} = props;
//     const navigate = useNavigate()

//     useEffect(()=>{
//         let sign = localStorage.getItem('sign');
//         if(sign){
//           navigate('/sign');
//         }
//     });
//   return (
//     <div>
//       <Component />
//     </div>
//   )
// }

// export default Protected;



// import { GoogleMap, LoadScript, Polyline } from "@react-google-maps/api";

// const containerStyle = {
//   width: "100%",
//   height: "600px",
// };

// const center = {
//   lat: 25.3960, // Hyderabad
//   lng: 68.3578,
// };

// const pathCoordinates = [
//   { lat: 25.3960, lng: 68.3578 }, // Hyderabad
//   { lat: 24.8607, lng: 67.0011 }, // Karachi (replace with your city)
// ];

// const MapWithRoute = () => {
//   return (
//     <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
//       <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={6}>
//         <Polyline
//           path={pathCoordinates}
//           options={{
//             strokeColor: "#0000FF",
//             strokeOpacity: 0.8,
//             strokeWeight: 4,
//           }}
//         />
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default MapWithRoute;
