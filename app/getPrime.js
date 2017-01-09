module.exports = {
 
   getPrime: function(num) {
      var prime = [];
      var iterate = 1;
      var j;      
      //Test if the argument is a number
      if(typeof(num) === 'number')
      {    
         //Generate an array of numbers from 2 to num if num is greater or equal to 2  
         if (num >= 2)
         {
            //Handles the special case when num is 2
            if(num == 2)
            {
               prime.push(2);
            }
            //Generate an array of numbers from 2 to num while ommitting all even numbers
            else if(num >= 3)
            {
               prime.push(2);            
               for(var i = 0; i < num -2; i += 2)
               {
                  prime.push(3 + i);
               }
            }
            //limit set the upper bound to the value used in the first iteration 
            var limit = Math.sqrt(num);
            var primelength = prime.length;
            //First iteration to select the array element used to divide other elements in the 
            //second iteration in other to remove its multiples from the array
            while(iterate < primelength - 1)
            {
               //Test if selected array element's value is less than or equal to limit(upper bound)
               if(prime[iterate] <= limit)
               {
                  j = 1 + iterate;
                  //Second iteration to remove the non prime numbers from the array
                  while(j < primelength)
                  {
                     //Test for the prime property
                     if(prime[j] % prime[iterate] == 0)
                     {
                        //Removal of non prime numbers from the array
                       prime.splice(j,1);
                     }   
                         j += 1;
                  }
               }
               //Prime lenght reset to the new prime.length after the removal of non prime numbers in each iteration
               primelength = prime.length;
               iterate += 1;
            }
         }
         return prime;
      }
      //Runs if num is not a number
      else
      {
         return 'Not a valid argument';
      }
   }
}
