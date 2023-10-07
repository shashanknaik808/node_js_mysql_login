const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const brcrypt = require('bcryptjs');



const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});



module.exports.register = (req, res) => {
    console.log(req.body);

    const { name, email, password, passwordConfirm } = req.body;
    db.query('SELECT EMAIL FROM USERS WHERE EMAIL = ?', [email], async (error, results) => {
        if (error) {
            console.log(error);
        }
        if (results.length > 0) {
            return res.render('register', {
                message: 'That email is already in use'
            })
        } else if (password !== passwordConfirm) {
            return res.render('register', {
                message: 'Password do not match'

            })
        }


        // let haashedPassword = await brcrypt.hash(password, 8);
        // console.log(haashedPassword);

        db.query('INSERT INTO USERS SET ? ', { name: name, email: email, password: password }, (error, results) => {
            if (error) {
                console.log(error);
            } else {
                console.log(results);
                return res.render('register', {
                    message: 'User Registered'
                })
            }
        })
    });

};
