        // Play-Pause Music 
        const toggleButtons = document.querySelectorAll(".toggleButton");
        const music = document.querySelectorAll("#music");
        const musicCard = document.querySelectorAll("#musicCard");
        
        let activeAudio = null;
        let activeButton = null;
        
        musicCard.forEach((card) => {
            const audioId = card.querySelector("audio").getAttribute("id");
            const audio = document.getElementById(audioId);
            const button = card.querySelector(".toggleButton");
        
            card.addEventListener("click", () => {
                if (activeAudio && activeAudio !== audio) {
                    activeAudio.pause();
                    activeButton.innerHTML = '<i class="fas fa-play"></i>';
                }
            
                if (!audio.paused) {
                    audio.pause();
                    button.innerHTML = '<i class="fas fa-play"></i>';
                } else {
                    audio.play();
                    button.innerHTML = '<i class="fas fa-pause"></i>';
                    activeAudio = audio;
                    activeButton = button;
                }
            });
        });

        toggleButtons.forEach((button) => {
            const audioId = button.getAttribute("data-audio");
            const audio = document.getElementById(audioId);
        
            button.addEventListener("click", () => {
                if (activeAudio && activeAudio !== audio) {
                    activeAudio.pause();
                    activeButton.innerHTML = '<i class="fas fa-play"></i>';
                }
            
                if (!audio.paused) {
                    audio.pause();
                    button.innerHTML = '<i class="fas fa-play"></i>';
                } else {
                    audio.play();
                    button.innerHTML = '<i class="fas fa-pause"></i>';
                    activeAudio = audio;
                    activeButton = button;
                }
            });
        });


        // Heart
        const heartIcons = document.querySelectorAll(".fa-heart");

        heartIcons.forEach((heartIcon) => {
            heartIcon.addEventListener("click", function (event) {
                // Cegah event bubbling agar tidak memengaruhi pemutaran musik
                event.stopPropagation();

                heartIcon.classList.toggle("text-red-500");
                heartIcon.classList.toggle("fa-solid");
            });
        });


        // Elipsis
        const ellipsisIcons = document.querySelectorAll("#ellipsisIcon");
        const downloadInfos = document.querySelectorAll("#downloadInfo");
        
        ellipsisIcons.forEach((ellipsisIcon, index) => {
            ellipsisIcon.addEventListener("click", function () {
                // Toggle class 'visible' untuk menampilkan atau menyembunyikan teks "Download"
                downloadInfos[index].classList.toggle("visible");
            });
        });
        
        AOS.init({
        // Opsi AOS
        });

        // Download Music 
        // Ambil semua elemen tombol unduh
        const downloadButtons = document.querySelectorAll(".fa-download");

        // Fungsi untuk menambahkan event listener ke setiap tombol unduh
        downloadButtons.forEach((downloadButton, index) => {
            downloadButton.addEventListener("click", (event) => {
                event.stopPropagation(); // Mencegah event klik tombol unduh merambat ke elemen musik

                const audioId = `audio${index + 1}`;
                const audio = document.getElementById(audioId);

                // Ambil data nama file dari atribut data
                const filename = downloadButton.getAttribute("data-filename");

                // Buat elemen tautan untuk mengunduh
                const anchor = document.createElement('a');
                anchor.href = audio.src;
                anchor.download = filename; // Gunakan nama file yang diambil dari atribut data
                anchor.style.display = 'none';

                // Tambahkan elemen tautan ke dalam dokumen dan klik tautannya
                document.body.appendChild(anchor);
                anchor.click();

                // Hapus elemen tautan setelah diunduh
                document.body.removeChild(anchor);
            });
        });


