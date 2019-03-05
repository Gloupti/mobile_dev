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
  var notComplete = $('#notComplete');
   //disabling the form
  $('document').ready(loadFct);
  
  function loadFct(){
      notComplete.hide();
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
      
      if (username.val() == ''){
          username.css({"border":"1px solid red"});
          notComplete.show();
      }
      if(usermail.val() == ''){
          usermail.css("border","1px solid red");
          notComplete.show();
      }
      
      //for password

      
      if (userpwd.val() == ''){
          userpwd.css("border","1px solid red");
          notComplete.show();
      }
      if (confirm.val() == ''){
          $('#confirmPassword').css("border","1px solid red");
          notComplete.show();
      }
      
  }

  /*==================================================
DOG'S PROFILE
====================================================*/