// click to scroll
document.getElementById('scrollButton1').addEventListener('click', function() {
    document.getElementById('targetElement1').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scrollButton2').addEventListener('click', function() {
    document.getElementById('targetElement2').scrollIntoView({ behavior: 'smooth' });
});

// tab filters
// document.addEventListener('DOMContentLoaded', () => {
//     const tabs = document.querySelectorAll('.tabs li a');
//     const tabContents = document.querySelectorAll('.content-block');

//     tabs.forEach(tab => {
//         tab.addEventListener('click', (event) => {
//             // Prevent the default anchor behavior
//             event.preventDefault();

//             // Remove 'is-active' from all tabs and add to the current tab
//             tabs.forEach(item => item.parentNode.classList.remove('is-active'));
//             tab.parentNode.classList.add('is-active');

//             // Get the target category from the clicked tab
//             const target = tab.getAttribute('data-target').toLowerCase();

//             // Filter content blocks
//             tabContents.forEach(content => {
//                 const categories = content.getAttribute('data-category').toLowerCase().split(' ');
//                 if (categories.includes(target) || target === 'all') {
//                     content.style.display = ''; // Show
//                 } else {
//                     content.style.display = 'none'; // Hide
//                 }
//             });
//         });
//     });
// });

function filterItems(category) {
    var items = document.querySelectorAll('.content-block');
    items.forEach(function (item) {
        var itemCategories = item.getAttribute('data-category').split(' ');
        if (category === 'all' || itemCategories.includes(category)) {
            item.style.display = ''; // or use 'block' or 'flex' depending on your layout
        } else {
            item.style.display = 'none';
        }
    });
}

