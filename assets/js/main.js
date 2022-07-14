// 1

let x = 'It ';
let y = 'works !<br>';

let z = x + y;
document.write(z);
document.write('<br>');

// 2 

let n = x + " " + y;
document.write(n);
document.write('<br>');

x = x + 'works again '; //works instead of world
document.write(x);
document.write('<br>');

// 3

let meinString = 'Ich bin erster';
let str = " Ich komme auf Platz zwei";
meinString = meinString + str;
document.write(meinString);