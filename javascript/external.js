var webmaps =
[
["Touch Terrain", "https://touchterrain.geol.iastate.edu/", "A tool to exact DEM's for 3D printing. DEM can be pulled from a web map and the DEM can be downloaded. This file can then be input into a slicer for printing."],
["Cesium", "https://cesium.com/", "A toolset for integrating tileset into projects for 3d visualization. This can be used for visualization purposes to demonstrate or suppliment data."]
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
//
function CalculateArea()
{
//let a = "Input length and width of a rectangle:";
let lengthInput = document.getElementById("length").value;
let widthInput = document.getElementById("width").value;
let result = document.getElementById("results");
let length = parseFloat(lengthInput);
let width = parseFloat(widthInput);

if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
    result.innerHTML = "Please enter numbers for length and width.";
    return;
    }
let area = length * width;
      result.innerHTML = "The area of the rectangle is: " + area;
  }
//user_name = window.prompt(a, b, c);

//document.write(welcome());
//
function webmap_table()
{
  document.write("<table width=100% style='table-layout:fixed;border-collapse: collapse;'>");

  for (var row=0; row < webmaps.length; row++)
  {
  var name = webmaps [row][0];
  var url = webmaps [row][1];
  var text = webmaps [row][2];

    if (row % 2 == 0){

    document.write("<tr align='left' valign='top'>");
    //else {
    document.write("  <td style='width: 50%; padding-top: 15px; font-weight: bold;'>" + name + "</td>");
    document.write("  <td style='width: 50%; padding-top: 15px; word-wrap: break-word;'><a href='" + url + "' target='_blank'>" + url + "</a></td>");
    document.write("<tr align='left'>");
    document.write("  <td colspan='2' style='padding-bottom: 15px; word-wrap: break-word;'>" + text + "</td>");
    document.write("</tr>");
  }
    else
    {
      document.write("<tr align='left' valign='top'>");
      //else {
      document.write("  <td style='width: 50%; padding-top: 15px; font-weight: bold;'>" + name + "</td>");
      document.write("  <td style='width: 50%; padding-top: 15px; word-wrap: break-word;'><a href='" + url + "' target='_blank'>" + url + "</a></td>");
      document.write("<tr align='left'>");
      document.write("  <td colspan='2' style='padding-bottom: 15px; word-wrap: break-word;'>" + text + "</td>");
      document.write("</tr>");
      }

    //for (var column=0; column < webmaps[0].length; column++)
//  {
  //  document.write("<td>" + webmaps[row][column] + "</td>");
  //}
  //document.write("</tr>");
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
