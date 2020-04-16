const joi = require('joi')

module.exports = {
    register (req, res, next) {
        const schema = {
            email: joi.string().email(),
            password: joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{6,32}$')
            ),
            firstname: joi.string().regex(
                new RegExp('^[a-zA-Z]{2,32}$')
            ),
            lastname: joi.string().regex(
                new RegExp('^[a-zA-Z]{2,32}$')
            ),
            address: joi.string(),
            city: joi.string().regex(
                new RegExp('^[a-zA-Z]{2,32}$')
            ),
            country: joi.string().regex(
                new RegExp('^[a-zA-Z]{2,32}$')
            ),
            phone: joi.string().regex(
                new RegExp('^\\+?[0-9]+')
            ),
            lbo: joi.string().regex(
                new RegExp('^[0-9]{11}')
            )
        }

        const {error, value} = joi.validate(req.body, schema)
        
        if(error){
            switch(error.details[0].context.key){
                case 'email':
                    res.status(400).send({
                        error: 'You must provide a valid email address'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `The password failed to match the following rules:
                        <br>
                        1. It must contain only lowercase, uppercase and numeric characters!
                        <br>
                        2. It must be between 6-32 characters long!`
                    })
                    break
                case 'firstname':
                    res.status(400).send({
                        error: `The first name failed to match the following rules:
                        <br>
                        1. It must contain only lowercase and uppercase letters
                        <br>
                        2. It must be between 2-32 charachers long!`
                    })
                    break
                case 'lastname':
                    res.status(400).send({
                        error: `The last name failed to match the following rules:
                        <br>
                        1. It must contain only lowercase and uppercase letters
                        <br>
                        2. It must be between 2-32 charachers long!`
                    })
                    break
                case 'address':
                    res.status(400).send({
                        error: `You must provide a valid address!`
                    })
                    break
                case 'city':
                    res.status(400).send({
                        error: `The city failed to match the following rules:
                        <br>
                        1. It must contain only lowercase and uppercase letters
                        <br>
                        2. It must be between 2-32 charachers long!`
                    })
                    break
                case 'country':
                    res.status(400).send({
                        error: `The country failed to match the following rules:
                        <br>
                        1. It must contain only lowercase and uppercase letters
                        <br>
                        2. It must be between 2-32 charachers long!`
                    })
                    break
                case 'phone':
                    res.status(400).send({
                        error: `You must provide a valid phone number!
                        <br>
                        The number can optionally start with \"+\"`
                    })
                    break
                case 'lbo':
                    res.status(400).send({
                        error: `You must provide valid lbo!
                        <br>
                        It must contain exactly 11 numbers!`
                    })
                    break
                default:
                    res.status(400).send({
                        error: `Invalid registration information`
                    })
                    break
            }
            console.log("\njoi found an invalid input " + error)
        } else{
            next()
        }
    }
}