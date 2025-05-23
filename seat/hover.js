function hovering(priceSection, illustrationSection, trueFalse) {
    let vip = trueFalse

    illustrationSection.addEventListener("mouseenter", function() {
        priceSection.style.backgroundColor = "rgba(0, 121, 190, 0.5)";
    });
    
    illustrationSection.addEventListener("mouseleave", function() {
        priceSection.style.backgroundColor = "";
    });

    priceSection.addEventListener("mouseenter", function() {
        if (vip === true) {
            illustrationSection.style.backgroundColor = "rgb(255, 255, 255)"; 
        } else {
            illustrationSection.style.backgroundColor = "rgb(0, 128, 202)";
        }
    });
    
    priceSection.addEventListener("mouseleave", function() {
        illustrationSection.style.backgroundColor = "";
    });
}

hovering(document.getElementById("sec1-price"), document.querySelector(".section1"), false);
hovering(document.getElementById("sec2-price"), document.querySelector(".section2"), false);
hovering(document.getElementById("sec3-price"), document.querySelector(".section3"), false);
hovering(document.getElementById("sec4-price"), document.querySelector(".vip"), true);