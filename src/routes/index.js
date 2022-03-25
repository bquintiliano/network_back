import geolocation from "./geolocationRoute";
import whois from "./whoisRoute";

export default app  =>{
    app.use(geolocation)
    app.use(whois)
} 