var myNodelist = document.getElementsByTagName('li');
for(let i = 0; i < myNodelist.length; i++) {
    var span = document.createElement('SPAN');
    var txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName('close');
for(let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = 'none';
    }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if(ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false)

function newElem() {
    var li = document.createElement('li');
    var inputValue = document.getElementById('myInput').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("you must write something!");
    } else {
        document.getElementById("myUl").appendChild(li);
    }

document.getElementById('myInput').value = '';

var span = document.createElement('SPAN');
var txt = document.createTextNode("\u00D7");
span.className = 'close';
span.appendChild(txt);
li.appendChild(span);

for( let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = 'none';
    }
}
}

console.log('H1!!!!');

