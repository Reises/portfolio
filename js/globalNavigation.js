const openbtn = document.getElementsByClassName("openbtn1");
const nav = document.getElementById("g-nav");
const link = nav.querySelectorAll("a");   // navの中のa要素を取得

openbtn[0].onclick = function() {
    this.classList.toggle("active");
    nav.classList.toggle("panelactive")
};

for (let i = 0; i < link.length; i++) {
    link[i].onclick = function() {
        openbtn[0].classList.remove("active");
        nav.classList.remove("panelactive");
    };    
}