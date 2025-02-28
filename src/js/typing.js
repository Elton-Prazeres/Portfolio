const texts = ["Elton Prazeres", "Desenvolvedor Web Front-End Júnior"];
        let textIndex = 0;
        let charIndex = 0;

        function typeEffect() {
            if (charIndex < texts[textIndex].length) {
                document.getElementById("typing").textContent += texts[textIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeEffect, 150);
            } else {
                setTimeout(() => {
                    document.getElementById("typing").textContent = "";
                    charIndex = 0;
                    textIndex = (textIndex + 1) % texts.length;
                    typeEffect();
                }, 5000);
            }
        }
        document.getElementById("typing").textContent = "";
        typeEffect();