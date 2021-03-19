console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket=[];

function addItem( item ){
  basket.push ('newItem');
  basket.push ('apples', 'bananas', 'strawberries');
  return true;
}
console.log('The item was added to the basket:', addItem());

function listItems(){
    for(x=0; x=basket.length; x++);
}
for (let item of basket){
  console.log('The items in the basket are: ', item)
}

function empty( ){
  basket=[];
}
console.log('The items in the basket now are: ', empty());

const maxItems=5;

function isFull( basket ){
  if (basket >= maxItems){
    return true;
  } {
    return false;
  }
}
console.log('My basket is full:', isFull());
