var uniqueID;
var cardArray = [];


function stringifyArray() {
  cardArrayStringify = JSON.stringify(cardArray)
  toStorage(cardArrayStringify);
  console.log(cardArrayStringify);
}

function toStorage(array) {
  localStorage.setItem( "cardlist",array);
}



function generateID() {
  var dateTime = new Date();
  var uniqueNum = dateTime.getTime();
  uniqueID = uniqueNum;
}


function Card(title, idea, uniqueID) {
  this.title = title;
  this.idea = idea;
  this.uniqueID = uniqueID;
  cardArray.push(this);
  stringifyArray();
}



function addCard() {
  generateID();
  var title = $('.title-input').val();
  var idea = $('.body-input').val();
  var card = new Card(title, idea, uniqueID)
}


$('.submit-btn').on('click', function(){
  addCard();
})
