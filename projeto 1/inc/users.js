var conn = require('./db')
module.exports = {

render(req, res, error){

res.render('admin/login',{
    body:req.body,
    error
});

},

    login(email,password){

        return new Promise((resolve,reject)=>{
           
           
            conn.query(`
            SELECT * FROM tb_users WHERE email = ?
           `, [
                email
           ], (err,results)=>{
                
            if(err){
                    reject(err);

                }
                else{
                    if(!results.length > 0 ){
                        reject ("User or password incorrect")
                    }
                    else{

                    
                    let row = results[0];

                    if (row.password !==password){
                        reject("User or password incorrect")
                    } else{
                        resolve(row)
                    }
                    }
                }

            });  
        });
 
    }
};
