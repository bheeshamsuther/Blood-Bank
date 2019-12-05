// Navbar Start
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

//   Navbar End
  
  // Slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
// Slider End


document.getElementById(`logoutbtn`).addEventListener(`click`, () => {

  firebase.auth().signOut().then((res) => {

      // localStorage.removeItem("CurentUser")

      console.log(res, `signout`)
      window.location.href = `index.html`

  }), (err) => {
      console.log(err, `signout error`)


  }
})

var database = firebase.database().ref(`/`);

let currentUser = localStorage.getItem('CurentUser');
currentUser = JSON.parse(currentUser);
document.getElementById('donate_Btn').addEventListener('click' , ()=>{
let bloodGroup = document.getElementById("search").value;
if(bloodGroup === ""){
  swal("Oops...", "Select Your Blood Group", "error");
}
else{
console.log(bloodGroup);

swal("Successful", "Your Card Has Been Created", "success");
}
database.child(`allUsers/${currentUser.id}`).update(
  {blood : bloodGroup})



})

database.child(`allUsers`).on("child_added" , value=>{
let allData = value.val();
console.log(allData.blood);
if (allData.blood !== undefined){
let bloodTag = document.getElementById(allData.blood);
bloodTag.innerHTML = Number(bloodTag.innerHTML) + 1
}
})


  
        

