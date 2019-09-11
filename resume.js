var database = firebase.database();

function writeUserData(){
    var name =document.getElementById('name').value
    var email =document.getElementById('email').value
    var msg =document.getElementById('msg').value
    var date =document.getElementById('date').value

    database.ref('resume/').push().set({
       name:name,
       email:email,
       msg:msg,
       date:date
    });

}
/*function ReadUserData(){
 var htmldata ='';
database.ref('users/').once('value',function(snapshot)
{   snapshot.forEach(function(childSnapshot) {
    var userdata=childSnapshot.val();
      htmldata += "<li>" + userdata.frname +' : '+ userdata.mrname +' :  '+userdata.lrname +' : '+userdata.pswrd+ "</li>";     
});
document.getElementById('userlist').innerHTML=htmldata;
});

}*/