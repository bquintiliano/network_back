import ipdetails  from 'node-ip-details'

class geolocationController{

    static async getIP(request, response){

        const { ip } = request.body

        try{
            const ipInformantion = await ipdetails.initialise({ip: ip}).allInformation()
          
            return response.status(200).json(ipInformantion)
        }
        catch(error){
            return response.status(500).json(error.message)
        }

    }

}

export default geolocationController