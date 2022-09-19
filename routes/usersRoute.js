const express = require('express');
const knex = require('knex')(require("../knexfile"));
const router = express.Router();
const jwt = require('jsonwebtoken');

/**
 * POST /users/login
 */
router.post("/login", async (req, res) => {
    
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Login requires email and password fields"});
    }
    
    //SELECT * FROM `user` WHERE email="user email" AND password="user password"
    const foundUsers = await knex
        .select("*")
        .from("user")
        .where({ email: email})
        .andWhere({ password: password});

    if (foundUsers.length !== 1) {
        // not found user
        return res.status(401).json({ error: "Invalid login credentials" });
    }

    const user = foundUsers[0];

    const token = jwt.sign({ user_id: user.id }, process.env.JWT_SECRET_KEY);    
    res.json({
        message: "Successfully logged in",
        token
    })
});

module.exports = router;