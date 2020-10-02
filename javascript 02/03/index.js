function melhor() {
      var ask = document.getElementById('game').value;
      var hasagi = 'https://www.myinstants.com/media/sounds/yasuo-hasaki.mp3';
      var mastery = 'https://www.myinstants.com/media/sounds/mastery_emote_tier5.mp3';

  	if (ask == 'dota') {
   /*  function vol() {
      mastery.volume = 0.2;
      hasagi.volume = 0.2;
    }
    vol(); */

       playSound(hasagi);
       setTimeout(function() {alert("lol é melhor que dota")}, 93);
	/* vol(); */
       setTimeout(function() {playSound(mastery); }, 89.8);

} else {

       playSound(hasagi);
       setTimeout(function() {alert("lol é melhor que Dark Souls")}, 93);
       setTimeout(function() {playSound(mastery); }, 89.8);


  }

  function playSound(url) {
    const audio = new Audio(url);
    audio.play();

  }
}