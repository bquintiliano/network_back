import ipdetails  from 'node-ip-details'
import utf8 from 'utf8'

class geolocationController{

    static async getIP(request, response){

        const { ip } = request.body

        try{
            const ipInformantion = await ipdetails.initialise({ip: ip}).allInformation()
            //console.log(utf8.decode(ipInformantion.internetProvider))
            return response.status(200).json(ipInformantion)
        }
        catch(error){
            return response.status(500).json(error.message)
        }

    }

}

export default geolocationController