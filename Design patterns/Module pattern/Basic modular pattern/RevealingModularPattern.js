var modularPattern = (function () {
 
  var countPrivateVar, displayPrivateMethod, publicMethod;
 
  _countPrivateVar = 0;
 
  _displayPrivateMethod = function() {
      console.log( countPrivateVar );
  };

  publicFunction = function(){
    countPrivateVar++;
    _displayPrivateMethod();
  }
 
  return {
  
    numberOfCount : publicMethod

  };
 
})();

modularPattern.numberOfCount();
