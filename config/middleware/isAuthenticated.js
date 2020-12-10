// This is middleware for restricting routes a user is not allowed to visit if not logged in
module.exports = function(req, res, next) {
    // If the user is logged in, continue with the request to the restricted route
    console.log(req.session);
    console.log(req.user);
    if (req.user) {
        return next();
    } else {
        // If the user isn't logged in, redirect them to the home page
        return res.redirect("/");
    }

};