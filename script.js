let hr = document.getElementById('hour');
let mn = document.getElementById('min');
let sc = document.getElementById('sec');

function Time() {
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    
    let Hrotation = 30*hh + mm/2 ;
    let Mrotation = 6 * mm ;
    let Srotation = 6 * ss ;

    hr.style.transform = `rotate(${Hrotation}deg)`;
   mn.style.transform = `rotate(${Mrotation}deg)`;
   sc.style.transform = `rotate(${Srotation}deg)`;

}
setInterval(Time,1000);