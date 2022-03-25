import { Router } from "express";
import geolocationController from "../controllers/geolocationController";
const geolocation = Router()

geolocation
    .post("/ip",geolocationController.getIP)


export default geolocation