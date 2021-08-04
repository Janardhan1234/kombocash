import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.cross').click(function(){
      // if()
       $('#sign-in-form,#sign_in,#forgot-password,#forgot-password-email').hide();
    
     // check paragraph once toggle effect is completed
     // if($("#sign_in").is(":visible")){
         // $("#sign_in").hide();
     // }
       

})
       $('#sign-in-button').click(function(){
          // $('#sign_in').toggle();
       $('#sign-in-form').show();
       $('#sign_in').fadeIn();


})
       

        $('#forgot-password-button').click(function(){
$('#forgot-password-email').show("fast");
$('#sign-in-form').hide();
// $('#sign-in-form').animate({ 'left': "-700px" }, 'slow');

})

           $('#forgot-password-email-button').click(function(){
$('#forgot-password').show("fast");
$('#forgot-password-email').hide();
// $('#forgot-password-email').animate({ 'left': "-700px" }, 'slow');

}) 

$(".toggle-password").click(function() {

$(this).toggleClass("fa-eye fa-eye-slash");
var input = $($(this).attr("toggle"));
if (input.attr("type") == "password") {
input.attr("type", "text");
} else {
input.attr("type", "password");
}
});


    

}
  

}
