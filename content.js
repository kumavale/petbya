
window.addEventListener('keydown', function(e) {
    const key_Enter = 13;

    if(e.keyCode == key_Enter) {
        let ad_elem = [
            // Telop-style Ads
            document.getElementsByClassName("ytp-ad-overlay-close-container")[0],
            // Ads that can be skipped
            document.getElementsByClassName("ytp-ad-skip-button-container")[0],
        ];
        ad_elem.forEach(element => {
            if (element) {
                element.click();
            }
        });

        // Ads that cannot be skipped
        let v_elem = document.getElementsByClassName("html5-main-video")[0];
        if (v_elem) {
            if (document.getElementsByClassName("ytp-ad-player-overlay-instream-info")[0]) {
                v_elem.currentTime = 99999;
            }
        }
    }
});

