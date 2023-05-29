//creatign variable
var title1 = [""]
var title2 = [""]
var title3 = [""]
var title4 = [""]
var numOfBraclets = [""]
//var counter = 0
// function when submit is clicked
$("#submit1").on("click",function(){
   // reasighning variables
    title1 = ($("#name1").val());
    numOfBraclets = vel1
    //creatign new div
    var newDiv = document.createElement("div");
    // assighnign varibles to new div
    newDiv.textContent =  (
      title1 + " orederd " + numOfBraclets + " Name 1 Braclets. "
    );
    //document.getElementById("newDiv").innerHTML //= "<div>" + " "+ $("#subject").val() + " " + $("#name").val() + " " + $("#type").val() + " " + $("#time").val() + " minutes to finish. Due "  + $("#dueDay").val() + " "+ "</div>"
      //prining newDiv benith emptyDiv  
    emptyDiv.append(newDiv)
      //counter ++
      //Checking to make sure the correct varibles are going to be displayed
});
$("#submit2").on("click",function(){
  // reasighning variables
   title2 = ($("#name2").val());
   numOfBraclets = vel2
   //creatign new div
   var newDiv = document.createElement("div");
   // assighnign varibles to new div
   newDiv.textContent =  (
    title2 + " orederd " + numOfBraclets + " Name 2 Braclets. "   );
   //document.getElementById("newDiv").innerHTML //= "<div>" + " "+ $("#subject").val() + " " + $("#name").val() + " " + $("#type").val() + " " + $("#time").val() + " minutes to finish. Due "  + $("#dueDay").val() + " "+ "</div>"
     //prining newDiv benith emptyDiv  
   emptyDiv.append(newDiv)
     //counter ++
     //Checking to make sure the correct varibles are going to be displayed
})
$("#submit3").on("click",function(){
  // reasighning variables
   title3 = ($("#name3").val());
   numOfBraclets = vel3
   //creatign new div
   var newDiv = document.createElement("div");
   // assighnign varibles to new div
   newDiv.textContent =  (
     title3 + " orederd " + numOfBraclets + " Name 3 Braclets. "
   );
   //document.getElementById("newDiv").innerHTML //= "<div>" + " "+ $("#subject").val() + " " + $("#name").val() + " " + $("#type").val() + " " + $("#time").val() + " minutes to finish. Due "  + $("#dueDay").val() + " "+ "</div>"
     //prining newDiv benith emptyDiv  
   emptyDiv.append(newDiv)
     //counter ++
     //Checking to make sure the correct varibles are going to be displayed
});
$("#submit4").on("click",function(){
 // reasighning variables
  title4 = ($("#name4").val());
  numOfBraclets = vel4
  //creatign new div
  var newDiv = document.createElement("div");
  // assighnign varibles to new div
  newDiv.textContent =  (
   title4 + " orederd " + numOfBraclets + " Name 4 Braclets. "   );
  //document.getElementById("newDiv").innerHTML //= "<div>" + " "+ $("#subject").val() + " " + $("#name").val() + " " + $("#type").val() + " " + $("#time").val() + " minutes to finish. Due "  + $("#dueDay").val() + " "+ "</div>"
    //prining newDiv benith emptyDiv  
  emptyDiv.append(newDiv)
    //counter ++
    //Checking to make sure the correct varibles are going to be displayed
  name4 = 0
  vel4 = 0
})