(function(window) {
    var speakGoodBye = {};
    var byeWord = "Goodbye";

    speakGoodBye.speak = function(name) {
        console.log(byeWord + " " + name);
    };

    window.speakGoodBye = speakGoodBye;
})(window);