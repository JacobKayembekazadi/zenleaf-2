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

// Handle form submissions for add to cart
document.addEventListener('submit', async function(e) {
  const form = e.target;
  if (form.action && form.action.includes('cart/add')) {
    e.preventDefault();
    
    const formData = new FormData(form);
    const variantId = formData.get('id');
    const quantity = parseInt(formData.get('quantity') || '1');
    
    try {
      await window.cart.addItem(variantId, quantity);
      
      // Show success message (you can customize this)
      if (window.Shopify && window.Shopify.theme) {
        // Redirect to cart or show notification
        window.location.href = window.routes.cart_url;
      }
    } catch (error) {
      alert('Failed to add item to cart. Please try again.');
    }
  }
});

// Mobile menu toggle (handled in header section, but keeping for compatibility)
document.addEventListener('DOMContentLoaded', function() {
  // Additional global initialization if needed
});

