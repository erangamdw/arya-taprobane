const handler = (req, res)=>{
    console.log(req.body,'DATA')

    if(req.method === "POST"){
        const data = req.body;
        if(!data.name || !data.email || !data.contact){
            return res.status(400).json({message:"Bad request"})
        }
    }
    return res.status(400).json({message:"Bad request"})
}

export default handler;