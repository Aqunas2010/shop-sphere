// =====================================
// 1. PRODUCT DATA
// =====================================

const products = [

    // =========================
    // ELECTRONICS
    // =========================

    {
        id: 1,
        name: "Wireless Headphones",
        category: "Electronics",
        price: 1499,
        oldPrice: 1999,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
        badge: "BESTSELLER"
    },

    {
        id: 2,
        name: "Smart Watch",
        category: "Electronics",
        price: 2299,
        oldPrice: 2999,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
        badge: "POPULAR"
    },

    {
        id: 3,
        name: "Bluetooth Speaker",
        category: "Electronics",
        price: 1299,
        oldPrice: 1799,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
        badge: "TRENDING"
    },

    {
        id: 4,
        name: "Wireless Earbuds",
        category: "Electronics",
        price: 999,
        oldPrice: 1499,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500",
        badge: "HOT DEAL"
    },

    {
        id: 5,
        name: "Professional Camera",
        category: "Electronics",
        price: 24999,
        oldPrice: 28999,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
        badge: "PREMIUM"
    },

    {
        id: 6,
        name: "Laptop",
        category: "Electronics",
        price: 54999,
        oldPrice: 62999,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
        badge: "TOP PICK"
    },

    {
        id: 7,
        name: "Gaming Controller",
        category: "Electronics",
        price: 2499,
        oldPrice: 3299,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=500",
        badge: "GAMING"
    },

    {
        id: 8,
        name: "Tablet",
        category: "Electronics",
        price: 18999,
        oldPrice: 21999,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
        badge: "NEW"
    },


    // =========================
    // FASHION
    // =========================

    {
        id: 9,
        name: "Classic Cotton T-Shirt",
        category: "Fashion",
        price: 599,
        oldPrice: 899,
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
        badge: "SALE"
    },

    {
        id: 10,
        name: "Denim Jacket",
        category: "Fashion",
        price: 1799,
        oldPrice: 2499,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500",
        badge: "TRENDING"
    },

    {
        id: 11,
        name: "Running Sneakers",
        category: "Fashion",
        price: 1799,
        oldPrice: 2499,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
        badge: "BESTSELLER"
    },

    {
        id: 12,
        name: "Casual White Sneakers",
        category: "Fashion",
        price: 1499,
        oldPrice: 1999,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500",
        badge: "POPULAR"
    },

    {
        id: 13,
        name: "Classic Wrist Watch",
        category: "Fashion",
        price: 1299,
        oldPrice: 1899,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500",
        badge: "CLASSIC"
    },

    {
        id: 14,
        name: "Casual Hoodie",
        category: "Fashion",
        price: 1199,
        oldPrice: 1599,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500",
        badge: "WINTER PICK"
    },

    {
        id: 15,
        name: "Travel Sneakers",
        category: "Fashion",
        price: 2199,
        oldPrice: 2799,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500",
        badge: "TOP RATED"
    },

    {
        id: 16,
        name: "Premium Casual Shirt",
        category: "Fashion",
        price: 899,
        oldPrice: 1299,
        rating: 4.1,
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500",
        badge: "NEW"
    },


    // =========================
    // HOME & LIVING
    // =========================

    {
        id: 17,
        name: "Modern Desk Lamp",
        category: "Home",
        price: 1199,
        oldPrice: 1599,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500",
        badge: "HOME PICK"
    },

    {
        id: 18,
        name: "Comfortable Sofa",
        category: "Home",
        price: 18999,
        oldPrice: 22999,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500",
        badge: "PREMIUM"
    },

    {
        id: 19,
        name: "Minimal Wall Clock",
        category: "Home",
        price: 799,
        oldPrice: 1099,
        rating: 4.1,
        image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500",
        badge: "SALE"
    },

    {
        id: 20,
        name: "Modern Chair",
        category: "Home",
        price: 3499,
        oldPrice: 4299,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=500",
        badge: "POPULAR"
    },

    {
        id: 21,
        name: "Indoor Plant Pot",
        category: "Home",
        price: 499,
        oldPrice: 699,
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500",
        badge: "ECO PICK"
    },

    {
        id: 22,
        name: "Decorative Table",
        category: "Home",
        price: 2499,
        oldPrice: 3299,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1499933374294-4584851497cc?w=500",
        badge: "NEW"
    },

    {
        id: 23,
        name: "Cozy Bedroom Pillow",
        category: "Home",
        price: 699,
        oldPrice: 999,
        rating: 4.0,
        image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500",
        badge: "COMFORT"
    },

    {
        id: 24,
        name: "Modern Interior Decor",
        category: "Home",
        price: 1599,
        oldPrice: 2199,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500",
        badge: "TRENDING"
    },


    // =========================
    // ACCESSORIES
    // =========================

    {
        id: 25,
        name: "Classic Sunglasses",
        category: "Accessories",
        price: 799,
        oldPrice: 1199,
        rating: 4.1,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
        badge: "SALE"
    },

    {
        id: 26,
        name: "Travel Backpack",
        category: "Accessories",
        price: 999,
        oldPrice: 1299,
        rating: 4.2,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        badge: "VALUE PICK"
    },

    {
        id: 27,
        name: "Leather Wallet",
        category: "Accessories",
        price: 599,
        oldPrice: 899,
        rating: 4.0,
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500",
        badge: "CLASSIC"
    },

    {
        id: 28,
        name: "Premium Handbag",
        category: "Accessories",
        price: 1999,
        oldPrice: 2699,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
        badge: "TRENDING"
    },

    {
        id: 29,
        name: "Travel Suitcase",
        category: "Accessories",
        price: 2999,
        oldPrice: 3999,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=500",
        badge: "TRAVEL PICK"
    },

    {
        id: 30,
        name: "Leather Belt",
        category: "Accessories",
        price: 499,
        oldPrice: 799,
        rating: 4.0,
        image: "https://images.unsplash.com/photo-1624222247344-550fb8f5e2d0?w=500",
        badge: "VALUE DEAL"
    },

    {
        id: 31,
        name: "Premium Backpack",
        category: "Accessories",
        price: 1499,
        oldPrice: 1999,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=500",
        badge: "POPULAR"
    },

    {
        id: 32,
        name: "Minimal Jewellery",
        category: "Accessories",
        price: 899,
        oldPrice: 1299,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500",
        badge: "NEW"
    }

];


