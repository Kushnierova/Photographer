document.querySelectorAll('.more-info').forEach(button => {
    button.addEventListener('click', function () {
        const details = this.nextElementSibling;
        if (details.classList.contains('hidden')) {
            details.classList.remove('hidden');
            this.textContent = 'Сховати';
        } else {
            details.classList.add('hidden');
            this.textContent = 'Дізнатись більше';
        }
    });
});

