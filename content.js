
window.addEventListener('keydown', function(e) {
    const key_Enter = 13;

    if(e.keyCode == key_Enter) {
        let ad1 = document.getElementsByClassName("ytp-ad-overlay-close-container")[0];
        let ad2 = document.getElementsByClassName("ytp-ad-skip-button-container")[0];

        if (ad1) {
            ad1.click();
        }
        if (ad2) {
            ad2.click();
        }
    }
});

