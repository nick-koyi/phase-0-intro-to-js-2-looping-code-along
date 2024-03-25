// Code your solutions in this file
const gifts = ['teddy bear', 'drone', 'doll'];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

function writeCards(arr, event) {
  let messages = [];
  for (let i = 0; i < arr.length; i++) {
    messages.push(
      'Thank you, ' + arr[i] + ',' + ' for the wonderful ' + event + ' gift!'
    );
  }
  return messages;
}

function countDown(int) {
  while (int >= 0) {
    console.log(int);
    int--;
  }
}
