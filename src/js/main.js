// ========================================
//     داده‌های محصولات و دسته‌بندی‌ها
// ========================================
const categoriesData = {
    glass: {
        id: 'glass',
        name: 'لیوان',
        icon: 'src/assets/images/category/cat-1.png',
        products: [
            {
                id: 1,
                name: 'لیوان تکی طرح دار',
                image: 'src/assets/images/products/glass-1.jpg',
                description: 'لیوان دست‌ساز با طرح‌های سنتی ایرانی، مقاوم در برابر حرارت',
                material: 'آلومینیوم آنادایز شده',
                size: 'ارتفاع ۱۲ سانتی‌متر',
                price: '۲۵۰,۰۰۰ تومان'
            },
            {
                id: 2,
                name: 'ست ۶ عددی لیوان',
                image: 'src/assets/images/products/glass-2.jpg',
                description: 'ست کامل لیوان‌های مهمانی با طراحی مدرن و مینیمال',
                material: 'آلومینیوم درجه یک',
                size: 'ارتفاع ۱۰ سانتی‌متر',
                price: '۱,۲۰۰,۰۰۰ تومان'
            },
            {
                id: 3,
                name: 'لیوان دسته‌دار',
                image: 'src/assets/images/products/glass-3.jpg',
                description: 'لیوان دسته‌دار مناسب نوشیدنی‌های گرم، عایق حرارتی',
                material: 'آلومینیوم دوجداره',
                size: 'گنجایش ۳۵۰ میلی‌لیتر',
                price: '۳۸۰,۰۰۰ تومان'
            },
            {
                id: 4,
                name: 'لیوان فانتزی رنگی',
                image: 'src/assets/images/products/glass-4.jpg',
                description: 'لیوان‌های رنگی آنادایز شده با پوشش ضدخش',
                material: 'آلومینیوم رنگی',
                size: 'ارتفاع ۱۱ سانتی‌متر',
                price: '۲۹۰,۰۰۰ تومان'
            }
        ]
    },
    pot: {
        id: 'pot',
        name: 'قابلمه',
        icon: 'src/assets/images/category/cat-2.png',
        products: [
            {
                id: 5,
                name: 'قابلمه ۴ لیتری',
                image: 'src/assets/images/products/pot-1.jpg',
                description: 'قابلمه آلومینیومی با کف ضخیم، پخش حرارت یکنواخت',
                material: 'آلومینیوم ریخته‌گری',
                size: 'قطر ۲۴ سانتی‌متر',
                price: '۸۵۰,۰۰۰ تومان'
            },
            {
                id: 6,
                name: 'قابلمه ۶ لیتری',
                image: 'src/assets/images/products/pot-2.jpg',
                description: 'مناسب پخت غذاهای حجیم، دسته‌های نسوز ارگونومیک',
                material: 'آلومینیوم آلیاژی',
                size: 'قطر ۲۸ سانتی‌متر',
                price: '۱,۱۵۰,۰۰۰ تومان'
            },
            {
                id: 7,
                name: 'ست قابلمه ۵ تکه',
                image: 'src/assets/images/products/pot-3.jpg',
                description: 'ست کامل قابلمه در سایزهای مختلف به همراه درب',
                material: 'آلومینیوم ضدزنگ',
                size: 'سایزهای ۱۶ تا ۲۸',
                price: '۳,۵۰۰,۰۰۰ تومان'
            }
        ]
    },
    tray: {
        id: 'tray',
        name: 'سینی',
        icon: 'src/assets/images/category/cat-3.png',
        products: [
            {
                id: 8,
                name: 'سینی گرد ۳۰ سانتی',
                image: 'src/assets/images/products/tray-1.jpg',
                description: 'سینی گرد با لبه‌های برجسته، مناسب سرو چای و قهوه',
                material: 'آلومینیوم براق',
                size: 'قطر ۳۰ سانتی‌متر',
                price: '۴۵۰,۰۰۰ تومان'
            },
            {
                id: 9,
                name: 'سینی مستطیل بزرگ',
                image: 'src/assets/images/products/tray-2.jpg',
                description: 'سینی مستطیل با دسته‌های کناری، ایده‌آل برای پذیرایی',
                material: 'آلومینیوم مات',
                size: '۴۰ × ۳۰ سانتی‌متر',
                price: '۶۵۰,۰۰۰ تومان'
            },
            {
                id: 10,
                name: 'سینی طرح دار',
                image: 'src/assets/images/products/tray-3.jpg',
                description: 'سینی با حکاکی‌های هنری دست‌ساز، محصول اختصاصی بهارک',
                material: 'آلومینیوم حکاکی شده',
                size: 'قطر ۳۵ سانتی‌متر',
                price: '۷۸۰,۰۰۰ تومان'
            },
            {
                id: 11,
                name: 'ست سینی و لیوان',
                image: 'src/assets/images/products/tray-4.jpg',
                description: 'پکیج ویژه شامل سینی و ۶ عدد لیوان هماهنگ',
                material: 'آلومینیوم درجه یک',
                size: 'سینی ۳۵ سانتی + ۶ لیوان',
                price: '۱,۹۰۰,۰۰۰ تومان'
            }
        ]
    }
};

