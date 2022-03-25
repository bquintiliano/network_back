import { Router } from 'express'
import whoisController from '../controllers/whoisController'

const whois = Router()

whois  
    .post('/whois', whoisController.whois)


export default whois