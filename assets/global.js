// Global JavaScript for Shopify theme

// Cart functionality
if (!window.cart) {
  window.cart = {};
}

window.cart.addItem = async function(variantId, quantity = 1) {
  try {
    const response = await fetch(window.routes.cart_add_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: [{
          id: variantId,
          quantity: quantity
        }]
      })
    });

    const data = await response.json();
    
    if (response.ok) {
      // Update cart count if element exists
      const cartCounts = document.querySelectorAll('[data-cart-count]');
      cartCounts.forEach(el => {
        el.textContent = data.item_count || 0;
      });
      
      // Dispatch cart update event
      document.dispatchEvent(new CustomEvent('cart:updated', { detail: data }));
      
      return data;
    } else {
      throw new Error(data.description || 'Failed to add item to cart');
    }
  } catch (error) {
    console.error('Error adding item to cart:', error);
    throw error;
  }
};

// Let Shopify handle cart forms natively - no interception needed
// Forms will submit normally and redirect to cart page

// Mobile menu toggle (handled in header section, but keeping for compatibility)
document.addEventListener('DOMContentLoaded', function() {
  // Additional global initialization if needed
});

