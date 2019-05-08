var myHeading=document.querySelector('h1');
myHeading.textContent='I love you ❤';


var Elonchan = 'kawai';
if(Elonchan === 'kawai')
{
	alert('Yay, I love kawai Elon-chan!');
}
else
{
	alert('Elon-chan is always kawai ^.^');
}
 var num1,num2;
function multiply(num1,num2)
{
	var result=num1*num2;
	return result;
}
/*
document.querySelector('img').onclick=function()
{
	alert('Stop poking me');
}
*/
var myImage = document.querySelector('img');
var licz=4;
var myParagraph=document.querySelector('p');
var myH3=document.querySelector('h3');
myImage.onclick=function()
{
	var mySRC = myImage.getAttribute('src');
	myImage.setAttribute ('src','Images/image'+licz+'.jpg');
	licz--;
	if(licz===0)
	{
		licz=4;
	}
		alert('Do you want be my friend ?');
	myHeading.textContent='I want to be komi-san friend';
	myParagraph.textContent='Cechy za którą ją kochamy';
	myH3.textContent='Wspaniała przyjaciółka';
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName()
{
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name',myName);
	myHeading.textContent = 'Elon-chan is kawai, ' + myName;
}

if(!localStorage.getItem('name'))
{
	setUserName();
}
else
{
	var storedName=localStorage.getItem('name');
	myHeading.textContent = ' Elon-chan is kawai, '+storedName;
}

myButton.onclick=function()
{
	setUserName();
}
