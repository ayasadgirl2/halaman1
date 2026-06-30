function updateClock(){

const now = new Date();

document.getElementById("clock").innerHTML =
now.toLocaleDateString("id-ID")
+
" | " +
now.toLocaleTimeString("id-ID");

}

setInterval(updateClock,1000);
updateClock();

/* GANTI HALAMAN */

function showPage(pageId,el){

document.querySelectorAll(".page")
.forEach(page=>{
page.classList.remove("activePage");
});

document
.getElementById(pageId)
.classList.add("activePage");

document.querySelectorAll(".menu")
.forEach(menu=>{
menu.classList.remove("active");
});

el.classList.add("active");

/* Tutup menu otomatis di HP */

if(window.innerWidth <= 900){
closeMenu();
}

}

/* HAMBURGER MENU */

function toggleMenu(){

document.querySelector(".sidebar")
.classList.toggle("show");

document.querySelector(".menuOverlay")
.classList.toggle("show");

}

function closeMenu(){

document.querySelector(".sidebar")
.classList.remove("show");

document.querySelector(".menuOverlay")
.classList.remove("show");

}