// ========================================
//     DOM Elements
// ========================================
const modalOverlay = document.getElementById('modal-overlay');
const modalMenu = document.getElementById('modal-menu');
const categoryScreen = document.getElementById('category-screen');
const header = document.getElementById('header');
let modalProduct = null;
let currentCategory = null;

// ========================================
//     ساخت منوی داینامیک
// ========================================
function buildDynamicMenu() {
    const menuList = modalMenu.querySelector('ul');
    menuList.innerHTML = '';
    
    Object.values(categoriesData).forEach((category, index) => {
        const li = document.createElement('li');
        
        li.className = 'w-full h-10 rounded-lg flex items-center justify-between pr-4 pl-2 font-vazirmatn cursor-pointer transition-all duration-200';
        
        // دسته اول active باشه
        if (index === 0) {
            li.classList.add('bg-gray-200');
        } else {
            li.classList.add('hover:bg-gray-100');
        }
        
        li.innerHTML = `
            ${category.name}
            <i class="ri-arrow-left-s-line text-xl"></i>
        `;
        
        li.addEventListener('click', function() {
            updateMenuActiveState(this);
            showCategoryPage(category.id);
        });
        
        menuList.appendChild(li);
    });
}

// ========================================
//     آپدیت حالت active منو
// ========================================
function updateMenuActiveState(activeItem) {
    const allMenuItems = modalMenu.querySelectorAll('li');
    
    allMenuItems.forEach(item => {
        item.classList.remove('bg-gray-200');
        item.classList.add('hover:bg-gray-100');
    });
    
    activeItem.classList.add('bg-gray-200');
    activeItem.classList.remove('hover:bg-gray-100');
}

// ========================================
//     نمایش صفحه دسته‌بندی
// ========================================
function showCategoryPage(categoryId) {
    const category = categoriesData[categoryId];
    if (!category) return;
    
    currentCategory = category;

    // بستن منو
    closeMenuModal();

    // نمایش هدر
    header.classList.remove('hidden');

    // مخفی کردن همه صفحات
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));

    // ساخت محتوای صفحه
    const html = `
        <div class="w-5/6 h-8/9 mx-auto">
            <!-- head -->
            <div class="w-full h-10 mt-5 relative flex items-center">
                <h4 class="font-vazirmatn font-bold text-xl text-primary">
                    ${category.name}
                </h4>
                <div class="w-20 z-5 h-20 absolute bg-surface -left-5 top-0 rounded-full flex items-center justify-center">
                    <span class="inline-flex w-18 h-18 rounded-full border-3 border-dashed border-primary items-center justify-center">
                        <img src="${category.icon}" class="w-13" alt="${category.name}" onerror="this.style.display='none'">
                    </span>
                </div>
            </div>

            <div class="w-full h-7/8 bg-white/60 backdrop-blur-[3px] rounded-2xl pt-7 px-3 overflow-scroll">
                ${category.products.map(product => `
                    <div class="product-card w-full h-25 relative flex items-center gap-3" onclick="showProductDetail(${product.id}, '${categoryId}')">
                        <!-- pic -->
                        <div class="w-25 h-25 rounded-full border-3 border-dashed border-white p-1 absolute -top-3">
                            <span class="inline-flex w-full h-full bg-white rounded-full overflow-hidden">
                                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover" onerror="this.parentElement.innerHTML='<div class=\\'w-full h-full flex items-center justify-center bg-gray-200\\'><i class=\\'ri-image-line text-2xl text-gray-400\\'></i></div>'">
                            </span>
                        </div>
                        <span class="title font-vazirmatn">
                            ${product.name}
                        </span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    categoryScreen.innerHTML = html;
    categoryScreen.classList.remove('hidden');
    
    // اسکرول به بالا
    const scrollContainer = categoryScreen.querySelector('.overflow-scroll');
    if (scrollContainer) {
        scrollContainer.scrollTop = 0;
    }
}

