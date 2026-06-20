const passport = require("passport");
const User = require("../models/User");
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
    // const passport = require("passport");
var opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SecretOrKey
};
passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
        const user = await User.findById(jwt_payload._id).select(
            "-password"
        );
        if (user) {
            return done(null, user)
        }  else {
            return done(null, false);
        }
    } catch (error) {
        return done(error, false)
    }
}));

const isAuth = () => passport.authenticate("jwt", { session: false });
module.exports = isAuth;
    
