// Menunggu dokumen selesai dimuat sebelum menjalankan skrip
document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.getElementById('cta-btn');
    const outputText = document.getElementById('output-text');

    let clickCount = 0;

    ctaButton.addEventListener('click', () => {
        clickCount++;
        outputText.textContent = `Terima kasih! Tombol telah diklik sebanyak ${clickCount} kali.`;
    });
});
        
