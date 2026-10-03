const jwt = require("jsonwebtoken");

const generateRefreshToken = ((user) => {
    return jwt.sign({
        id: user._id,
        email: user.email
    },
        process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    })
});
module.exports = generateRefreshToken;