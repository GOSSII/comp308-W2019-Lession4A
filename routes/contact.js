let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a refernce to the contact model
let contact = require('../models/contact');

// Get Contact list page - READ
router.get('/',(req,res,next) => {
    contact.find((err, contactList) => {
        if(err){
            return console.error(err);
        }
        else{
            console.log(contactList); 
               res.render('contacts/index',{
                title: 'Contacts List',
                contactList: contactList
                
            });
        }
    })
});



module.exports = router;
