//routing for everything user related

const express = require('express');
const router = express.Router();

//responds to get and post requests for the /users page
router
    .route('/')
    .get((req, res) => {
        console.log(req.query.name);
        res.send("User List");
    })
    .post((req, res) => {
        const isValid = false;
        if (isValid) {
            users.push({ firstName: req.body.firstName })
            res.redirect(`/users/${users.length - 1}`)
        } else {
            console.log("Error");   
            res.render("users/new", { firstName: req.body.firstName});
        }
    });

router.get('/new', (req, res) => {
    res.render("users/new", { firstName: "Test" });
});

//responds to get, put, and delete requests for the dynamic /users/:id page
router
    .route('/:id')
    .get((req, res) => {
    res.send(`Get User With ID ${req.params.id}`);
    console.log(req.user);
    })
    .put((req, res) => {
    res.send(`Update User With ID ${req.params.id}`);
    }).delete((req, res) => {
    res.send(`Delete User With ID ${req.params.id}`);
    });

//middleware that's called any time we go to a route that has the "id" parameter
//can be used to pull user information from database to log in backend
const users = [{ name: "Dylan" }, { name: "Fay" }];
router.param('id', (req, res, next, id) => {
    req.user = users[id];
    next();
});

module.exports = router;