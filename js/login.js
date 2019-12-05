let database = firebase.database().ref(`/`)

document.getElementById(`login`).addEventListener(`click`, () => {
    let emailAddress = document.getElementById(`email`).value;
    let password = document.getElementById(`password`).value;

    const user = {
        emailAddress,
        password,
    }

    firebase.auth().signInWithEmailAndPassword(user.emailAddress, user.password)
        .then((res) => {
            swal("Login Successful", "", "success");

            database.child(`allUsers/${res.user.uid}`).on(`value`, (value) => {

                let result = value.val();
                console.log(result);
                result.id = value.key;

                localStorage.setItem(`CurentUser`, JSON.stringify(result))

                window.location.href = `home.html`
            })
        })
        .catch(function (error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            swal("Oops...", "Login Unsuccessful", "error");

        });
})