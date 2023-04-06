// アコーディオンをクリックしたときの動作
const title = document.getElementsByClassName("title");
for(let i = 0; i < title.length; i++ ) {
    title[i].onclick = function() {
        let box = this.nextElementSibling;
        box.classList.toggle("open");
        if (this.classList.contains("close")) {
            this.classList.remove("close");
            box.style.display = "none";
        } else {
            this.classList.add("close");
            box.style.display = "block";
        }
    };
}