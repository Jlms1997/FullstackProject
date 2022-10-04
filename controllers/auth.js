require('mongoose');
const Usr = require('../models/user');
const jwt = require('jsonwebtoken');
const jwt_key = process.env.JWT_SECRET;

const login = async(email,password) => {

    const cryptoPass = require('crypto')
        .createHash('sha256')
        .update(password)
        .digest('hex');

    const  result = await Usr.findOne({ email: email, isActive:true, password:cryptoPass })
    
    if (result){
        let data = {
            email:email,
            password:password,
        }
        // retorno token
        //jwt.sign('payload','secret_key','options')
         const token = jwt.sign( data, jwt_key );    
        //const token = "fgdgbrfeer6g1df23g86ef2gs";
        return token;
    }
    return null; // retorno 

}

module.exports = {login}