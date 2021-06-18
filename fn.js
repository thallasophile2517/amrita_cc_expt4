
const SId= document.getElementById('SId');
const fname= document.getElementById('fname');
const lname= document.getElementById('lname');
const date= document.getElementById('date');
const gender= document.getElementById('gender');
const no= document.getElementById('no');
const email= document.getElementById('email');
const textarea= document.getElementById('textarea');
const Countryname= document.getElementById('Countryname');
const Sdate= document.getElementById('Sdate');
const sbtn= document.getElementById('sbtn');

var database= firebase.database();

document.getElementById("sbtn").addEventListener("click",function(){
    document.getElementsByClassName("popup")[0].classList.add("active");
  });
   

sbtn.addEventListener('click', (e)=>{
    e.preventDefault();

    database.ref('/STUDENT_DETAILS/'+ SId.value).set({
        First_Name: fname.value,
        Last_Name: lname.value,
        Date: date.value,
        Gender: gender.value,
        Phone_Number: no.value,
        Email: email.value,
        Address: textarea.value,
        Nationality: Countryname.value,
        Submission_Date: Sdate.value

    });
});

document.getElementById("dismiss-popup-btn").addEventListener("click",function(){
    document.getElementsByClassName("popup")[0].classList.remove("active");
  });