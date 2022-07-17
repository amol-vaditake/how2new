const { AdminModel } = require('../models/adminmodel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

async function AdminAuth(req, res, next) {
    try {
        const findAdmin = await AdminModel.findOne({
            email: req.body.email
        });

        if (findAdmin) {
            const mypassword = req.body.password;
            const isValidPassword = await bcrypt.compare(mypassword, findAdmin.password);
            if (isValidPassword && findAdmin.role === 'admin') {
                const accesstoken = jwt.sign({
                    id: findAdmin._id,
                    name: findAdmin.email,
                }, process.env.ACCESS_TOKEN, {
                    expiresIn: 31556926
                })
                req.accesstoken = accesstoken;
                next();
            } else {
                res.status(404).json({
                    error: {
                        msg: "You are not admin"
                    }
                })
            }
        } else {
            res.status(500).json({
                error: {
                    msg: "Email and Password is not valid"
                }
            })
        }

    } catch (e) {
        res.status(501).json({
            error: {
                msg: e.message
            }
        })
    }
}

function athenticateadmin(req, res, next) {
    try {
        const token = req.headers.authorization;
        if (token) {
            try{
							const isValidToken = jwt.verify(token, process.env.ACCESS_TOKEN);
							if (isValidToken) next()
							else {
                res.status(404).json({
                    msg: 'Session has been expired...'
                })
            }
						}catch(e){
							console.log(e)
						}
        } else {
            res.status(404).json({
                msg: 'Session has been expired...'
            })
        }
    } catch (e) {
        res.status(500).json({
            msg: 'Session has been expired...'
        })
    }
}

module.exports = {
    AdminAuth,
    athenticateadmin
}