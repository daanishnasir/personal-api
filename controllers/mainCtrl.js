var user = require('../user.js');
var skillz = require('../skillz.js');
var secrets = require('../secrets.js');



module.exports = {

    showUser: function(req, res) {
        res.status(200).json(user);
    },



    getName(req, res) {
        return res.status(200).json(user.name);
    },

    getLocation(req, res) {
        return res.status(200).json(user.location);
    },

    getOccupations(req, res) {
        if (req.query.order === 'asc') {

            return res.status(200).json(user.occupations.slice().sort());

        } else if (req.query.order === 'desc') {
            return res.status(200).json(user.occupations.slice().sort().reverse());
        }

        return res.status(200).json(user.occupations);
    },

    getLatestOccupation(req, res) {
        const newOccupations = user.occupations.slice(-1);
        return res.status(200).json(newOccupations);
    },

    getOrderedOccupation(req, res) {
        user.occupations.sort();
        return res.status(200).json(user.occupations);
    },


    getHobbies(req, res) {
        return res.status(200).json(user.hobbies);
    },

    getHobbiesType(req, res) {
        var result = user.hobbies.filter((hobby) => hobby.type === req.params.type);
        res.status(200).json(result);
    },

    getFamily(req, res) {
        return res.status(200).json(user.family);
    },

    getFamilyGender(req, res) {

        var answer = user.family.filter((member) => {

            return member.gender.toLowerCase() === req.params.gender.toLowerCase();
            res.status(200).json(answer);
        })

    },
    getRestaurants(req, res) {
        return res.status(200).json(user.restaurants);
    },

    getRestaurantsName(req, res) {
        var solution = user.restaurants.filter(restaurant => restaurant.name === req.params.name);
        return res.status(200).json(solution);
    },


    updateName(req, res) {
        user.name = req.params.name; //not sure if this is correct.
        return res.status(200).json(user);
    },

    updateLocation(req, res) {
        console.log(req.body)
        user.location = req.body.location;
        return res.status(200).json(user);
    },

    createHobbies: function(req, res) {
        console.log(req.body)
        user.hobbies.push(req.body);
        return res.status(200).json(user);
    },


    createOccupations: function(req, res) {
        user.occupations.push(req.body.occupation);
        return res.status(200).json(user);
    },

    createFamily(req, res) {
        user.family.push(req.body);
        return res.status(200).json(user);
    },

    createRestaurant(req, res) {
        user.restaurants.push(req.body);
        return res.status(200).json(user);
    },



    getSkillz(req, res) {
        if (req.query.experience) {
            const experience = req.query.experience
            const filteredExp = skillz.filter(skill => skill.experience.toLowerCase() === experience.toLowerCase())
            res.status(200).json({
                skillz: filteredExp
            })

        }
        return res.status(200).json(skillz);
    },

    postSkillz(req, res) {
        skillz.push(req.body);
        return res.status(200).json(skillz);
    },

    getSecrets(req, res) {
        return res.status(200).json(secrets);
    }


};