// ========================================
//     ساخت مودال محصول
// ========================================
function createProductModal() {
    const existingModal = document.getElementById('modal-product');
    if (existingModal) {
        existingModal.remove();
    }
    
    const modalHTML = `
        <section id="modal-product" class="modal w-full fixed bottom-0 left-0 right-0 h-5/6 bg-white z-32 hidden rounded-t-4xl p-3 overflow-y-auto transform translate-y-full transition-transform duration-300">
            <div class="modal-head w-full h-10 flex items-start justify-center sticky top-0 bg-white z-10 pt-2">
                <span class="inline-flex w-15 h-1 rounded-full bg-gray-300 cursor-pointer" onclick="closeProductModal()"></span>
            </div>
            
            <div class="flex flex-col gap-4 mt-2">
                <div class="w-full h-60 bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden relative">
                    <img id="product-modal-image" src="" alt="" class="w-full h-full object-cover hidden">
                    <div id="product-image-placeholder" class="w-full h-full flex items-center justify-center">
                        <i class="ri-image-line text-6xl text-gray-400"></i>
                    </div>
                </div>
                
                <div class="px-2">
                    <h2 id="product-modal-name" class="font-vazirmatn text-xl font-bold text-gray-800"></h2>
                    <p id="product-modal-description" class="font-vazirmatn text-sm text-gray-600 mt-2 leading-6"></p>
                </div>
                
                <div class="bg-gray-50 rounded-2xl p-4 mx-2">
                    <div class="flex items-center justify-between py-2 border-b border-gray-200">
                        <span class="font-vazirmatn text-sm text-gray-500">جنس</span>
                        <span id="product-modal-material" class="font-vazirmatn text-sm font-bold text-gray-700"></span>
                    </div>
                    <div class="flex items-center justify-between py-2 border-b border-gray-200">
                        <span class="font-vazirmatn text-sm text-gray-500">ابعاد / سایز</span>
                        <span id="product-modal-size" class="font-vazirmatn text-sm font-bold text-gray-700"></span>
                    </div>
                    <div class="flex items-center justify-between py-2">
                        <span class="font-vazirmatn text-sm text-gray-500">قیمت</span>
                        <span id="product-modal-price" class="font-vazirmatn text-lg font-extrabold text-primary"></span>
                    </div>
                </div>
                
                <div class="px-2 pb-4 sticky bottom-0 bg-white pt-2">
                    <a href="tel:09043695709" class="w-full h-12 bg-primary rounded-full flex items-center justify-center gap-2 text-white font-vazirmatn font-bold hover:bg-primary/90 transition-colors">
                        <i class="ri-phone-fill text-xl"></i>
                        تماس برای سفارش
                    </a>
                </div>
            </div>
        </section>
    `;

    document.querySelector('.app-main').insertAdjacentHTML('beforeend', modalHTML);
    modalProduct = document.getElementById('modal-product');
}

// ========================================
//     نمایش جزئیات محصول
// ========================================
function showProductDetail(productId, categoryId) {
    const category = categoriesData[categoryId];
    if (!category) return;
    
    const product = category.products.find(p => p.id === productId);
    if (!product) return;

    if (!modalProduct) {
        createProductModal();
    }

    const productImage = document.getElementById('product-modal-image');
    const imagePlaceholder = document.getElementById('product-image-placeholder');
    
    productImage.classList.add('hidden');
    imagePlaceholder.classList.remove('hidden');
    
    productImage.src = product.image;
    productImage.onload = function() {
        productImage.classList.remove('hidden');
        imagePlaceholder.classList.add('hidden');
    };
    productImage.onerror = function() {
        productImage.classList.add('hidden');
        imagePlaceholder.classList.remove('hidden');
    };
    
    document.getElementById('product-modal-name').textContent = product.name;
    document.getElementById('product-modal-description').textContent = product.description;
    document.getElementById('product-modal-material').textContent = product.material;
    document.getElementById('product-modal-size').textContent = product.size;
    document.getElementById('product-modal-price').textContent = product.price;

    modalOverlay.classList.remove('hidden');
    modalProduct.classList.remove('hidden');
    
    requestAnimationFrame(() => {
        modalProduct.classList.add('open');
        modalProduct.style.transform = 'translateY(0)';
    });

    modalProduct.scrollTop = 0;
}

// ========================================
//     بستن مودال محصول
// ========================================
function closeProductModal() {
    if (!modalProduct) return;
    
    modalProduct.style.transform = 'translateY(100%)';
    
    setTimeout(() => {
        modalProduct.classList.remove('open');
        modalProduct.classList.add('hidden');
        modalOverlay.classList.add('hidden');
        modalProduct.style.transform = 'translateY(100%)';
    }, 300);
}

// ========================================
//     بستن مودال منو
// ========================================
function closeMenuModal() {
    modalMenu.style.transform = 'translateY(100%)';
    modalMenu.classList.remove('open');
    
    setTimeout(() => {
        modalMenu.classList.add('hidden');
        modalOverlay.classList.add('hidden');
    }, 300);
}

// ========================================
//     Toggle منو
// ========================================
function toggleMenu() {
    const isMenuOpen = modalMenu.classList.contains('open');
    
    if (isMenuOpen) {
        closeMenuModal();
    } else {
        modalOverlay.classList.remove('hidden');
        modalMenu.classList.remove('hidden');
        
        requestAnimationFrame(() => {
            modalMenu.classList.add('open');
            modalMenu.style.transform = 'translateY(0)';
        });
        
        if (modalProduct && modalProduct.classList.contains('open')) {
            closeProductModal();
        }
    }
}

// ========================================
//     Event Listeners
// ========================================
modalOverlay.addEventListener('click', function(e) {
    if (e.target === modalOverlay) {
        closeMenuModal();
        if (modalProduct) {
            closeProductModal();
        }
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeMenuModal();
        if (modalProduct) {
            closeProductModal();
        }
    }
});

// ========================================
//     مقداردهی اولیه
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    buildDynamicMenu();
    createProductModal();
    
    // نمایش splash screen در ابتدا
    const splashScreen = document.getElementById('splash-screen');
    if (splashScreen) {
        splashScreen.classList.remove('hidden');
    }
});