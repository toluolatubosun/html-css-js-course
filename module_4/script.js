(function () {

    var names = ["Sam", "John", "Bob", "Daniel", "Carl", "Tom", "Jerry", "Elijha", "Klaus", "Stefan"];
    
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
    
      if (firstLetter === 'j') {
        byeSpeaker(names[i]);
      }
      else {
        helloSpeaker(names[i]);
      }
    }
    
})();