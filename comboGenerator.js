
//Variables//

//Moves// 

var windmill = " Windmill "
var swipe = " Swipe "
var backSpin = " Backspin "
var tripod = " Tripod "
var coinDrop = " Coin Drop "
var flare = " Flare "
var headspin = " Headspin "
var barrelmill = " Barrel Mill "
var bellymill = " Belly Mill "
var nutcrackers = " Nutcrackers "
var turtle = " Turtle "
var halo = " Halo "
var ninety = " 90 "
var twoThousand = " 2000 "
var munchmill = " Munchmill "
var ufo = " UFO "
var elbowTrack = " Elbow Track "
var headglide = " Head Glide "
var shoulderSpin = " Shoulder Spin "
var virginFlare = " Virgin Flare "
var handcuffs = " Handcuff "
var airChairSpin = " Air Chair Spin "
var elbowSpin = " Elbow Spin "
var elbowGlide = " Elbow Glide "
var handHop = " HandHop "
var tapMill = " Tap Mill "
var gorillas = " Gorillas "
var jackHammer = " Jack Hammer "
var airFlare = " AirFlare "
var tombstone = " Tombstones "

//Freezes//

var babyFreeze = " Baby Freeze "
var headstand = " Headstand "
var headElbowFreeze = " Head Elbow Freeze "
var lFreeze = " L Freeze "
var shoulderFreeze = " Shoulder Freeze "
var airBaby = " Air Baby "
var airChair = " Air Chair "
var elbowFreeze = " Elbow Freeze "
var sideFreeze = " Side Freeze "
var turtleFreeze = " Turtle Freeze "
var flagFreeze = " Flag Freeze "
var oneHandFreeze = " One Hand Freeze "
var handstand = " Handstand "
var hollowBack = " Hollow Back "
var invert = " Invert "
var pikeFreeze = " Pike Freeze "
var oneHandAirBaby = " One Hand Air Baby "


//Arrays//

//Move Arrays//

var PME = [windmill, swipe, backSpin, tripod, coinDrop]  //Add more moves? 
var PMM = [flare, headspin, barrelmill, backSpin, bellymill, tapMill, coinDrop, turtle, swipe ]
var PMH = [halo, ninety, twoThousand, munchmill, ufo, backSpin, bellymill, nutcrackers, turtle, elbowTrack, gorillas, flare, headglide, shoulderSpin]
var PMI = [airFlare, ninety, twoThousand, halo, backSpin, ufo, virginFlare, handcuffs, bellymill, airChairSpin, jackHammer, elbowTrack, elbowSpin, headglide, shoulderSpin, handHop, tombstone]


//Freeze Arrays//

var FE = [babyFreeze, headstand, headElbowFreeze, lFreeze, shoulderFreeze, turtleFreeze]
var FM = [airBaby, babyFreeze,elbowFreeze,shoulderFreeze, sideFreeze, turtleFreeze]
var FH = [airBaby, airChair, elbowFreeze, flagFreeze, handstand, oneHandFreeze, sideFreeze]
var FI = [airChair, flagFreeze, hollowBack, invert, pikeFreeze, sideFreeze, oneHandAirBaby]


//Move and Freeze Arrays 

var PMFE = [windmill, swipe, backSpin, tripod, coinDrop, babyFreeze, headstand, headElbowFreeze, lFreeze, shoulderFreeze, turtleFreeze]
var PMFM = [flare, headspin, barrelmill, backSpin, bellymill, tapMill, coinDrop, turtle, swipe ][airBaby, babyFreeze,elbowFreeze,shoulderFreeze, sideFreeze, turtleFreeze]
var PMFH = [halo, ninety, twoThousand, munchmill, ufo, backSpin, bellymill, nutcrackers, turtle, elbowTrack, gorillas, flare, headglide, shoulderSpin, airBaby, airChair, elbowFreeze, flagFreeze, handstand, oneHandFreeze, sideFreeze]
var PMFI = [airFlare, ninety, twoThousand, halo, backSpin, ufo, virginFlare, handcuffs, bellymill, airChairSpin, jackHammer, elbowTrack, elbowSpin, headglide, shoulderSpin, handHop, tombstone, airChair, flagFreeze, hollowBack, invert, pikeFreeze, sideFreeze, oneHandAirBaby]
/*

INSTRUCTIONS 

1. Check CSS works on phones 
2. Build new pages 
3. Test 

*/


//Game Play Functions 
//Power Move Functions 
//Easy Move Functions 
function PME3(){
    var PME = [windmill, swipe, backSpin, tripod, coinDrop] 
    PME.sort(() => Math.random() - 0.5);
    var moves = PME.splice (0, 3);     
    sessionStorage.setItem("moves", moves);
    
 document.getElementById("moves").innerHTML = moves

} 

