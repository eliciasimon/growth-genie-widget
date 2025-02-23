(function() {
  var customAvatarURL = "https://storage.googleapis.com/msgsndr/qVkjYa5LfhdWJHMfsWnW/media/67b8e82c674fb5abb664d8f5.png";

  // Only run on course pages
  if (window.location.href.includes('/courses/')) {
    console.log("Growth Genie: ✅ On course page. Initializing...");

    setTimeout(function() {
      console.log('Growth Genie: ⏳ Waiting for full page load...');

      // Remove old instances to avoid duplication
      var oldGenies = document.querySelectorAll('.growth-genie-widget');
      oldGenies.forEach(function(oldGenie) {
        oldGenie.remove();
        console.log('Growth Genie: 🔄 Removed old instance.');
      });

      // Create the chatbot container
      var genieContainer = document.createElement('div');
      genieContainer.classList.add('growth-genie-widget');
      genieContainer.style.position = 'fixed';
      genieContainer.style.bottom = '20px';
      genieContainer.style.right = '20px';
      genieContainer.style.zIndex = '9999';
      genieContainer.style.cursor = 'pointer';
      genieContainer.innerHTML = `
        <div style="background: #FFC107; padding: 10px; border-radius: 50%; box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);">
          <img src="${customAvatarURL}" alt="Growth Genie" style="width: 50px; height: 50px; border-radius: 50%;">
        </div>
      `;

      // Append the container to the body
      document.body.appendChild(genieContainer);

      console.log('Growth Genie: 🚀 Widget added successfully.');
    }, 2000); // Delay to ensure full page load
  } else {
    console.log('Growth Genie: 🚫 Not on course page. Skipping initialization.');
  }
})();
