export let cart = JSON.parse(localStorage.getItem('cart')) || [{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2,
},
{
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 1
},
{
  productId: '3ebe75dc-64d2-4137-8860-1f5a963e534b',
  quantity: 4
}];

function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}

export function addToCart(productId){
  let matchingItem;

  cart.forEach((cartItem) => {
    if(productId === cartItem.productId){
       matchingItem = cartItem;
    }
  });

  if (matchingItem){
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1
    });
  }

  saveToStorage();
}


export function removeFromCart(productId){
  const newCart = [];
  cart.forEach((cartItem) => {
    if(cartItem.productId !== productId){
      newCart.push(cartItem);
    }
    saveToStorage();
  });
  cart = newCart;
}
