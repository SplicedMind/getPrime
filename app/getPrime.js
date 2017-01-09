module.exports = {
 
   getPrime: function(num) {
      var prime = [];
      var iterate = 1;
      var j;      

      if(typeof(num) === 'number')
      {      
         if (num >= 2)
         {
            if(num == 2)
            {
               prime.push(2);
            }
            else if(num >= 3)
            {
               prime.push(2);            
               for(var i = 0; i < num -2; i += 2)
               {
                  prime.push(3 + i);
               }
            }
            var limit = Math.sqrt(num);
            var primelength = prime.length;
            while(iterate < primelength - 1)
            {
               if(prime[iterate] <= limit)
               {
                  j = 1 + iterate;
                  while(j < primelength)
                  {
                     if(prime[j] % prime[iterate] == 0)
                     {
                       prime.splice(j,1);
                     }   
                         j += 1;
                  }
               }
               primelength = prime.length;
               iterate += 1;
            }
         }
         return prime;
      }
      else
      {
         return 'Not a valid argument';
      }
   }
}
