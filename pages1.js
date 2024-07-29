document.addEventListener('DOMContentLoaded', () => {
    let postsPerPage = 3;
    const posts = Array.from(document.querySelectorAll('.post'));
    const totalPosts = posts.length;
    let totalPages = Math.ceil(totalPosts / postsPerPage);
    
    // Function to update postsPerPage based on screen width
    function updatePostsPerPage() {
        if (window.matchMedia("(max-width: 1200px)").matches) {
            postsPerPage = 4;
        } else {
            postsPerPage = 3;
        }
        totalPages = Math.ceil(totalPosts / postsPerPage);
        goToPage(1); // Reset to first page to adjust the view
    }

    // Sort posts in descending order based on class name
    posts.sort((a, b) => {
        const aNum = parseInt(a.className.match(/\d+/)[0]);
        const bNum = parseInt(b.className.match(/\d+/)[0]);
        return bNum - aNum;
    });

    let currentPage = 1;

    function showPage(page) {
        posts.forEach((post, index) => {
            const pageIndex = Math.floor(index / postsPerPage) + 1;
            post.style.display = pageIndex === page ? 'block' : 'none';
        });
        document.getElementById('page-info').textContent = `Faqe ${page}`;
    }

    function goToPage(page) {
        if (page < 1 || page > totalPages) return;
        currentPage = page;
        showPage(currentPage);
        window.scrollTo(0, 0); // Scroll to the top of the page
    }

    // Event listeners for pagination
    document.getElementById('prev').addEventListener('click', () => {
        if (currentPage > 1) goToPage(currentPage - 1);
    });

    document.getElementById('next').addEventListener('click', () => {
        if (currentPage < totalPages) goToPage(currentPage + 1);
    });

    // Initialize the page display
    updatePostsPerPage();
    showPage(currentPage);

    // Add an event listener to adjust posts per page on window resize
    window.addEventListener('resize', updatePostsPerPage);
});
