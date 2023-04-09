
// const element = document.getElementById("olinosite");
// const element2 = document.getElementById("allsite");

// function ff() {
//     alert(element.scrollTop);
// }

// element.onscroll = function() {
//     myFunction1();
//     myFunction2();
//     myFunction3();
//     myFunction4();
//     myFunction5();
//     myFunction6();
//     myFunc1();
//     myFunc2();
//     myFunc3();
//     myFunc4();
//     myFunc5();
//     myFunc6();
// };
// element2.onscroll = function() { myFunction() };
// //---------------------------------------------------------------------------------
// function myFunc1() {

//     if (element.scrollTop >= 0 && element.scrollTop < 1365) {

//         document.getElementById("nav-item1").className = "nav-item22";
//     } else {
//         document.getElementById("nav-item1").className = "";
//     }
// }

// function myFunc2() {
// alert("kkkk")
//     if (element.scrollTop >= 1365 && element.scrollTop < 2730) {

//         document.getElementById("nav-item2").className = "nav-item22";
//     } else {
//         document.getElementById("nav-item2").className = "";
//     }
// }

// function myFunc3() {

//     if (element.scrollTop >= 2730 && element.scrollTop < 4095) {

//         document.getElementById("nav-item3").className = "nav-item22";
//     } else {
//         document.getElementById("nav-item3").className = "";
//     }
// }

// function myFunc4() {

//     if (element.scrollTop >= 4095 && element.scrollTop < 5460) {

//         document.getElementById("nav-item4").className = "nav-item22";
//     } else {
//         document.getElementById("nav-item4").className = "";
//     }
// }

// function myFunc5() {

//     if (element.scrollTop >= 5460 && element.scrollTop < 6800) {

//         document.getElementById("nav-item5").className = "nav-item22";
//     } else {
//         document.getElementById("nav-item5").className = "";
//     }
// }

// function myFunc6() {

//     if (element.scrollTop >= 6800 && element.scrollTop < 8190) {

//         document.getElementById("nav-item6").className = "nav-item22";
//     } else {
//         document.getElementById("nav-item6").className = "";
//     }
// }

// //-----------------------------------------------------------------------------------------------------------------
// function myFunction1() {

//     if (element.scrollTop >= 0 && element.scrollTop < 1365) {

//         document.getElementById("olinobutt1").className = "mydiv1";
//     } else {
//         document.getElementById("olinobutt1").className = "";
//     }
// }

// function myFunction2() {
//     if (element.scrollTop >= 1365 && element.scrollTop < 2730) {
//         document.getElementById("olinobutt2").className = "mydiv1";
//     } else {
//         document.getElementById("olinobutt2").className = "";
//     }
// }

// function myFunction3() {
//     if (element.scrollTop >= 2730 && element.scrollTop < 4095) {
//         document.getElementById("olinobutt3").className = "mydiv1";
//     } else {
//         document.getElementById("olinobutt3").className = "";
//     }
// }

// function myFunction4() {
//     if (element.scrollTop >= 4095 && element.scrollTop < 5460) {
//         document.getElementById("olinobutt4").className = "mydiv1";
//     } else {
//         document.getElementById("olinobutt4").className = "";
//     }
// }

// function myFunction5() {
//     if (element.scrollTop >= 5460 && element.scrollTop < 6800) {
//         document.getElementById("olinobutt5").className = "mydiv1";
//     } else {
//         document.getElementById("olinobutt5").className = "";
//     }
// }

// function myFunction6() {
//     if (element.scrollTop >= 6800 && element.scrollTop < 8190) {
//         document.getElementById("olinobutt6").className = "mydiv1";
//     } else {
//         document.getElementById("olinobutt6").className = "";
//     }
// }
// // //-----------------------------------------------------------------------------------------------------------------------------
// const element = document.getElementById("olinosite");
// const b=document.getElementsByName("body")
// b.onscroll = function (){
//     console.log(element.scrollTop);
// }

// function myFunction1() {
//     console.log(element.scrollTop);
// }
// 
const element1 = document.getElementById("element1");
const element2 = document.getElementById("element2");
const element3 = document.getElementById("element3");
const element4 = document.getElementById("element4");
const element5 = document.getElementById("element5");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
            alert(`${entry.target.id} is now visible!`);
        }
    });
});

observer.observe(element1);
observer.observe(element2);
observer.observe(element3);
observer.observe(element4);
 observer.observe(element5);

