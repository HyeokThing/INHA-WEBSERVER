var express = require('express');
var router = express.Router();

/* 지역검색 */
router.get('/', function(req, res, next) {
  res.render('index', { title: '지역검색', pageName:'locals/search.ejs' });
});

/* 즐겨찾기 */
router.get('/favorite', function(req, res) {
  res.render('index', { title: '즐겨찾기', pageName:'locals/favorite.ejs' });
});

module.exports = router;
