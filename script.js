document.addEventListener("DOMContentLoaded", function () { // تحسينات القوائم في الهيدر let navLinks = document.querySelectorAll("nav ul li a"); navLinks.forEach(link => { link.addEventListener("mouseover", function () { this.style.color = "#f1c40f"; }); link.addEventListener("mouseout", function () { this.style.color = "white"; }); });

// تأثير تمرير الصفحة لجعل الهيدر أكثر شفافية عند التمرير
let header = document.querySelector("header");
window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        header.style.background = "rgba(192, 57, 43, 0.9)";
    } else {
        header.style.background = "#c0392b";
    }
});

// تحسين تأثير الصور عند المرور عليها
let images = document.querySelectorAll(".welcome-box img, .about-container img, .services-box img");
images.forEach(img => {
    img.addEventListener("mouseover", function () {
        this.style.transform = "scale(1.1)";
        this.style.transition = "transform 0.3s ease";
    });
    img.addEventListener("mouseout", function () {
        this.style.transform = "scale(1)";
    });
});

// زر الترجمة التلقائي
let translateBtn = document.querySelector(".translate-button");
if (translateBtn) {
    translateBtn.addEventListener("click", function () {
        let select = document.querySelector(".goog-te-combo");
        if (select) {
            select.value = 'ar';
            select.dispatchEvent(new Event('change'));
        }
    });
}

// تحكم في زر إرسال الرسائل
let messageForm = document.querySelector("form");
if (messageForm) {
    messageForm.addEventListener("submit", function (e) {
        e.preventDefault();
        let messageBox = document.querySelector(".message-box");
        if (messageBox.value.trim() === "") {
            alert("Please enter a message before sending.");
        } else {
            alert("Your message has been sent successfully!");
            messageBox.value = "";
        }
    });
}

});

