window.onload = function () {

    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let categories;         // Array of topics
    let chosenCategory;     // Selected catagory
    let word ;              // Selected word
    let guess ;             // Geuss
    let geusses = [ ];      // Stored geusses
    let lives ;             // Lives
    let counter ;           // Count correct geusses
    let space;              // Number of spaces in word '-'


    // Get elements
    let showLives = document.getElementById("mylives");

    // create alphabet ul
    let buttons = function () {
       let myButtons = document.getElementById('buttons');
       let letters = document.createElement('ul');


        for (let i = 0; i < alphabet.length; i++) {
            letters.id = 'alphabet';
            list = document.createElement('li');
            list.id = 'letter';
            list.innerHTML = alphabet[i];
            check();
            myButtons.appendChild(letters);
            letters.appendChild(list);
        }
    }


    // Select Catagory
    let selectCat = function () {
        if (chosenCategory === categories[0]) {
            catagoryName.innerHTML = "Sporto atletai";
        } else if (chosenCategory === categories[1]) {
            catagoryName.innerHTML = "Filmo pavadinimas";
        } else if (chosenCategory === categories[2]) {
            catagoryName.innerHTML = "Miesto pavadinimas";
        }
    }

    // Create geusses ul
    result = function () {
      let wordHolder = document.getElementById('hold');
       let correct = document.createElement('ul');

        for (let i = 0; i < word.length; i++) {
            correct.setAttribute('id', 'my-word');
            guess = document.createElement('li');
            guess.setAttribute('class', 'guess');
            if (word[i] === "-") {
                guess.innerHTML = "-";
                space = 1;
            } else {
                guess.innerHTML = "_";
            }

            geusses.push(guess);
            wordHolder.appendChild(correct);
            correct.appendChild(guess);
        }
    }

    // Show lives
    comments = function () {
        showLives.innerHTML = "Tu turi " + lives + " gyvybių";
        if (lives < 1) {
            showLives.innerHTML = "Game Over";


        }
        for (let i = 0; i < geusses.length; i++) {
            if (counter + space === geusses.length) {
                showLives.innerHTML = "You Win!";
            }
        }
    }

    // Animate man
    let animate = function () {
        let drawMe = lives ;
        drawArray[drawMe]();
    }


    // Hangman
    canvas =  function(){

        myStickman = document.getElementById("stickman");
        context = myStickman.getContext('2d');
        context.beginPath();
        context.strokeStyle = "#fff";
        context.lineWidth = 2;
    };

    head = function(){
        myStickman = document.getElementById("stickman");
        context = myStickman.getContext('2d');
        context.beginPath();
        context.arc(60, 25, 10, 0, Math.PI*2, true);
        context.stroke();
    }

    draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {

        context.moveTo($pathFromx, $pathFromy);
        context.lineTo($pathTox, $pathToy);
        context.stroke();
    }

    frame1 = function() {
        draw (0, 150, 150, 150);
    };

    frame2 = function() {
        draw (10, 0, 10, 600);
    };

    frame3 = function() {
        draw (0, 5, 70, 5);
    };

    frame4 = function() {
        draw (60, 5, 60, 15);
    };

    torso = function() {
        draw (60, 36, 60, 70);
    };

    rightArm = function() {
        draw (60, 46, 100, 50);
    };

    leftArm = function() {
        draw (60, 46, 20, 50);
    };

    rightLeg = function() {
        draw (60, 70, 100, 100);
    };

    leftLeg = function() {
        draw (60, 70, 20, 100);
    };

    drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1];


    // OnClick Function
    check = function () {
        list.onclick = function () {
            let geuss = (this.innerHTML);
            this.setAttribute("class", "active");
            this.onclick = null;
            for (let i = 0; i < word.length; i++) {
                if (word[i] === geuss) {
                    geusses[i].innerHTML = geuss;
                    counter += 1;
                }
            }
            let j = (word.indexOf(geuss));
            if (j === -1) {
                lives -= 1;
                comments();
                animate();
            } else {
                comments();
            }
        }
    }


    // Play
    play = function () {
        categories = [
            ["toni-krosas", "rafaelis-nadalis", "kevinas-durantas", "tigeris-woodsas", "rogeris-fedederis", "neymaras", "lionelis-messi" , "lebronas-jamesas"],
            ["raganos", "enola-holmes", "slepynes", "dvynys", "platforma", "zmogus-voras", "liutas-karalius", "troliai", "venomas", "tas"],
            ["keiptaunas", "sovetas", "benoni", "pretorija", "bangis", "bankokas", "seulas", "mumbajus", "daka", "hanojus" ]
        ];

        chosenCategory = categories[Math.floor(Math.random() * categories.length)];
        word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
        word = word.replace(/\s/g, "-");
        console.log(word);
        buttons();

        geusses = [ ];
        lives = 10;
        counter = 0;
        space = 0;
        result();
        comments();
        selectCat();
        canvas();

    }

    play();

}
function refreshPage(){
    window.location.reload();
}

