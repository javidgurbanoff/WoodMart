// fetch("https://northwind.vercel.app/api/products")
//   .then((response) => {
//     return response.json();
//   })
//   .then((objectData) => {
//     console.log(objectData[0].name);
//     let tableData = "";
//     objectData.forEach((value) => {
//       tableData += `<h1>${value.name}</h1>`;
//     });
//     document.getElementById("table_body").innerHTML = tableData;
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });


// document.addEventListener('DOMContentLoaded', function() {
//   // Select all radio inputs
//   const radioInputs = document.querySelectorAll('.accordion input[type="radio"]');
//   const contents = document.querySelectorAll('.accordion .content');

//   // Hide all contents except the one associated with the checked radio
//   const updateContentVisibility = () => {
//     radioInputs.forEach((input, index) => {
//       if (input.checked) {
//         contents[index].style.display = 'block';
//       } else {
//         contents[index].style.display = 'none';
//       }
//     });
//   };

//   // Add change event listener to each radio input
//   radioInputs.forEach(input => {
//     input.addEventListener('change', updateContentVisibility);
//   });

//   // Initialize visibility
//   updateContentVisibility();
// });

const swiper = new Swiper('product-card-swiper-wrapper', {
 
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar

});