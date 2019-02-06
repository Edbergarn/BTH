var express = require('express');
var router = express.Router();
var mjson = require('../data/members.json');

/* GET about page */
router.get('/', function(req, res, next) {
    var members = getCardsInfo();

    
    res.render('about', { title: 'Om oss', members: members});
    
});

router.get('/:id', function(req, res, next) {

    var membersCards = getCardsInfo();

    for (var i = 0; i < mjson.members.length; i++) {
        if (req.params.id.toLowerCase() == mjson.members[i].name.replace(/\s/g,"-").toLowerCase()) {       
            res.render('about', { title: 'Medlem', members: membersCards, selectedMember: mjson.members[i]});
            break;
        }    
    }
});

function getCardsInfo() {
    var cards = [];
    mjson.members.forEach(element => {
        var tempArray = [];
        tempArray[0] = element.portrait;
        tempArray[1] = element.name;
        tempArray[2] = element.offer;
        cards.push(tempArray);
    });
    
    return cards;
}

module.exports = router;