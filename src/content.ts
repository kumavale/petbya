
window.addEventListener('keydown', function(e) {
    const key_Enter = 13;

    if(e.keyCode == key_Enter) {
        let ad_elem: HTMLElement[] = [
            // Telop-style Ads
            document.getElementsByClassName("ytp-ad-overlay-close-container")[0] as HTMLElement,
            // Ads that can be skipped
            document.getElementsByClassName("ytp-ad-skip-button-container")[0] as HTMLElement,
        ];
        ad_elem.forEach(element => {
            if (element) {
                element.click();
            }
        });

        // Ads that cannot be skipped
        let v_elem: HTMLVideoElement = document.getElementsByClassName("html5-main-video")[0] as HTMLVideoElement;
        if (v_elem) {
            if (document.getElementsByClassName("ytp-ad-text")[0]) {
                v_elem.currentTime = 99999;
            }
        }
    }
});

