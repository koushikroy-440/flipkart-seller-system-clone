//creat seller sign up/login form
let mainLoginContainer = document.getElementById('login-form');

  function createliment() {

    var center = document.createElement("center");
      var inputform = document.createElement("form");
    inputform.setAttribute("id","inputform");

    let inputEmail = document.createElement('input');
    inputEmail.setAttribute('id', 'inputemail');
    inputEmail.setAttribute('type', 'email');
    inputEmail.setAttribute("placeholder","Enter Your Email Address");
    inputEmail.setAttribute("required","required");

    var emailnotice = document.createElement("p");
    emailnotice.setAttribute("id","emailnotice");

    var inputmobile = document.createElement("input");
    inputmobile.setAttribute("placeholder","+91-Enter Your Mobile Number");
    inputmobile.setAttribute("type","number");
    inputmobile.setAttribute("id","inputmobile");
    inputmobile.setAttribute("required","required");
    inputmobile.setAttribute("disabled","disabled");

    var mobilenotice = document.createElement("p");
    mobilenotice.setAttribute("id","mobilenotice");

    var inputname = document.createElement("input");
    inputname.setAttribute("placeholder","Enter Your Full Name");
    inputname.setAttribute("type","text");
    inputname.setAttribute("id","inputname");
    inputname.setAttribute("required","required");
    inputname.setAttribute("disabled","disabled");

    var inputpass = document.createElement("input");
    inputpass.setAttribute("type","password");
    inputpass.setAttribute("placeholder","Set password");
    inputpass.setAttribute("id","inputpass");
    inputpass.setAttribute("required","required");
    inputpass.setAttribute("disabled","disabled");

    var passwordnotice = document.createElement("p");
    passwordnotice.setAttribute("id","passwordnotice");

     var loginbtn = document.createElement("button");
    loginbtn.setAttribute("type","submit");
    loginbtn.setAttribute("id","signupbtn");
    loginbtn.setAttribute('disabled','disabled');
    loginbtn.innerHTML = "SIGN UP";

//create login form

    var loginheader = document.createElement("p");
    loginheader.setAttribute("id","login-header");
    loginheader.innerHTML = 'Login Here';

    var loginfrm = document.createElement("form");
    loginfrm.setAttribute("id","loginfrm");

    var emaillogin = document.createElement("input");
    emaillogin.setAttribute("type","email");
    emaillogin.setAttribute("placeholder","Ente Your User Email")
    emaillogin.setAttribute("id","email-login");
    emaillogin.setAttribute("required","required");

    var passlogin = document.createElement("input");
    passlogin.setAttribute("type","password");
    passlogin.setAttribute("placeholder","Enter Your password");
    passlogin.setAttribute("id","pass-login");
    passlogin.setAttribute("required","required");

    var btnlogin = document.createElement("button");
    btnlogin.setAttribute("type","submit");
    btnlogin.setAttribute("id","loginbtn");
    btnlogin.innerHTML = 'LOGIN';


    mainLoginContainer.appendChild(center);
    center.appendChild(inputform);
    inputform.appendChild(inputEmail);
    inputform.appendChild(emailnotice);
    createBr(2, inputform);
    inputform.appendChild(inputmobile);
    inputform.appendChild(mobilenotice);
     createBr(2, inputform);
    inputform.appendChild(inputname);
    createBr(2, inputform);
    inputform.appendChild(inputpass);
    inputform.appendChild(passwordnotice);
     createBr(3, inputform);
     inputform.appendChild(loginbtn);
     mainLoginContainer.appendChild(loginheader);
      mainLoginContainer.appendChild(loginfrm);
      loginfrm.appendChild(emaillogin );
      createBr(2, loginfrm);
      loginfrm.appendChild(passlogin);
      createBr(3, loginfrm);
      loginfrm.appendChild(btnlogin);

      document.getElementById("inputemail").focus();

  }


  function createBr(number, id) {

    for(let i=0;i<number;i++) {
        id.appendChild( document.createElement('br'));
    }
}

window.onload = function() {
    this.createliment();
    load();
}


//start form validation

function load(){
var signup_email = document.getElementById("inputemail");
var email_notice = document.getElementById("emailnotice");
var signup_mobile = document.getElementById("inputmobile");
var mobile_notice = document.getElementById("mobilenotice");
var signup_name = document.getElementById("inputname");
var signup_pass = document.getElementById("inputpass");
var pass_notice = document.getElementById("passwordnotice");
var signup_btn = document.getElementById("signupbtn");


function form_val(){
  signup_email.oninput = function(){
     if(signup_email.value.match('@gmail.com') || signup_email.value.match('@yahoomail.com'))
  {
     email_notice.style.display = "none";
     signup_mobile.removeAttribute("disabled");
    signup_mobile.oninput = function(){
            if(signup_mobile.value.length ==10)
                  {
                    signup_name.removeAttribute("disabled");
                    mobile_notice.style.display = "none";
                   
                    if(signup_name.value != " ")
                    {
                          signup_pass.removeAttribute("disabled");
                          signup_pass.oninput = function(){
                          pass_notice.style.display = "block";
                          var upper = /[A-Z]/g;
                          var lower = /[a-z]/g;
                          var num = /[0-9]/g;
                          var alpha = /[~|`|!|@|#|$|%|^|&|*|(|)|_|-|=|=]/g;
                          var check_upper = signup_pass.value.charAt(0).match(upper) ? signup_pass.value : alert("First letter should be capital");
                          var check_lower = check_upper.match(lower) ? check_upper : alert("use atleast one small number");
                          var check_number = check_lower.match(num) ? check_lower : alert("use atleast one number");
                          var check_alpha = check_number.match(alpha) ? check_number : alert("use atleast one alpha numaric number");
                          if(check_alpha.length > 6)
                          {
                              signup_btn.disabled=false;
                              signup_btn.style.cursor = "pointer";
                              signup_btn.onclick = function()
                              {
                                  var username = signup_email.value;
                                  var input = {email:username,mobile:signup_mobile.value,name:signup_name.value,password:signup_pass.value};
                                  var input_string = JSON.stringify(input);
                                  localStorage.setItem(username,input_string);
                                  //alert(localStorage.getItem(username));
                              }
                            
                          }
                        }
                      }
                  }
            else{
                    mobile_notice.style.display = "block";
                     mobile_notice.style.color = "red";
                     mobile_notice.innerHTML = "please enter a valid number!"; 
                }
                }
  }
  else{
          email_notice.style.display = "block";
          email_notice.style.color = "red";
          email_notice.innerHTML = "please enter a valid email!";
      }

  }
 
}
form_val()


    //start login coding from session storage

    var email_login = document.getElementById("email-login");
    var pass_login = document.getElementById("pass-login");
    var login_btn = document.getElementById("loginbtn");
    document.getElementById("loginfrm").onsubmit = function(e){
      e.preventDefault;
      var login_name = email_login.value;
      var input = {email:login_name,password:pass_login.value};
      var input_string = JSON.stringify(input);

      sessionStorage.setItem(login_name,input_string);

      var session_data = sessionStorage.getItem(email_login.value);
      var user_detail = JSON.parse(session_data);
      if(localStorage.getItem(user_detail.email) != null)
      {
         var final_password = localStorage.getItem(email_login.value);
            var extract = JSON.parse(final_password);

            if(extract.password == user_detail.password)
            {
              
                location.assign("add-product.html");
                sessionStorage.setItem('user_mail',login_name);
                return false;

            }

            else{
              alert("password not match");
              }
  
      }

      else{
        alert("user not found");
      }
      
    }

}
