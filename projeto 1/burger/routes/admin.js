var users = require("../../inc/users.js");
var express = require("express");
var router = express.Router();
var admin = require ("../../inc/admin.js");
var menus = require ("../../inc/menus.js");
router.use(function(req,res,next){
    if (['/login'].indexOf(req.url) == -1 && !req.session.user){
        res.redirect("/admin/login");
    }else{

 
    next();
    }
});


router.use(function(req,res,next){
    req.menus = admin.getMenus(req);

    next();
});

router.get("/logout",function(req,res,next){
    delete req.session.user;

    res.redirect("/admin/login");
});

router.get("/", function(req,res,next){

admin.dashboard().then(data =>{
    res.render("admin/index", admin.getParams(req,{
        data
    }));
}).catch(err =>{
    console.error(err)


});

});





router.post("/login",function(req,res,next){
    if(!req.body.email){
        users.render(req,res,"fill the email box")
    }else if(!req.body.password){
        users.render(req,res,"fill the password box")
    }else{
        users.login(req.body.email,req.body.password).then(user =>{
            
    
            req.session.user = user;
           
           
           
            res.redirect("/admin");

        }).catch(err => {

            users.render(req,res,err.message || err);
        });
    }

});


router.get("/login", function(req,res,next){
    
    users.render(req,res,null);
    

});

router.get("/contacts", function(req,res,next){
    res.render("admin/contacts",admin.getParams(req)) ;
});

router.get("/emails", function(req,res,next){
    res.render("admin/emails",admin.getParams(req)) ;
});

router.get("/menus", function(req,res,next){
    menus.getMenus().then(data=>{

        res.render("admin/menus",admin.getParams(req,{
            data
        })) ;
    })
    
   
});

router.get("/reservations", function(req,res,next){
    res.render("admin/reservations",admin.getParams(req,{
        date:{}
      
    })) ;
});

router.get("/users", function(req,res,next){
    res.render("admin/users",admin.getParams(req)) ;
});



module.exports = router;