// ========================================
//     Screen Navigation
// ========================================
function showPage(pageId) {
    const splashScreen = document.getElementById("splash-screen");
    const targetScreen = document.getElementById(`${pageId}-screen`);

    splashScreen.classList.add('splash-screen-side');

    setTimeout(() => {
        document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
        targetScreen.classList.remove('hidden');
        splashScreen.classList.add('splash-screen-side');

        const header = document.getElementById('header');
        header.classList.remove('hidden');
    }, 1000);
}

const splashBtn = document.querySelector('.splash-btn');
splashBtn.addEventListener('click' , function(){
    showPage('category');
    setTimeout(() => {
        showCategoryPage('glass')
    }, 1000);
})