function PME4(){
    var PME = [windmill, swipe, backSpin, tripod, coinDrop] 
    PME.sort(() => Math.random() - 0.5);
    var moves = PME.splice (0, 4);     
    sessionStorage.setItem("moves", moves);
    
 document.getElementById("moves").innerHTML = moves

} 

function PME5(){
    var PME = [windmill, swipe, backSpin, tripod, coinDrop] 
    PME.sort(() => Math.random() - 0.5);
    var moves = PME.splice (0, 5);     
    sessionStorage.setItem("moves", moves);
    
 document.getElementById("moves").innerHTML = moves

} 

function PME6(){
    var PME = [windmill, swipe, backSpin, tripod, coinDrop] 
    PME.sort(() => Math.random() - 0.5);
    var moves = PME.splice (0, 6);     
    sessionStorage.setItem("moves", moves);
    
 document.getElementById("moves").innerHTML = moves

} 
//Medium Move Functions 
function PMM3(){
    var PMM = [flare, headspin, barrelmill, backSpin, bellymill, tapMill, coinDrop, turtle, swipe ]
    PMM.sort(() => Math.random() - 0.5);
    var moves = PMM.splice (0, 3);     
    sessionStorage.setItem("moves", moves);
    
 document.getElementById("moves").innerHTML = moves

} 

function PMM4(){
    var PMM = [flare, headspin, barrelmill, backSpin, bellymill, tapMill, coinDrop, turtle, swipe ]
    PMM.sort(() => Math.random() - 0.5);
    var moves = PMM.splice (0, 4);     
    sessionStorage.setItem("moves", moves);
    
 document.getElementById("moves").innerHTML = moves

} 

function PMM5(){
    var PMM = [flare, headspin, barrelmill, backSpin, bellymill, tapMill, coinDrop, turtle, swipe ]
    PMM.sort(() => Math.random() - 0.5);
    var moves = PMM.splice (0, 5);     
    sessionStorage.setItem("moves", moves);
    
 document.getElementById("moves").innerHTML = moves

} 

function PMM6(){
    var PMM = [flare, headspin, barrelmill, backSpin, bellymill, tapMill, coinDrop, turtle, swipe ]
    PMM.sort(() => Math.random() - 0.5);
    var moves = PMM.splice (0, 6);     
    sessionStorage.setItem("moves", moves);
    
 document.getElementById("moves").innerHTML = moves

} 

//Hard Move Functions
function PMH3(){
    var PMH = [halo, ninety, twoThousand, munchmill, ufo, backSpin, bellymill, nutcrackers, turtle, elbowTrack, gorillas, flare, headglide, shoulderSpin]
    PMH.sort(() => Math.random() - 0.5);
    var moves = PMH.splice (0, 3);     
    sessionStorage.setItem("moves", moves);
    
 document.getElementById("moves").innerHTML = moves

} 

function PMH4(){
    var PMH = [halo, ninety, twoThousand, munchmill, ufo, backSpin, bellymill, nutcrackers, turtle, elbowTrack, gorillas, flare, headglide, shoulderSpin]
    PMH.sort(() => Math.random() - 0.5);
    var moves = PMH.splice (0, 4);     
    sessionStorage.setItem("moves", moves);
    
 document.getElementById("moves").innerHTML = moves

} 

function PMH5(){
    var PMH = [halo, ninety, twoThousand, munchmill, ufo, backSpin, bellymill, nutcrackers, turtle, elbowTrack, gorillas, flare, headglide, shoulderSpin]
    PMH.sort(() => Math.random() - 0.5);
    var moves = PMH.splice (0, 5);     
    sessionStorage.setItem("moves", moves);
    
 document.getElementById("moves").innerHTML = moves

} 

function PMH6(){
    var PMH = [halo, ninety, twoThousand, munchmill, ufo, backSpin, bellymill, nutcrackers, turtle, elbowTrack, gorillas, flare, headglide, shoulderSpin]
    PMH.sort(() => Math.random() - 0.5);
    var moves = PMH.splice (0, 6);     
    sessionStorage.setItem("moves", moves);
    
 document.getElementById("moves").innerHTML = moves

} 
//Insanity Move Functions 
function PMI3(){
    var PMI = [airFlare, ninety, twoThousand, halo, backSpin, ufo, virginFlare, handcuffs, bellymill, airChairSpin, jackHammer, elbowTrack, elbowSpin, headglide, shoulderSpin, handHop, tombstone]
    PMI.sort(() => Math.random() - 0.5);
    var moves = PMI.splice (0, 3);     
    sessionStorage.setItem("moves", moves);
    
 document.getElementById("moves").innerHTML = moves

} 

