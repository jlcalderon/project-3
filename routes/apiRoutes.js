// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
    /***************  AUTHTENTICATION API ROUTES ***************/
    // Using the passport.authenticate middleware with our local strategy.
    // If the user has valid login credentials, update the status to true/logged send them to the protected route.
    // Otherwise the user will be sent an error
    app.post("/api/login", passport.authenticate("local"), function(req, res) {
        res.json(req.user);
    });

    // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
    // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
    // otherwise send back an error
    app.post("/api/signup", function(req, res) {
        db.user
            .create({
                userName: req.body.userName,
                email: req.body.email,
                password: req.body.password,
                admin: false,
                status: false,
            })
            .then(function() {
                res.redirect(307, "/api/login");
            })
            .catch(function(err) {
                res.status(401).json(err);
            });
    });

    //Route to sign up a user with admin previleges. The user's password is automatically hashed and stored securely thanks to
    // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
    // otherwise send back an error
    app.post("/api/signup/admin", function(req, res) {
        db.user
            .create({
                userName: req.body.userName,
                email: req.body.email,
                password: req.body.password,
                admin: true,
                status: false,
            })
            .then(function() {
                console.log(`admin user created`);
                res.redirect(307, "/api/login");
            })
            .catch(function(err) {
                res.status(401).json(err);
            });
    });

    // Route for logging user out
    app.get("/logout", function(req, res) {
        req.logout();
        res.redirect("/");
    });

    // Route for getting some data about our user to be used client side
    app.get("/api/user_data", function(req, res) {
        if (!req.user) {
            // The user is not logged in, send back an empty object
            res.json({});
        } else {
            // Otherwise send back the user's object stored in express session
            // Sending back a password, even a hashed password, isn't a good idea
            res.json({
                userId: req.user.id,
                userName: req.user.userName,
                userEmail: req.user.email,
                isUserAdmin: req.user.admin,
                status: req.user.status,
            });
        }
    });

    /***************  USERS MODEL API ROUTES ***************/
    // Get all users
    app.get("/api/users", function(req, res) {
        db.user.findAll({}).then(function(dbGetUser) {
            res.json(dbGetUser);
        });
    });

};