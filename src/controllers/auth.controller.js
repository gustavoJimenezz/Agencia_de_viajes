const { where } = require('sequelize');
const models = require('../database/models/index');
const handleBcrypt = require('../utils/handleBcrypt');
const controller = {}

controller.login = async (req, res) => {
    try {
        const {email, password} = req.body;

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

        if(checkPassword){
            res.status(200).json({
                success:true,
                user: user
            });
        }
        
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

module.exports = controller;