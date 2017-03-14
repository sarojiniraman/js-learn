var modularPattern = (function () {
 
  var countPrivateVar, displayPrivateMethod;
 
  // A private counter variable
  countPrivateVar = 0;
 
  // A private function which logs counter variable
  displayPrivateMethod = function() {
      console.log( countPrivateVar );
  };
 
  return {
  
    // A public function utilizing privates
    publicFunction: function() {
 
      // Increment our private counter
      countPrivateVar++;
 
      // Call our private method
      myPrivateMethod();
 
    }
  };
 
})();