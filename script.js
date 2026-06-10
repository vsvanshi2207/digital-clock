function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  //const ampm = hours>=12?'PM':'AM';

  if(hours>=12){
  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds} PM`;
} else {
  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds} AM`;
}
}

// Update every second
 setInterval(updateClock, 1000);
updateClock();

let darktheme = true;

function toggleTheme(){
  darktheme = !darktheme;
  if(!darktheme){
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
  }else{
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
  }
}

toggleTheme(); // Set initial theme

document.getElementById('theme-toggle').addEventListener('click', ()=>{
  //darktheme = !darktheme;
  toggleTheme();
});

