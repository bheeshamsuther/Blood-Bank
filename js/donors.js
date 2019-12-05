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
  
document.getElementById(`logoutbtn`).addEventListener(`click`, () => {

    firebase.auth().signOut().then((res) => {
  
        // localStorage.removeItem("CurentUser")
  
        console.log(res, `signout`)
        window.location.href = `index.html`
  
    }), (err) => {
        console.log(err, `signout error`)
  
  
    }
  })
  