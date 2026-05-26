(function(window) {
    var speakHello = {};
    var helloWord = "Hello";

    speakHello.speak = function(name) {
        console.log(helloWord + " " + name);
    };

    window.speakHello = speakHello;
})(window);