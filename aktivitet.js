document.addEventListener('DOMContentLoaded', () => {
    const karuselCnt = document.querySelector('.karuselcnt');
    const vidCnts = document.querySelectorAll('.vidCnt'); // Select all elements with the .vidCnt class

    function updateVidCntSizes() {
        if (karuselCnt) {
            // Get the dimensions of .karuselcnt
            const width = karuselCnt.clientWidth;
            const height = karuselCnt.clientHeight;

            // Apply the dimensions to all .vidCnt elements
            vidCnts.forEach(vidCnt => {
                vidCnt.style.width = `${width}px`;
                vidCnt.style.height = `${height}px`;
            });
        }
    }

    // Initial size adjustment
    updateVidCntSizes();

    // Update the size when the window is resized
    window.addEventListener('resize', updateVidCntSizes);
});