// =====================================
// 2. APPLICATION STATE
// =====================================

const STORAGE_KEY = "shopsphere_cart_v1";
const COUPON_KEY = "shopsphere_coupon_v1";

let cart = loadCart();
let appliedCoupon = loadCoupon();
let selectedCategory = "All";
let searchTerm = "";
let sortMode = "default";
let toastTimer;


// =====================================
// 3. DOM ELEMENTS
// =====================================

const productGrid = document.getElementById("productGrid");
const cartItems = document.getElementById("cartItems");

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

const cartCount = document.getElementById("cartCount");

const subtotalElement = document.getElementById("subtotal");
const discountElement = document.getElementById("discount");
const taxElement = document.getElementById("tax");
const deliveryElement = document.getElementById("delivery");
const grandTotalElement = document.getElementById("grandTotal");

const couponInput = document.getElementById("couponInput");
const couponMessage = document.getElementById("couponMessage");

const savingMessage = document.getElementById("savingMessage");
const emptyProducts = document.getElementById("emptyProducts");

const toast = document.getElementById("toast");


// =====================================
// 4. HELPER FUNCTIONS
// =====================================

function formatPrice(amount) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 2
    }).format(amount);
}


function showToast(message) {
    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}


function loadCart() {
    try {
        const savedCart = JSON.parse(
            localStorage.getItem(STORAGE_KEY) || "[]"
        );

        if (!Array.isArray(savedCart)) {
            return [];
        }

        const validCart = [];

        savedCart.forEach(item => {
            if (
                !item ||
                !Number.isInteger(item.id) ||
                !Number.isInteger(item.quantity)
            ) {
                return;
            }

            const product = products.find(p => p.id === item.id);

            if (product && item.quantity >= 1 && item.quantity <= 99) {
                validCart.push({
                    id: item.id,
                    quantity: item.quantity
                });
            }
        });

        return validCart;

    } catch (error) {
        return [];
    }
}


