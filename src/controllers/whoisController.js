import whoislib from 'whois-json'

class whoisController{

    static async whois(request, response){
        const { domain } = request.body

        try{

            const results = await whoislib(domain, {follow: 3, verbose: true});
            
            if(results[0].server != "whois.registro.br"){
                return response.status(500).json({msg : "não é dominio .BR"}) 
            }
            
            let {owner, ownerid, responsible, country, ownerC, techC, nserver, created, expires, status, nicHdlBr, eMail } = results[0].data
            
            const Domain = results[0].data.domain

            if(!responsible){
                responsible = '-'
            }

            const nserverSplit = nserver.split(" ")
            const ns1 = nserverSplit[0]
            const ns2 = nserverSplit[1]
            const ns3 = nserverSplit[2]
            const ns4 = nserverSplit[3]

            const date1 = created.split(" ")
            const date2 = date1[0].split("")
            const dateCreated = `${date2.slice(6, 8).join("")}/${date2.slice(4, 6).join("")}/${date2.slice(0, 4).join("")}`
            
            const dateExp = expires.split("")
            const dateExpire = `${dateExp.slice(6, 8).join("")}/${dateExp.slice(4, 6).join("")}/${dateExp.slice(0, 4).join("")}`

            let data = [{
                "domain": Domain,
                "owner": owner,
                "ownerid": ownerid,
                "responsible" : responsible,
                "country": country.slice(0,2),
                "ownerC": ownerC,
                "techC": techC,
                "NS1": ns1,
                "NS2": ns2,
                "NS3": ns3,
                "NS4": ns4,
                "created" : dateCreated,
                "expires": dateExpire,
                "status": status,
                "nicHdlBr": nicHdlBr,
                "eMail": eMail
            }]

            return  response.status(200).json(data)
            
        }
        catch(error){
            return response.status(500).json(error.message)
        }
    }
}

export default whoisController