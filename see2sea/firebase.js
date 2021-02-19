  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyB89FKXHFpARd7BeSD647KL67oE1rCeRcM",
    authDomain: "see2sea-dd6c7.firebaseapp.com",
    projectId: "see2sea-dd6c7",
    storageBucket: "see2sea-dd6c7.appspot.com",
    messagingSenderId: "134404891121",
    appId: "1:134404891121:web:b350aa1843864098d86450",
    measurementId: "G-2M385B44GB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var db = firebase.firestore();

document.getElementById("submit").addEventListener("click", function(){
var see = document.getElementById("message").value
if(document.getElementById("message").value==""){
	alert("You Must Submit Text")
}else{

  db.collection("ocean").add({
    bottle: see,
    date: new Date().toDateString()
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});




db.collection("ocean").get().then((querySnapshot) => {
	var breakaprt = []
    querySnapshot.forEach((doc) => {
        //console.log(`${doc.id} => ${doc.data()}`);
        var ocean = doc.data();
        var string = `${ocean.bottle}, ${ocean.date}`
        // do something with string
        //console.log(string)
        breakaprt.push(string)
        //console.log(array)
    });
var stringRand = Math.floor(Math.random() * breakaprt.length)
console.log(breakaprt[stringRand])	
document.getElementById("message").value= breakaprt[stringRand]
//var textChange = document.getElementById("shore");
//textChange.innerHTML = `<h4 id="shore"> ${breakaprt[stringRand]}</h4>`
var casted = document.getElementById("cast");
casted.innerHTML = `<h2 id="cast"> You've recived a bottle </h2>`
document.getElementById("submit").style.display = "none"
document.getElementById("clear").style.display = "inline-block"
});
};
})

document.getElementById("clear").addEventListener("click", function(){
	document.getElementById("message").value=""
	document.getElementById("submit").style.display =  "inline-block"
document.getElementById("clear").style.display = "none"
	
})