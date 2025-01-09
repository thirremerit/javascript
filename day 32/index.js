//var input = document.getElementById('index.js')
//var button = document.getElementById("btn_id")
//var h1 = document.getElementById("text_id")

var text ='the best school is digital school';
var result = text.search('digital');
document.getElementById('result1').innerHTML =result;

var text ='the best school is digital school';
var result1 = text.replace('digital school''another school');
document.getElementById('result1').innerHTML =result;

var text = 'digital scholl is in top 10 besr school of the world';
var regex = [0-9]/g