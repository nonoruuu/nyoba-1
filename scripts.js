document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Hindari pengiriman form

    // Menambahkan efek transisi
    document.body.classList.add('transition');
    setTimeout(function() {
        window.location.href = 'landing_page.html'; // Pindah ke halaman landing_page.html setelah efek transisi
    }, 500); // Waktu transisi dalam milidetik (500ms)
});