function PMI4(){
    var PMI = [airFlare, ninety, twoThousand, halo, backSpin, ufo, virginFlare, handcuffs, bellymill, airChairSpin, jackHammer, elbowTrack, elbowSpin, headglide, shoulderSpin, handHop, tombstone]
    PMI.sort(() => Math.random() - 0.5);
    var moves = PMI.splice (0, 4);     
    sessionStorage.setItem("moves", moves);
    
 document.getElementById("moves").innerHTML = moves

} 

function PMI5(){
    var PMI = [airFlare, ninety, twoThousand, halo, backSpin, ufo, virginFlare, handcuffs, bellymill, airChairSpin, jackHammer, elbowTrack, elbowSpin, headglide, shoulderSpin, handHop, tombstone] 
    PMI.sort(() => Math.random() - 0.5);
    var moves = PMI.splice (0, 5);     
    sessionStorage.setItem("moves", moves);
    
 document.getElementById("moves").innerHTML = moves

} 

function PMI6(){
    var PMI = [airFlare, ninety, twoThousand, halo, backSpin, ufo, virginFlare, handcuffs, bellymill, airChairSpin, jackHammer, elbowTrack, elbowSpin, headglide, shoulderSpin, handHop, tombstone]
    PMI.sort(() => Math.random() - 0.5);
    var moves = PMI.splice (0, 6);     
    sessionStorage.setItem("moves", moves);
    
 document.getElementById("moves").innerHTML = moves

} 
//Freeze Functions 
//Easy Freeze Functions 
function FE3(){
    var FE = [babyFreeze, headstand, headElbowFreeze, lFreeze, shoulderFreeze, turtleFreeze]
    FE.sort(() => Math.random() - 0.5);
    var freezes = FE.splice (0, 3);     
    sessionStorage.setItem("freezes", freezes);
    
 document.getElementById("freezes").innerHTML = freezes

} 

function FE4(){
    var FE = [babyFreeze, headstand, headElbowFreeze, lFreeze, shoulderFreeze, turtleFreeze]
    FE.sort(() => Math.random() - 0.5);
    var freezes = FE.splice (0, 4);     
    sessionStorage.setItem("freezes", freezes);
    
 document.getElementById("freezes").innerHTML = freezes

} 

function FE5(){
    var FE = [babyFreeze, headstand, headElbowFreeze, lFreeze, shoulderFreeze, turtleFreeze]
    FE.sort(() => Math.random() - 0.5);
    var freezes = FE.splice (0, 5);     
    sessionStorage.setItem("freezes", freezes);
    
 document.getElementById("freezes").innerHTML = freezes

} 

function FE6(){
    var FE = [babyFreeze, headstand, headElbowFreeze, lFreeze, shoulderFreeze, turtleFreeze]
    FE.sort(() => Math.random() - 0.5);
    var freezes = FE.splice (0, 6);     
    sessionStorage.setItem("freezes", freezes);
    
 document.getElementById("freezes").innerHTML = freezes

} 

//Medium Freeze Functions 
function FM3(){
    var FM = [airBaby, babyFreeze,elbowFreeze,shoulderFreeze, sideFreeze, turtleFreeze]
    FM.sort(() => Math.random() - 0.5);
    var freezes = FM.splice (0, 3);     
    sessionStorage.setItem("freezes", freezes);
    
 document.getElementById("freezes").innerHTML = freezes

} 

function FM4(){
    var FM = [airBaby, babyFreeze,elbowFreeze,shoulderFreeze, sideFreeze, turtleFreeze]
    FM.sort(() => Math.random() - 0.5);
    var freezes = FM.splice (0, 4);     
    sessionStorage.setItem("freezes", freezes);
    
 document.getElementById("freezes").innerHTML = freezes

} 

function FM5(){
    var FM = [airBaby, babyFreeze,elbowFreeze,shoulderFreeze, sideFreeze, turtleFreeze]
    FM.sort(() => Math.random() - 0.5);
    var freezes = FM.splice (0, 5);     
    sessionStorage.setItem("freezes", freezes);
    
 document.getElementById("freezes").innerHTML = freezes

} 

function FM6(){
    var FM = [airBaby, babyFreeze,elbowFreeze,shoulderFreeze, sideFreeze, turtleFreeze]
    FM.sort(() => Math.random() - 0.5);
    var freezes = FM.splice (0, 6);     
    sessionStorage.setItem("freezes", freezes);
    
 document.getElementById("freezes").innerHTML = freezes

} 
//Hard Freeze Functions 
function FH3(){
    var FH = [airBaby, airChair, elbowFreeze, flagFreeze, handstand, oneHandFreeze, sideFreeze]
    FH.sort(() => Math.random() - 0.5);
    var freezes = FH.splice (0, 3);     
    sessionStorage.setItem("freezes", freezes);
    
 document.getElementById("freezes").innerHTML = freezes

} 

