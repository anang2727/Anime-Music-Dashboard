        const toggleButtons = document.querySelectorAll(".toggleButton");
        const music = document.querySelectorAll("#music");

        toggleButtons.forEach((button) => {
        const audioId = button.getAttribute("data-audio");
        const audio = document.getElementById(audioId);
        let isPlaying = false;

        button.addEventListener("click", () => {
            if (!isPlaying) {
            audio.play();
            button.innerHTML = '<i class="fas fa-pause"></i>';
            } else {
            audio.pause();
            button.innerHTML = '<i class="fas fa-play"></i>';
            }
            isPlaying = !isPlaying;
        });
        });

        // Heart
        const heartIcons = document.querySelectorAll(".fa-heart");

        heartIcons.forEach((heartIcon) => {
        heartIcon.addEventListener("click", function () {
            heartIcon.classList.toggle("text-red-500");
            heartIcon.classList.toggle("fa-solid");
        });
        });

        // Elipsis
        const ellipsisIcons = document.querySelectorAll("#ellipsisIcon");
        const downloadInfos = document.querySelectorAll("#downloadInfo");

        ellipsisIcons.forEach((ellipsisIcon, index) => {
        ellipsisIcon.addEventListener("click", function () {
            downloadInfos[index].classList.toggle("visible");
        });
        });

        AOS.init({
        // Opsi AOS
        });
