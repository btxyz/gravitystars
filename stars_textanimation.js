var tt_element = document.getElementById("tt_element");
var tt_text = "Welcome to the night sky. It is much more visible ^without the city lights, don't you think? ^^{20}Fine, maybe the only stars you care about are on that dirty red carpet.^^My name is Cipher. I make these stars move with JavaScript vectors and functions.^My words move that way as well, minus the vectors.^You can click towards the right on the screen to open gravity pools.^I will wait until you give it a try.^^5.......4.......3.......2.......1.......^^Feel free to play with the controls over there, too.^^Without further ado, I will recite a poem ^by Ms. Dietrich entitled 'A Tale Of Fire and Ice'.^Turn off the lights and enjoy the show!^^^{18}Part I: Ice^^{12}He shines like silver midnight moon -^cool marble statue, this tycoon.^And though he makes the ladies swoon,^of ice he's hewn.; of ice he's hewn.^^He's poker-faced and can deceive^competitors and can achieve^most anything, but can't conceive^of Genevieve, of Genevieve.^^Like Neptune, distant from the sun -^relationships he chose to shun.^He thought the search for love was done.^He has no one; he has no one.^^Now love's allure has come his way.^What will he do? What will he say?^ Will he grab hold, beg love to stay,^ or let it stray? Or let it stray?^^{20}Part II: Fire^^{12}This dragoness disguised in lace -^passion's flower with angel's face,^ precisely picks the time and place^each dream to chase, each dream to chase.^^Like ink the color red, she stains^the hearts of those whose love she drains,^ and then she leaves when naught remains^No lust she feigns; no lust she feigns.^^And now there's one who would suffice.^For him alone, she'd sacrifice^her everything, so he of ice^she must entice, she must entice.^^So Genevieve now strikes the flame.^Will man of ice his love proclaim?^Beneath her fire and his cold frame,^ they're both the same. They're both the same.^^^Thanks for stopping by to listen! Oh, and you can edit me, too.";
var tt_array = tt_text.split("");
var tt_timer;
var tt_loop = true;
var tt_speed = 100;
var tt_delay = 3000;
var tt_br = "^";
var tt_line = document.createElement('span');
tt_element.appendChild(tt_line);
function typeMyText() {
  if (tt_array.length > 0) {
    if (tt_array[0] == tt_br) {
      tt_line.innerHTML += "<br>";
      tt_array.shift();
      tt_line = document.createElement('span'); // Split into lines.
			tt_element.appendChild(tt_line);
    } 
    else {
      if (tt_array[0] == '{') {
        var index = 0;
        var fontSize = '';
        tt_array.shift() // To skip {
        // Loop to get the size between the {}
        while (tt_array[index] !== '}') {
           fontSize += tt_array[index];
           tt_array.shift()
        }
        tt_array.shift() // To skip }
        tt_line.style.fontSize = fontSize+'px';
      }else {
        tt_line.innerHTML += tt_array.shift();
      }
    }
  } else {
    clearTimeout(tt_timer);
    if (tt_loop) {
      setTimeout(clearMyText, tt_delay);
    }
    return false;
  }
  tt_timer = setTimeout(typeMyText, tt_speed);
}

typeMyText();