function FH4(){
    var FH = [airBaby, airChair, elbowFreeze, flagFreeze, handstand, oneHandFreeze, sideFreeze]
    FH.sort(() => Math.random() - 0.5);
    var freezes = FH.splice (0, 4);     
    sessionStorage.setItem("freezes", freezes);
    
 document.getElementById("freezes").innerHTML = freezes

} 

function FH5(){
    var FH = [airBaby, airChair, elbowFreeze, flagFreeze, handstand, oneHandFreeze, sideFreeze]
    FH.sort(() => Math.random() - 0.5);
    var freezes = FH.splice (0, 5);     
    sessionStorage.setItem("freezes", freezes);
    
 document.getElementById("freezes").innerHTML = freezes

} 

function FH6(){
    var FH = [airBaby, airChair, elbowFreeze, flagFreeze, handstand, oneHandFreeze, sideFreeze]
    FH.sort(() => Math.random() - 0.5);
    var freezes = FH.splice (0, 6);     
    sessionStorage.setItem("freezes", freezes);
    
 document.getElementById("freezes").innerHTML = freezes

} 
//Insanity Freeze Functions 
function FI3(){
    var FI = [airChair, flagFreeze, hollowBack, invert, pikeFreeze, sideFreeze, oneHandAirBaby]
    FI.sort(() => Math.random() - 0.5);
    var freezes = FI.splice (0, 3);     
    sessionStorage.setItem("freezes", freezes);
    
 document.getElementById("freezes").innerHTML = freezes

} 

function FI4(){
    var FI = [airChair, flagFreeze, hollowBack, invert, pikeFreeze, sideFreeze, oneHandAirBaby]
    FI.sort(() => Math.random() - 0.5);
    var freezes = FI.splice (0, 4);     
    sessionStorage.setItem("freezes", freezes);
    
 document.getElementById("freezes").innerHTML = freezes

} 

function FI5(){
    var FI = [airChair, flagFreeze, hollowBack, invert, pikeFreeze, sideFreeze, oneHandAirBaby]
    FI.sort(() => Math.random() - 0.5);
    var freezes = FI.splice (0, 5);     
    sessionStorage.setItem("freezes", freezes);
    
 document.getElementById("freezes").innerHTML = freezes

} 

function FI6(){
    var FI = [airChair, flagFreeze, hollowBack, invert, pikeFreeze, sideFreeze, oneHandAirBaby]
    FI.sort(() => Math.random() - 0.5);
    var freezes = FI.splice (0, 6);     
    sessionStorage.setItem("freezes", freezes);
    
 document.getElementById("freezes").innerHTML = freezes

} 

//Move and Freeze Functions 
//Easy Move and Freeze Functions 

function PMFE3(){
    var PMFE = [windmill, swipe, backSpin, tripod, coinDrop, babyFreeze, headstand, headElbowFreeze, lFreeze, shoulderFreeze, turtleFreeze]
    PMFE.sort(() => Math.random() - 0.5);
    var movesFreezes = PMFE.splice (0, 3);     
    sessionStorage.setItem("movesFreezes", movesFreezes);
    
 document.getElementById("movesFreezes").innerHTML = movesFreezes

} 

function PMFE4(){
    var PMFE = [windmill, swipe, backSpin, tripod, coinDrop, babyFreeze, headstand, headElbowFreeze, lFreeze, shoulderFreeze, turtleFreeze]
    PMFE.sort(() => Math.random() - 0.5);
    var movesFreezes = PMFE.splice (0, 4);     
    sessionStorage.setItem("movesFreezes", movesFreezes);
    
 document.getElementById("movesFreezes").innerHTML = movesFreezes

} 

function PMFE5(){
    var PMFE = [windmill, swipe, backSpin, tripod, coinDrop, babyFreeze, headstand, headElbowFreeze, lFreeze, shoulderFreeze, turtleFreeze]
    PMFE.sort(() => Math.random() - 0.5);
    var movesFreezes = PMFE.splice (0, 5);     
    sessionStorage.setItem("movesFreezes", movesFreezes);
    
 document.getElementById("movesFreezes").innerHTML = movesFreezes

} 

function PMFE6(){
    var PMFE = [windmill, swipe, backSpin, tripod, coinDrop, babyFreeze, headstand, headElbowFreeze, lFreeze, shoulderFreeze, turtleFreeze]
    PMFE.sort(() => Math.random() - 0.5);
    var movesFreezes = PMFE.splice (0, 6);     
    sessionStorage.setItem("movesFreezes", movesFreezes);
    
 document.getElementById("movesFreezes").innerHTML = movesFreezes

} 

//