function saveCart() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}


function loadCoupon() {
    try {
        const coupon = localStorage.getItem(COUPON_KEY);

        return coupon === "SAVE10" ? coupon : null;

    } catch (error) {
        return null;
    }
}


function saveCoupon() {
    if (appliedCoupon) {
        localStorage.setItem(COUPON_KEY, appliedCoupon);
    } else {
        localStorage.removeItem(COUPON_KEY);
    }
}


function getProduct(productId) {
    return products.find(product => product.id === productId);
}


// =====================================
// 5. DISPLAY PRODUCTS
// =====================================

function renderProducts() {

    let filteredProducts = products.filter(product => {

        const matchesCategory =
            selectedCategory === "All" ||
            product.category === selectedCategory;

        const matchesSearch =
            product.name.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm);

        return matchesCategory && matchesSearch;
    });


    if (sortMode === "low") {
        filteredProducts.sort((a, b) => a.price - b.price);
    }

    if (sortMode === "high") {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    if (sortMode === "rating") {
        filteredProducts.sort((a, b) => b.rating - a.rating);
    }


    productGrid.innerHTML = "";

    emptyProducts.hidden = filteredProducts.length !== 0;


    filteredProducts.forEach(product => {

        const discountPercentage = Math.round(
            ((product.oldPrice - product.price) / product.oldPrice) * 100
        );

        const card = document.createElement("article");

        card.className = "product-card";

        card.innerHTML = `
            <div class="product-image">

                <span class="product-badge">
                    ${product.badge}
                </span>

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

            </div>

            <div class="product-info">

                <p class="product-category">
                    ${product.category}
                </p>

                <h3>${product.name}</h3>

                <p class="product-rating">
                    ★ ${product.rating}
                    <span>/ 5 rating</span>
                </p>

                <div class="product-prices">

                    <span class="current-price">
                        ${formatPrice(product.price)}
                    </span>

                    <span class="old-price">
                        ${formatPrice(product.oldPrice)}
                    </span>

                    <span class="product-discount">
                        ${discountPercentage}% OFF
                    </span>

                </div>

                <button class="add-btn" data-add="${product.id}">
                    + Add to Cart
                </button>

            </div>
        `;

        productGrid.appendChild(card);
    });
}


// =====================================
// 6. ADD PRODUCT TO CART
// =====================================

function addToCart(productId) {

    const product = getProduct(productId);

    if (!product) {
        return;
    }

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {

        if (existingItem.quantity >= 99) {
            showToast("Maximum quantity is 99.");
            return;
        }

        existingItem.quantity++;

    } else {

        cart.push({
            id: productId,
            quantity: 1
        });

    }

    saveCart();

    renderCart();

    showToast(product.name + " added to cart!");
}


// =====================================
// 7. CHANGE PRODUCT QUANTITY
// =====================================

function changeQuantity(productId, change) {

    const item = cart.find(item => item.id === productId);

    if (!item) {
        return;
    }

    const newQuantity = item.quantity + change;

    if (newQuantity < 1) {
        return;
    }

    if (newQuantity > 99) {
        showToast("Maximum quantity is 99.");
        return;
    }

    item.quantity = newQuantity;

    saveCart();

    renderCart();
}


// =====================================
// 8. REMOVE PRODUCT
// =====================================

function removeFromCart(productId) {

    const product = getProduct(productId);

    cart = cart.filter(item => item.id !== productId);

    saveCart();

    renderCart();

    showToast(product.name + " removed from cart.");
}


// =====================================
// 9. CALCULATE CART TOTALS
// =====================================

