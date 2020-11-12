function f1(){
    var uname = document.getElementById("uname").value;
    var gen = document.getElementsByName("gen");
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    if(uname==null || uname==""){
        alert("Name must not be blank or empty");
        return false;
    }
    else if(gen[0].checked == false && gen[1].checked == false){
        alert("Please select your gender");
        return false;
    }
    else if(pass1.length<8){
        alert("Password must be atleast 8 characters long");
        return false;
    }
    else if(pass1 != pass2){
        alert("Both passwords must be same");
        return false;
    }
    else{
        alert("Login successful");
    }
}