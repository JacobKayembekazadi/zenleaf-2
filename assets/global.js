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
  // Only intercept cart add forms, not regular navigation forms
  if (form.action && form.action.includes('cart/add') && form.method === 'post') {
    e.preventDefault();
    
    const formData = new FormData(form);
    const variantId = formData.get('id');
    const quantity = parseInt(formData.get('quantity') || '1');
    
    // Check if variant ID exists
    if (!variantId) {
      alert('Please select a product option.');
      return;
    }
    
    try {
      // Use Shopify's cart/add endpoint with form data
      const response = await fetch(window.routes.cart_add_url, {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        const data = await response.json();
        
        // Update cart count
        const cartCounts = document.querySelectorAll('[data-cart-count]');
        cartCounts.forEach(el => {
          el.textContent = data.item_count || 0;
        });
        
        // Update cart icon badge in header
        const cartBadges = document.querySelectorAll('.cart-badge-count');
        cartBadges.forEach(el => {
          const count = data.item_count || 0;
          el.textContent = count;
          if (count > 0) {
            el.classList.remove('hidden');
          } else {
            el.classList.add('hidden');
          }
        });
        
        // Dispatch cart update event
        document.dispatchEvent(new CustomEvent('cart:updated', { detail: data }));
        
        // Show success - redirect to cart or show notification
        if (window.Shopify && window.Shopify.theme) {
          // Option 1: Redirect to cart
          // window.location.href = window.routes.cart_url;
          
          // Option 2: Show notification (if cart-notification component exists)
          const cartNotification = document.querySelector('cart-notification');
          if (cartNotification) {
            cartNotification.renderContents(data);
          } else {
            // Fallback: redirect to cart
            window.location.href = window.routes.cart_url;
          }
        } else {
          // Fallback: redirect to cart
          window.location.href = window.routes.cart_url;
        }
      } else {
        // Handle error response
        const errorData = await response.json();
        throw new Error(errorData.description || 'Failed to add item to cart');
      }
    } catch (error) {
      console.error('Error adding item to cart:', error);
      alert('Failed to add item to cart. Please try again.');
    }
  }
});

// Mobile menu toggle (handled in header section, but keeping for compatibility)
document.addEventListener('DOMContentLoaded', function() {
  // Additional global initialization if needed
});

