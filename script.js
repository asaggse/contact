const form = document.querySelector("form"),
statusTxt = form.querySelector(".button-area span");

form.onsubmit = () =>{
   e.preventDefault();
   statusTxt.style.display = "block";

   let xhr = new XMLHttpRequest();
   xhr.open("POST", "message.php", true);
   xhr.onload = ()=>{

   }
   xhr.send();
}