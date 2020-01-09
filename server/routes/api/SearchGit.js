const fetch = require('node-fetch');
module.exports = (app) => {
    const bookmark =[]

    app.get(`/Search/:value`, function (req, res) {
 
        let url = `https://api.github.com/search/repositories?q=${req.params.value}&per_page=12`;
        console.log(url) 
        fetch(url)
        .then(res => res.json())
        .then(data => {
            res.send({data});
        })
        .catch(err => {
            res.send(err);
        });
    });
    
    app.get('/Bookmark/:id', function (req, res) {
      let addBk =  req.params.id 
      bookmark.push(addBk)
        res.send(bookmark)
        console.log(bookmark)
    })
    
    app.get('/RemoveBookmark/:id', function (req, res) {
      let subBk =  req.params.id 
      bookmark.splice( bookmark.indexOf(subBk), 1 );
        res.send(bookmark)
        console.log(bookmark)
    })
    
    app.get('/Bookmark', function (req, res) {
        res.send(bookmark)
    })
};
