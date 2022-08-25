function writeCards(visitors, gifts) {
    debugger;
       let messages=[];
   
       for (let i = 0; i < visitors.length; i++) {
           const message = `Thank you, ${visitors[i]}, for the wonderful ${gifts} gift!`;
           messages.push(message);
   
       }
       return messages;
       debugger;
   }
   writeCardds(visitors, surprise);
   writeCards();
   
   function countDown(number) {
       var number= number
       for (let j = number; j >= 0; j--) {
           console.log(j);
         }
         return number;
   }
   countDown(11);