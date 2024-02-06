const likedProductsContent = document.querySelector(".liked__products__content");
const likedIcon = document.querySelector(".navbar__activity .bi-heart");
let allLikedProducts = JSON.parse(localStorage.getItem("liked"));


if (allLikedProducts.length > 0) {
    likedProductsContent.innerHTML = "";
    allLikedProducts.forEach(element => {
        likedProductsContent.innerHTML += `
     <div class="card">
      <div class="card__activities__content" style="display: flex; justify-content: right;">
          <div class="  ${element.saved ? "liked__icon__active" : "liked__icon"}"><i class="bi bi-heart"></i></div>
      </div>
      <div class="card__header"><img src="${element.img}"></div>
      <div class="card__bodier">
          <h3 class="product__name__1">${element.name}</h3>
          <div class="product__title">${element.title}</div>
          <div class="product__price">$${element.price}</div>
      </div>
  </div> 
      `
    });
}
else {
    likedProductsContent.innerHTML = `
    <svg class = "no__liked__products__img" xmlns="http://www.w3.org/2000/svg" width="150px" height="150px" viewBox="0 0 280 280" class="css-1ffmos1"><g fill="none" fill-rule="evenodd"><path fill="#FFD6C9" d="M251.421 116.704a30.95 30.95 0 0 0 8.044-20.974c-.064-17.156-14.02-31.013-31.174-30.949-13.353.05-24.703 8.521-29.049 20.366-4.432-11.812-15.846-20.199-29.199-20.15-17.152.066-31.006 14.025-30.943 31.182.033 8.804 3.73 16.73 9.633 22.362h-.014l50.563 50.192s51.653-51.506 51.991-51.873l.152-.156h-.004zM87.477 79.793a19.465 19.465 0 0 0 5.119-13.246C92.556 55.71 83.673 46.959 72.758 47c-8.498.032-15.72 5.382-18.486 12.863-2.82-7.46-10.084-12.758-18.581-12.726C24.776 47.177 15.96 55.995 16 66.83c.021 5.56 2.374 10.567 6.13 14.124h-.01l32.177 31.7s32.87-32.53 33.085-32.762l.096-.099h-.002z"></path><path fill="#FFAA9A" d="M183.577 174.213a34.261 34.261 0 0 0 8.867-23.181c-.07-18.963-15.456-34.278-34.362-34.207-14.72.055-27.23 9.419-32.02 22.51-4.887-13.055-17.467-22.325-32.186-22.27-18.907.071-34.177 15.5-34.107 34.462.036 9.73 4.111 18.493 10.618 24.717h-.015l55.735 55.474s56.936-56.927 57.308-57.333l.166-.172h-.004z"></path><path fill="#FF8169" d="M92.86 116.827c-20.114-.241-34.53 15.533-34.458 34.534.036 9.75 4.153 18.53 10.727 24.768h-.015l56.308 55.59S94.865 124.64 92.86 116.826z"></path><path fill="#002F34" d="M199.808 131.802h8.781v-2.051h-5.728l5.679-7.928v-1.51h-8.568v2.052h5.482l-5.646 7.927zm16.37-3.972h4.562v-2.035h-4.562zm12.102 3.972h8.781v-2.051h-5.728l5.679-7.928v-1.51h-8.568v2.052h5.482l-5.646 7.927zm16.369-3.972h4.563v-2.035h-4.563zm12.102 3.972v-1.51l5.647-7.927h-5.482v-2.052h8.567v1.51l-5.679 7.928h5.729v2.051zm-100.553 23.253a4.787 4.787 0 1 0 0 9.574 4.787 4.787 0 0 0 0-9.574m0 3.682a1.106 1.106 0 0 1 0 2.21 1.106 1.106 0 0 1 0-2.21m-15.73-7.833h10.942v-5.471h-10.942zm19.149 0h10.942v-5.471h-10.942z"></path></g></svg>
        <div class = "no__liked__products__text">Нажмите ♡ на объявлении, которое вас заинтересовало, и мы сохраним его здесь.</div>
    `
}

if (allLikedProducts.length > 0) {
    likedIcon.style.color = "red";
}
else {
    likedIcon.style.color = "black";
}

