document.addEventListener('DOMContentLoaded', function () {
    const animatedName = document.getElementById('animated-name');
    const nameText = 'Martha T. Acosta Ozorio';
    let index = 0;

    function animateName() {
        if (index < nameText.length) {
            animatedName.innerHTML += nameText.charAt(index);
            index++;
            setTimeout(animateName, 100);
        }
    }

    animateName();
});

