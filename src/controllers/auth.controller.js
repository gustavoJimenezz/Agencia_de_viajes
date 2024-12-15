const { where } = require('sequelize');
const models = require('../database/models/index');
const handleBcrypt = require('../utils/handleBcrypt');
const generateToken = require('../utils/generateToken');
const controller = {}

controller.verifyUser = async (req, res) => {
    try {
        const {email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({error: "One of the fields is not entered"})
        }
    
        const user = await models.User.findOne({
            where: {email: email}
        });
        
        if (!user) {
            res.status(404).json({
                success: false, 
                error: 'User not found' 
                })
        }

        const auth = await models.Authentication.findOne({
            where: {usuario_id: user.id}
        });

        const checkPassword = await handleBcrypt.compare(password, auth.password);

        if(!checkPassword){
            return res.status(404).json({
                success:false,
                error: "Invalid password",
            });
        }
        
        const token = await generateToken.tokenSign(user);

        res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 60 * 60 * 1000 

        })

        return res.status(200).json({
            success:true,
            data:{
                user: user,
            }
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            data: {
                message: "User not found", 
                error: error.message
            },
        })
    }
}

controller.login = async (req, res) => {
    res.render('login/login')
}

controller.singUp = async (req, res) => {
    res.render('login/signUp')
}

module.exports = controller; 