
var database = firebase.database();

function writeUserData(){
    var frname =document.getElementById('fname').value
    var mrname =document.getElementById('mname').value
    var lrname =document.getElementById('lname').value
    var pswrd =document.getElementById('pwd').value

    database.ref('users/').push().set({
       frname:frname,
       mrname:mrname,
       lrname:lrname,
       pswrd:pswrd
    });

}
function ReadUserData(){
 var htmldata ='';
database.ref('users/').once('value',function(snapshot)
{   snapshot.forEach(function(childSnapshot) {
    var userdata=childSnapshot.val();
      htmldata += "<li>" + userdata.frname +' : '+ userdata.mrname +' :  '+userdata.lrname +' : '+userdata.pswrd+ "</li>";     
});
document.getElementById('userlist').innerHTML=htmldata;
});

}



