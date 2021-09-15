var firebaseConfig = {
      apiKey: "AIzaSyBuaqbxvkg34YGFRM6zIDVuZU6d9LGsndw",
      authDomain: "kwitter-a3e3e.firebaseapp.com",
      databaseURL: "https://kwitter-a3e3e-default-rtdb.firebaseio.com",
      projectId: "kwitter-a3e3e",
      storageBucket: "kwitter-a3e3e.appspot.com",
      messagingSenderId: "1088954904709",
      appId: "1:1088954904709:web:9da65354beed8a066239ec",
      measurementId: "G-S1L87ZWX96"
    };
    
    // Initialize Firebase
   initializeApp(firebaseConfig);
  //ADD YOUR FIREBASE LINKS
  function adduser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database()ref("/").child(user_name).update({
      purpose : "adding user"
      })
  
      function addroom()
     {
       room_name = document.getElementById("room_name").value;
  
       firebase.database().ref("/").child(room_name).update({
       });
  
       localStorage.setItem("room_name", room_name);
  
          window.location = "kwitter_page.html";
  
     }
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
           console.log("room name - " + Room_names);
                  row = "<div class='room_name'id="+Room_names+"onclick='redirecttoroomname (this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerhtml += row;           
      //End code 
      });});}
getData();

function redirecttroomname(name)
{
      console.log(name);
            localstorage.setItem("room_name", name);
                        window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
              localStorage.removeItem("room_name");
                    window.location = "kwitter.html";
}