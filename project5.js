// Restaurant Contact Number (Change this to your client's WhatsApp number)
const whatsappNumber = "03127681516";

// Filter Categories Functionality
function filterMenu(category, element) {
    const buttons = document.querySelectorAll('.btn-cat');
    buttons.forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');

    const cards = document.querySelectorAll('.menu-card');
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Order via WhatsApp Functionality
function orderWhatsApp(itemName, price) {
    const message = `Hello Zaiqa Cafe! I want to order: *${itemName}* (PKR ${price}). Please confirm my order details.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
}