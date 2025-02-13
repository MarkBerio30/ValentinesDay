let noClickCount = 0;
const gifSources = ["bubuFlower.gif", "sad4.gif", "sad1.gif", "sad5.gif", "sad3.gif","sad7.gif","sad6.gif"];
const texts = [
    "My Heart is only for you!❤️",
    "Hala! Sure ka na ba dito? 🤔",
    "Sure na sure ka na talaga? 😳 ",
    "Bakit parang hindi ka pa sure? 😢",
    "Hala! Pag-isipan mo muna nang mabuti. 🤯 ",
    "100% sure ka na ba?" ,
    "If you click 'No' again, it will make me sad forever. 😭💔"
];

document.getElementById('noButton').addEventListener('click', function() {
    noClickCount++;
    document.getElementById('valentineHeading').style.display = 'none'; // Hide the heading
    if (noClickCount < 7) {
        document.getElementById('backgroundGif').src = gifSources[noClickCount];
        document.getElementById('valentineText').innerText = texts[noClickCount];
    } else {
        this.style.position = 'absolute';
        this.style.top = Math.random() * (window.innerHeight - this.offsetHeight) + 'px';
        this.style.left = Math.random() * (window.innerWidth - this.offsetWidth) + 'px';
        this.addEventListener('mouseover', moveButton);
    }
});

document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('backgroundGif').src = "Happy1.gif"; // Add your new GIF source here
    document.getElementById('valentineText').innerText = "Yehay! I knew you'd be my Valentine Hon Bunch ko!🥰❤️";
    document.getElementById('valentineHeading').style.display = 'none';
    document.getElementById('buttonContainer').innerHTML = '<a href="Valentines Message.pdf" download><button id="downloadButton">Download This Hon</button></a>';            
    document.getElementById('valentineSong').play();
});

function moveButton() {
    this.style.top = Math.random() * (window.innerHeight - this.offsetHeight) + 'px';
    this.style.left = Math.random() * (window.innerWidth - this.offsetWidth) + 'px';
}
