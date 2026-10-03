const { overwriteMiddlewareResult } = require("mongoose");
const authService = require("../services/authService");

//register Api

const register = async (req, res, next) => {
    try {
        const result = await authService.register(req.body);

        return res.status(201).json({
            success: true,
            message: "User Registered Successfully",
            data: result
        })
    }
    catch (error) {
        next(error);
    }
    
};

//loginAPi

const login = async (req, res, next) => {
    try {
        const result = await authService.login(req.body);
      
        res.cookie("acccessToken", result.accessToken, {
            httpOnly: true,
            sameSite: "Strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        res.cookie("refreshToken", result.refreshToken, {
            httpOnly: true,
            sameSite: "Strict",
            "maxAge": 15 * 60 * 1000
        })

        res.status(200).json({
            success: true,
            message:"Logged in Successfully"
        })
    }
    catch (error) {
        next(error);
    }
}

//refershToken

const refreshToken = async(req, res, next) => {
    try {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) {
            return res.status(401).json(
                {
                    success: false,
                    message:"Refresh token not found"
                }
            )
        }
        const result = await authService.refreshToken(refreshToken);

        res.cookie("accessToken", result.accessToken, {
            hhtpOnly: true,
            sameSite: "Strict",
            maxAge:15*60*1000
            
        })
        res.status(200).json({
            success: true,
            message:"Refreshed Access Token Successfully"
      })
    } catch (error) {
        next(error)
    }
}

module.exports = { register,login ,refreshToken};