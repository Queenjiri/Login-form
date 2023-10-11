let loginForm = document.getElementById("loginForm");

loginForm.addEventListener('submit', function(e){
    e.preventDefault();
    let firstName = document.getElementById('firstName');
    let lastName = document.getElementById('lastName');
    let email = document.getElementById('email');
    let passWord = document.getElementById('password');

    if(firstName ==="" || lastName === ""  && email === "" || passWord === ""){
      document.write("Please details correctly");
    }else{
        document.write("You have successfully claimed your free trial");
    }

})