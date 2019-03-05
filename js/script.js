/*==================================================
OWNER'S ACCOUNT
====================================================*/

var incomplete = $('p');

var confirm = $('#confirmation');

var check = $('#validateEdit');

check.css({"background-color":"#81bc4a","color":"white"}) ;

var username = $('#userAccName');
var usermail = $('#userAccEmail');
var userpwd = $('#userAccPassword');
var confirmPwd = $('#confirmPassword');
var notComplete = $('#notComplete');
//disabling the form
$('document').ready(loadFct);

function loadFct(){
   // notComplete.hide();
    confirm.hide();
    check.hide();
}

//to edit the profile
$('#btnEdit').click(editProfile);

function editProfile(){
    username.textinput('enable');
    usermail.textinput('enable');
    userpwd.textinput('enable');
    check.show();
    confirm.show();
    
    
}
//to confirm the changes to your profile
check.click(btnCheck);

function btnCheck(){


var inputs = [username, usermail, userpwd, confirmPwd ];

if ($('.inputAcc').val() != "")
{
    
    if (userpwd.val() == confirmPwd.val())
    {
        alert('completed form'); //success // Davide you can call your fire base function here instead of the alert
    }                                      //if there is a problem with the var names you can change them
    else
    {
        confirmPwd.css("border","1px solid red");
        $('#notComplete p').text('the confirmed password is different');
    }
}
else
{
    for (var i = 0;i<=3;i++)
    {
        if (inputs[i].val() == "")
        {
            inputs[i].css("border","1px solid red");
            $('#notComplete p').text('you input is not complete');
        }
    }
}








   /* if ($('.inputAcc').val() != ""){
        
        if(userpwd.val()!=confirm.val()){
            if (userpwd.val() == ''){
                userpwd.css("border","1px solid red");
                notComplete.show();
            }
            if (confirm.val() == ''){
                confirmPwd.css("border","1px solid red");
                notComplete.show();
            }
        }else{
            alert('your account information have been modified successfully');
        }        
    }else{
        if (username.val() == ''){
            username.css("border","1px solid red");
            notComplete.show();
        }
        if(usermail.val() == ''){
            usermail.css("border","1px solid red");
            notComplete.show();
        }
        
    }   */
}

/*==================================================
DOG'S PROFILE
====================================================*/