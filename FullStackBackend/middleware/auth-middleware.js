const jwt = require('jsonwebtoken');
const jwt_key = process.env.JWT_SECRET;
const token_header_key = process.env.TOKEN_HEADER_KEY

const verify = (req,res,next) =>{

    const token = req.header(token_header_key);
    const decode =  jwt.verify(token, jwt_key);
    next();

    res.status(401).send("No autorizado");
        
}

module.exports = {verify}