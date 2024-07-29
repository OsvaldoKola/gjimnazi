function adjustBookHeight() {
    var books = document.querySelectorAll('.book');
    var ratioWidth = 649;
    var ratioHeight = 875;

    books.forEach(function(book) {
        var width = book.offsetWidth;
        var height = (width / ratioWidth) * ratioHeight; // Calculate height based on 1080:1920 (9:16) ratio

        // Set the height of the .book element
        book.style.height = height + 'px';
    });
}

// Call the function when the window is resized (optional)
window.addEventListener('resize', adjustBookHeight);

// Call the function once when the page loads
window.addEventListener('load', adjustBookHeight);
