var webmaps =
[
["Touch Terrain", "https://touchterrain.geol.iastate.edu/", "A tool to extract DEM's for 3D printing."],
["Cesium", "https://cesium.com/", "A application to integrate tilesets into projects."]
];

function welcome()
{
let a = "Please enter your name.";
let b = "Type your name here.";
// A prompt box is used to prompt users to input a value before entering a page.
user_name = window.prompt(a, b);
message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"
return message
}
document.write(welcome());

function webmap_table()
{
  document.write("<table width=100%>");
  for (var row=0; row < webmaps.length; row++)
  {
    document.write("<tr>");
    for (var column=0; column < webmaps[0].length; column++)
  {
    document.write("<td>" + webmaps[row][column] + "</td>");
  }
  document.write("</tr>");
  }
  document.write("</table>");
  return "";
}


//document.write(message);

//let user_name = window.prompt("Please enter your name", "Type your username here");
//document.getElementById("greeting").textContent = "Hello, welcome " + user_name + "!";

/*
arr = ["Mael","Eric","Randall","James"];
for (var i=0; i < arr.length; i++)
{
document.writeln(arr[i],"<br>");
}
*/

//document.write("Where is my JS code?");
//window.alert(5 + 6);
//window.alert('5 + 6');
//document.write('<h1>A heading</h1>');
//document.write('<p>A sentence.</p>');
//const x = "web";
//const y = "mapping";
//const out = x + y;
//document.write(out);
// A prompt box is used to prompt users to input a value before entering a page.
//user_name = window.prompt("Please enter your name", "Type your name here");
//document.write(user_name);
//a = 22;
//const b = 33;
//document.writeln(a + b);
//document.writeln("<br>");
//document.writeln(a += b);
//document.writeln("<br>");
//document.writeln(a += b);
/*document.writeln("<button onclick='condition()'>Conditional Test</button>");
function condition()
{
x = confirm("Are you sure you want to proceed?");
if(x)
{
document.writeln("You chose Okay!");
}
else
{
document.writeln("You chose Cancel!");
}
}
*/
