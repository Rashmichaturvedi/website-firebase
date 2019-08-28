
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
database.ref ('users/').on('values',getData,errData);
function getData(data){
    var score=data.val();
    var keys=object.keys(score);
    for(var i=0;i<keys.length;i++){
        var k=keys[i];
        var frname=users[k].frname;
        var mrname=users[k].mrname;
        var lrname=users[k].lrname;
        var pswrd=users[k].pswrd;
        var li=CreateElement('li',frname+':'+mrname+':'+lrname+':'+pswrd);
        document.getElementById('userlist').innerText=li;
    }
}
function errData(data){
    console.log("error");
}
/*database.ref('users/').once('value',function(snapshot)
{   snapshot.forEach(function(childSnapshot) {
    var userdata=childSnapshot.val();
     var userkey=childSnapshot.key;
     for(let key in users){
        htmldata +='frname'+userkey+":"+userdata;

     }
});


 document.getElementById('scorelist').innerText=htmldata;
    });*/


