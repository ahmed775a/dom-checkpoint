
function updateTotal() {
    let total = 0;
    const productList = document.querySelectorAll('.card-body');
    productList.forEach(product => {
        const priceElement = product.querySelector('.unit-price');
        const quantityElement = product.querySelector('.quantity');
        const price = parseFloat(priceElement.textContent.replace('$', ''));
        const quantity = parseInt(quantityElement.textContent);
        total += price * quantity;
    });
    document.querySelector('.total').textContent = `${total} $`;
}


function updateQuantity(element, increment) {
    const quantityElement = element.closest('.card-body').querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);
    quantity = increment ? quantity + 1 : quantity - 1;
    if (quantity < 0) quantity = 0;
    quantityElement.textContent = quantity;
    updateTotal();
}


function deleteItem(element) {
    const productElement = element.closest('.card-body');
    productElement.remove();
    updateTotal();
}


function toggleLike(element) {
    element.classList.toggle('liked');
    element.style.color = element.classList.contains('liked') ? 'red' : 'black';
}


document.querySelectorAll('.fa-plus-circle').forEach(button => {
    button.addEventListener('click', () => updateQuantity(button, true));
});

document.querySelectorAll('.fa-minus-circle').forEach(button => {
    button.addEventListener('click', () => updateQuantity(button, false));
});

document.querySelectorAll('.fa-trash-alt').forEach(button => {
    button.addEventListener('click', () => deleteItem(button));
});

document.querySelectorAll('.fa-heart').forEach(button => {
    button.addEventListener('click', () => toggleLike(button));
});


updateTotal();

