document.addEventListener("DOMContentLoaded", function () {
    // Handle event klik pada setiap tautan navigasi
    const navLinks = document.querySelectorAll(".nav-link");
    const animation = document.querySelector(".animation");

    navLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            // Mencegah tautan mengarahkan ke halaman lain
            event.preventDefault();

            // Menghapus kelas 'active' dari semua tautan
            navLinks.forEach((link) => {
                link.classList.remove("active");
            });

            // Menambahkan kelas 'active' ke tautan yang diklik
            link.classList.add("active");

            // Mengatur posisi animasi berdasarkan tautan yang diklik
            const target = link.getAttribute("data-target");

            if (target === "all") {
                animation.style.width = "80px";
                animation.style.left = "5px";
            } else if (target === "about") {
                animation.style.width = "115px";
                animation.style.left = "80px";
            } else if (target === "social") {
                animation.style.width = "95px";
                animation.style.left = "200px";
            }
        });
    });
});
