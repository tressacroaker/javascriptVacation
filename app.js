var scam = document.getElementById("scam");
setInterval(function () {
  if(!scam.style.height) {
    scam.style.height = "400px";
  } else if (scam.style.height = "400px") {
    scam.style.height = "auto";
  }
},2000);

var cancun = document.getElementById("cancun");
var move = function () {
cancun.style.transform ="scale(1.5, 1.5) translateX(-80px)";
};

var hawaii = document.getElementById("hawaii");
var rotate = function () {
hawaii.style.transform ="scale(1.5, 1.5)";
};

var nyc = document.getElementById("nyc");
var enlarge = function () {
nyc.style.transform = "scale(1.5, 1.5) translateX(80px)";
};

scam.addEventListener("click", function(){ alert("Call Today!"); });

var hamburger = document.getElementByClassName("hamburger");
var dropDown = function () {
  if(hamburger.length ==0 || hamburger[0].style.display == "none") {
    hamburger.insertAdjacentHTML('afterend', '<div class="hamburger"> Home </div><div class="hamburger"> About </div><div class="hamburger"> Vacations </div><div class="Contact"</div')
  } else {
    for (var i = 0; i < hamburger.length; i++) {
      hamburger[1].style.display = "none";
    }
  }
};
