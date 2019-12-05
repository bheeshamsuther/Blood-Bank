var database = firebase.database().ref(`/`)

document.getElementById(`signUp`).addEventListener(`click`, () =>{
 let name = document.getElementById(`name`).value;
 let email = document.getElementById(`email`).value;
 let password = document.getElementById(`password`).value;
 let city = document.getElementById(`city`).value;
 let phone = document.getElementById(`phone`).value;
 let file = document.getElementById(`file`).value;
 let age = document.getElementById(`age`).value;
const userData = {
    name,
    email,
    password,
    city,
    phone,
    file,
    age,
    }
    console.log(userData);
    firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password).then((userObj)=>{
        database.child(`allUsers/${userObj.user.uid}`).set(userData)
        swal("Signup Successful", "", "success");
        window.location.href = `index.html`

})
.catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    swal("Oops...", "Signup Unsuccessful", "error");

  });
})