console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket=[];

function addItem( item ){
  if (basket.push (item));
  return true;
}
console.log('Basket is', basket);
console.log('Add apples', addItem('apples'));
console.log('Add bananas', addItem('bananas'));
console.log('Add cherries', addItem('cherries'));

function listItems(item){
  for (let item of basket){
  console.log('The items in the basket are: ', item);
}
}//end listItems
listItems();

function empty( ){
  basket=[];
  return basket;
}
console.log('The basket is now: ', empty());

const maxItems=5;

function isFull( basket ){
  if (basket >= maxItems){
    return true;
  } {
    return false;
  }
}
console.log('My basket is full:', isFull());
