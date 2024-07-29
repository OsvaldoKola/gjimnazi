document.addEventListener('DOMContentLoaded', () => {
    const postsPerPage = 9;
    const posts = Array.from(document.querySelectorAll('.post'));
    const totalPosts = posts.length;
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    
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
        document.getElementById('page-info').textContent = `Page ${page}`;
    }

    function goToPage(page) {
        if (page < 1 || page > totalPages) return;
        currentPage = page;
        showPage(currentPage);
    }

    document.getElementById('prev').addEventListener('click', () => {
        if (currentPage > 1) goToPage(currentPage - 1);
    });

    document.getElementById('next').addEventListener('click', () => {
        if (currentPage < totalPages) goToPage(currentPage + 1);
    });

    // Initialize the first page
    showPage(currentPage);
});
