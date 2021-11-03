var conn = require('../../inc/db.js');
var express = require('express');
var menus = require('../../inc/menus.js');
var router = express.Router();
var reservations = require('../../inc/reservations.js')
var contacts = require('../../inc/contacts.js');

/* GET home page. */
router.get('/', function(req, res, next) {

    menus.getMenus().then(results=>{
      res.render('index',{
        title:'Burger house',
        menus: results,
        isHome:true
      });

    })

});

router.get('/contacts',function(req,res,next){
 
  contacts.render(req,res);

});

router.post('/contacts',function(req,res,next){
  if(!req.body.name){
    contacts.render(req,res,'Missing name')
  }
  else if (!req.body.email){
    contacts.render(req,res,'Missing email')
  }
  else if (!req.body.message){
    contacts.render(req,res,'Missing message')
}
  else {

    contacts.save(req.body).then(results=>{
      req.body = {};

      contacts.render(req,res,null,"send successful")

    }).catch(err =>{

      contacts.render(req,res,err.message);
    });
  }


})




router.get('/menus',function(req,res,next){

  menus.getMenus().then(results=>{

  

  res.render('menus',{title:'menus burger house',
  background: 'images/img_bg_1.jpg',
  h1 : 'enjoy our menu',
  menus:results
  });

});

});

router.get('/reservations',function(req,res,next){
  reservations.render(req,res);
  
});

router.post('/reservations',function(req,res,next){

if(!req.body.name){
  reservations.render(req,res,"Digite o nome");
} else if (!req.body.email){
  reservations.render(req,res,"Digite o email")
} else if (!req.body.people){
  reservations.render(req,res,"Digite a quantidade de pessoas")
}else if (!req.body.date){
  reservations.render(req,res,"Digite a data")
}else if (!req.body.time){
  reservations.render(req,res,"Digite a hora")
} else {
  

reservations.save(req.body).then(results => {
  
  req.body = {};

  reservations.render(req,res,null,"reserva realizada com sucesso")

}).catch(err=>{
  reservations.render(req,res,err.message);
})

}

});



router.get('/services',function(req,res,next){

  res.render('services',{title:'Services Burger house',
  background: 'images/img_bg_3.jpg',
  h1 : 'check our services'

})
  

})


module.exports = router;
