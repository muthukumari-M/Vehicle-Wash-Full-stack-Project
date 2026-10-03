const User = require("../models/users");

const bcrypt = require("bcrypt");

const generateAccessToken = require("../utils/generateAccessToken");
const generateRefreshToken = require("../utils/generateRefreshToken");
const { Error } = require("mongoose");

//register Service

const register = async ({ name, email, password }) => {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error("Email Already exists");

    }
    //hash password

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hashPassword
    });
    return {
        id: user._id,
        name: user.name,
        email:user.email
    }
}


//login service

const login = async ({ email, password }) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error("No User Exists");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error("Invalid Credentials")
    }
    //Providing Token for the Authendicated User

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    return {
        user: {
            id: user._id,
            name:user.name
        },
        accessToken, 
        refreshToken
    }

}

//refershToken Service

const refreshToken = async (token) => {
    let decoded;
    try {
        decoded=jwt.verify(token,process.env.REFRESH_TOKEN_SECRET)
    }
    catch (error) {
        throw new Error("Invalid or Expired Refresh Token");
    }

    if (!user) {
        throw new Error("User Not Found");
    }
    const accessToken = generateAccessToken(user);

    return {
        accessToken
    }
}



module.exports = { register,login,refreshToken };
