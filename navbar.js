// Function to check if the dropdown menu is open and screen width is 991px or smaller
function checkDropdownAndScreenWidth() {
    // Check if the dropdown menu has the .show class
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const isDropdownOpen = dropdownMenu.classList.contains('show');
    
    // Check the screen width
    const screenWidth = window.innerWidth;
    const isSmallScreen = screenWidth <= 991;
    
    // Select the .container-fluid element
    const containerFluid = document.querySelector('.container-fluid');
    
    // Apply styles based on conditions
    if (isDropdownOpen && isSmallScreen) {
      containerFluid.style.paddingBottom = '3%';
    } else {
      containerFluid.style.paddingBottom = ''; // Reset to default if conditions are not met
    }
  }
  
  // Event listener for changes in dropdown menu class
  document.addEventListener('transitionend', function(event) {
    if (event.propertyName === 'visibility') {
      checkDropdownAndScreenWidth();
    }
  });
  
  // Event listener for window resize to check screen width
  window.addEventListener('resize', function() {
    checkDropdownAndScreenWidth();
  });
  