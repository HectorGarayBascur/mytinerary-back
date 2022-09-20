const passport = require("passport");
const passportJwt = require("passport-jwt");

const { KEY_JWT } = process.env;
const User = require("../models/User");

passport.use(
  new passportJwt.Strategy(
    {
      //a esta estrategia le teng que pasar 2 parametros
      jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
      //forma en que se va decodificar , captura el JSWT , lo extrae por medio de una autorizacion
      // extraccion/decodificacion a traves de un metodo que le informa que viene de HEADERS
      //como BEARER TOKEN. Es una forma de pasar TOKENS.
      secretOrKey: KEY_JWT, //clave de validacion
    },
    async (jwt_payload, done) => {
      try {
        let user = await User.findOne({ _id: jwt_payload._id });
        if (user) {
          user = {
            id: user._id,
            name: user.name,
            email: user.mail,
            role: user.role,
            photo: user.photo,
          };
        } else {
          return done(null, false);
        }
      } catch (error) {
        console.log(error);
        return done(error, false);
      }
    }
  )
);

module.exports = passport;
