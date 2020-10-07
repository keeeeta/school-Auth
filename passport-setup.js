const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.serializeUser(function (user, done) {
  //console.log('The passport function ' + user.id);
  done(null, user);
  //done user.id
});

passport.deserializeUser(function (id, done) {
  //   User.findById(id, function (err, user) {
  //     done(err, user);
  //   });
  done(null, id);
});

passport.use(
  new GoogleStrategy(
    {
      clientID:
        '733507164291-a7408crev2vqrqs8pqs2noq9qgqlstbu.apps.googleusercontent.com',
      clientSecret: '-5RHOVKoYE46ppX72WwxmzB5',
      callbackURL: 'http://localhost:5000/google/callback',
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      //db logic - profile.id contains - email,name,user profile

      //if user exists - return to the done function
      console.log('Profile ' + profile.email + ' ' + profile.displayName);
      return done(null, profile);
    }
  )
);
