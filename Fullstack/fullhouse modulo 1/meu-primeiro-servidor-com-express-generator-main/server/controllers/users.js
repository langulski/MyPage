const controller = {
    index:(req, res, next) => {
        res.render('users', {
          title: 'usuários',
        subtitle:'do site do jefferson' 
 
    });
 }
}


module.exports = controller