// アコーディオンをクリックしたときの動作
document.addEventListener("DOMContentLoaded", () => {
    const titles = document.querySelectorAll(".title");
    
    titles.forEach(title => {
        title.addEventListener("click", () => {
            const box = title.nextElementSibling;
            
            // 他のアコーディオンが開いていれば閉じる
            const openBoxes = document.querySelectorAll(".box.open");
            openBoxes.forEach(openBox => {
                if (openBox !== box) {
                    openBox.classList.remove("open");
                    openBox.previousElementSibling.classList.remove("close");
                }
            });
            
            // 現在のアコーディオンの開閉
            title.classList.toggle("close");
            box.classList.toggle("open");
        });
    });
});