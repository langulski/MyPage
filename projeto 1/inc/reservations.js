var conn = require("./db")


module.exports = {
render(req,res,error,success){

    res.render('reservations',{
        title:'reservation burger house',
        background: 'images/img_bg_2.jpg',
        h1 : 'make your reservation',
        body: req.body,
        error,
        success
      });

},

save(fields){




  return new Promise((resolve,reject)=>{

    fields.date = fields.date.split('/').reverse().join('-');


    conn.query(`
    INSERT INTO tb_reservations (name,email,people,date,time)
    VALUES(?,?,?,?,?)
    
    `,[
      fields.name,
      fields.email,
      fields.people,
      fields.date,
      fields.time
  
    ], (err,results) =>{
      if(err){
        reject(err);
      }else{
        resolve(results);
      }
  
  
    } )


  });

}

};