function calculateTotals() {

    const subtotal = cart.reduce((total, item) => {

        const product = getProduct(item.id);

        if (!product) {
            return total;
        }

        return total + product.price * item.quantity;

    }, 0);


    // Automatic 5% discount when subtotal reaches ₹2,000
    const automaticDiscount =
        subtotal >= 2000 ? subtotal * 0.05 : 0;


    // SAVE10 gives an additional 10% discount
    // after the automatic discount
    const couponDiscount =
        appliedCoupon
            ? (subtotal - automaticDiscount) * 0.10
            : 0;


    const totalDiscount = automaticDiscount + couponDiscount;


    // Educational demo assumption:
    // GST is calculated on the discounted subtotal.
    const taxableAmount = Math.max(0, subtotal - totalDiscount);

    const tax = taxableAmount * 0.18;


    // Free delivery for subtotal of ₹999 or more
    const delivery =
        subtotal === 0 || subtotal >= 999 ? 0 : 49;


    const grandTotal = taxableAmount + tax + delivery;


    return {
        subtotal,
        automaticDiscount,
        couponDiscount,
        totalDiscount,
        taxableAmount,
        tax,
        delivery,
        grandTotal
    };
}


// =====================================
// 10. DISPLAY CART
// =====================================

function renderCart() {

    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="empty-cart">

                <h3>Your cart is empty 🛒</h3>

                <p>
                    Explore our products and add something you love.
                </p>

            </div>
        `;

    } else {

        cart.forEach(item => {

            const product = getProduct(item.id);

            if (!product) {
                return;
            }

            const cartItem = document.createElement("article");

            cartItem.className = "cart-item";

            cartItem.innerHTML = `

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

                <div>

                    <h3>${product.name}</h3>

                    <p>${product.category}</p>

                    <div class="quantity-control">

                        <button
                            data-change="-1"
                            data-id="${product.id}"
                            aria-label="Decrease quantity"
                            ${item.quantity <= 1 ? "disabled" : ""}
                        >−</button>

                        <span>${item.quantity}</span>

                        <button
                            data-change="1"
                            data-id="${product.id}"
                            aria-label="Increase quantity"
                            ${item.quantity >= 99 ? "disabled" : ""}
                        >+</button>

                    </div>

                    <button
                        class="remove-btn"
                        data-remove="${product.id}"
                    >
                        Remove item
                    </button>

                </div>

                <div class="cart-item-price">
                    ${formatPrice(product.price * item.quantity)}
                </div>

            `;

            cartItems.appendChild(cartItem);

        });

    }


    updatePriceDetails();
}


// =====================================
// 11. UPDATE PRICE DETAILS
// =====================================

function updatePriceDetails() {

    const totals = calculateTotals();


    const totalItems = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );


    cartCount.textContent = totalItems;


    subtotalElement.textContent =
        formatPrice(totals.subtotal);


    discountElement.textContent =
        "−" + formatPrice(totals.totalDiscount);


    taxElement.textContent =
        formatPrice(totals.tax);


    deliveryElement.textContent =
        formatPrice(totals.delivery);


    grandTotalElement.textContent =
        formatPrice(totals.grandTotal);


    if (totals.subtotal === 0) {

        savingMessage.textContent =
            "Add products to start saving.";

    } else if (totals.subtotal < 2000) {

        const remaining = 2000 - totals.subtotal;

        savingMessage.textContent =
            "Add " + formatPrice(remaining) +
            " more to unlock the 5% discount.";

    } else {

        savingMessage.textContent =
            "You saved " + formatPrice(totals.totalDiscount) +
            " with discounts!";

    }


    if (appliedCoupon) {

        couponInput.value = appliedCoupon;

        couponMessage.textContent =
            "SAVE10 applied successfully!";

        couponMessage.style.color = "#176b52";

    } else {

        couponMessage.textContent =
            "Use SAVE10 for an extra 10% discount.";

        couponMessage.style.color = "";

    }
}


// =====================================
// 12. APPLY COUPON
// =====================================

function applyCoupon() {

    const code = couponInput.value.trim().toUpperCase();

    if (cart.length === 0) {

        showToast("Add a product before applying a coupon.");

        return;
    }


    if (code === "SAVE10") {

        appliedCoupon = "SAVE10";

        saveCoupon();

        renderCart();

        showToast("Coupon applied successfully!");

    } else {

        couponMessage.textContent =
            "Invalid coupon. Try SAVE10.";

        couponMessage.style.color = "#c53d3d";

        showToast("Please enter a valid coupon code.");

    }
}


// =====================================
// 13. SEARCH PRODUCTS
// =====================================

function performSearch() {

    searchTerm = searchInput.value.trim().toLowerCase();

    renderProducts();

    document.getElementById("productsSection").scrollIntoView({
        behavior: "smooth"
    });
}


searchBtn.addEventListener("click", performSearch);


searchInput.addEventListener("keydown", event => {

    if (event.key === "Enter") {
        performSearch();
    }

});


searchInput.addEventListener("input", () => {

    searchTerm = searchInput.value.trim().toLowerCase();

    renderProducts();

});


// =====================================
// 14. CATEGORY FILTER
// =====================================

document.querySelector(".categories").addEventListener(
    "click",
    event => {

        const button = event.target.closest(".category-btn");

        if (!button) {
            return;
        }

        selectedCategory = button.dataset.category;


        document.querySelectorAll(".category-btn").forEach(btn => {
            btn.classList.toggle("active", btn === button);
        });


        renderProducts();

    }
);


// =====================================
// 15. PRODUCT SORTING
// =====================================

document.getElementById("sortSelect").addEventListener(
    "change",
    event => {

        sortMode = event.target.value;

        renderProducts();

    }
);


// =====================================
// 16. PRODUCT GRID EVENTS
// =====================================

productGrid.addEventListener("click", event => {

    const button = event.target.closest("[data-add]");

    if (!button) {
        return;
    }

    addToCart(Number(button.dataset.add));

});


// =====================================
// 17. CART EVENTS
// =====================================

cartItems.addEventListener("click", event => {

    const quantityButton = event.target.closest("[data-change]");

    const removeButton = event.target.closest("[data-remove]");


    if (quantityButton) {

        changeQuantity(
            Number(quantityButton.dataset.id),
            Number(quantityButton.dataset.change)
        );

    }


    if (removeButton) {

        removeFromCart(
            Number(removeButton.dataset.remove)
        );

    }

});


// =====================================
// 18. NAVIGATION BUTTONS
// =====================================

document.getElementById("shopNowBtn").addEventListener(
    "click",
    () => {

        document.getElementById("productsSection").scrollIntoView({
            behavior: "smooth"
        });

    }
);


document.getElementById("cartBtn").addEventListener(
    "click",
    () => {

        document.getElementById("cartSection").scrollIntoView({
            behavior: "smooth"
        });

    }
);


document.getElementById("continueShoppingBtn").addEventListener(
    "click",
    () => {

        document.getElementById("productsSection").scrollIntoView({
            behavior: "smooth"
        });

    }
);


document.getElementById("applyCouponBtn").addEventListener(
    "click",
    applyCoupon
);


couponInput.addEventListener("keydown", event => {

    if (event.key === "Enter") {
        applyCoupon();
    }

});


// =====================================
// 19. DEMO ACCOUNT BUTTON
// =====================================

document.getElementById("accountBtn").addEventListener(
    "click",
    () => {

        showToast(
            "Welcome to ShopSphere! Account login is not enabled in this demo."
        );

    }
);


// =====================================
// 20. CHECKOUT VALIDATION
// =====================================

document.getElementById("checkoutBtn").addEventListener(
    "click",
    () => {

        if (cart.length === 0) {

            showToast("Your cart is empty. Add products first.");

            return;
        }


        const totals = calculateTotals();


        const confirmed = window.confirm(
            "Demo Checkout\n\n" +
            "Items: " +
            cart.reduce((sum, item) => sum + item.quantity, 0) +
            "\nTotal: " + formatPrice(totals.grandTotal) +
            "\n\nThis is a college project demo. " +
            "No payment will be processed.\n\n" +
            "Continue with demo checkout?"
        );


        if (confirmed) {

            showToast(
                "Demo checkout completed! No real payment was made."
            );

        }

    }
);


// =====================================
// 21. INITIALIZE WEBSITE
// =====================================

renderProducts();

renderCart();