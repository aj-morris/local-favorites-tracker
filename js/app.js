let myFavorite = {
    name: 'La La Land',
    category: 'coffee',
    rating: 5,
    notes: 'Great variety of drinks and the perfect stop for a pick me up with friends.',
    dateAdded:'September 2026'
};

console.log(myFavorite.name);
let displayText = myFavorite.name + ' - Rating: ' + myFavorite.rating + '/5';
console.log(displayText);

let today = new Date ().toLocaleDateString();
console.log(today);                       //9/16/2026
console.log(myFavorite);                  //click the arrow to expand it
console.log(typeof myFavorite.name);      //string
console.log(typeof myFavorite.rating);    //number

let placeName= 'La La Land';
let rating = 5; 
console.log (placeName + ' ' + rating + '/5')
console.log ('⭐️' .repeat(rating) + ' ' +placeName);