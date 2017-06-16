const express = require ('express');
const {json} = require('body-parser');
const port = 3000;

const app = express();
const middleware = require('./controllers/middleware.js');
const mainCtrl = require('./controllers/mainCtrl.js');

// to use model.exports call it whatever variable = require('./nameoffile')


//middleware

app.use(json());

app.use(middleware.addHeaders);


//Routes

app.get('/user', mainCtrl.showUser);


app.get('/name', mainCtrl.getName);

app.get('/location', mainCtrl.getLocation);

app.get('/occupations', mainCtrl.getOccupations);

app.get('/occupations/latest', mainCtrl.getLatestOccupation);

app.get('/hobbies', mainCtrl.getHobbies);

app.get('/hobbies/:type', mainCtrl.getHobbiesType);

app.get('/family' , mainCtrl.getFamily);

app.get('/family/:gender', mainCtrl.getFamilyGender);

app.get('/restaurants', mainCtrl.getRestaurants);

app.get('/restaurants/:name', mainCtrl.getRestaurantsName);




app.put('/user/:name', mainCtrl.updateName);

app.put('/user/location', mainCtrl.updateLocation);



app.post('/hobbies', mainCtrl.createHobbies);

app.post('/occupations', mainCtrl.createOccupations);

app.post('/family', mainCtrl.createFamily);

app.post('/restaurants', mainCtrl.createRestaurant);




app.get('/skillz', mainCtrl.getSkillz);

app.post('/skillz', middleware.generateID, mainCtrl.postSkillz);

app.get('/secrets/:username/:pin', middleware.verifyUser, mainCtrl.getSecrets);




app.listen(port, function(){
  console.log(`listening on ${port}`);
});
