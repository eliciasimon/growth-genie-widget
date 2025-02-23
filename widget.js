(function() {
  var customAvatarURL = "https://storage.googleapis.com/msgsndr/qVkjYa5LfhdWJHMfsWnW/media/67b8e82c674fb5abb664d8f5.png";
  
  // Only load on course pages
  if (window.location.href.includes('/courses/')) {
    console.log("Growth Genie: ✅ On course page. Initializing...");

    setTimeout(function() {
      console.log('Growth Genie: ⏳ Waiting for full page load...');

      // Remove any existing instances
      var oldGenies = document.querySelectorAll('.growth-genie-widget');
      oldGenies.forEach(function(oldGenie) {
        oldGenie.remove();
        console.log('Growth Genie: 🔄 Removed old instance.');
      });

      // Create container for chatbot
      var genieContainer = document.createElement('div');
      genieContainer.classList.add('growth-genie-widget');
      genieContainer.style.position = "fixed";
      genieContainer.style.bottom = "20px";
      genieContainer.style.right = "20px";
      genieContainer.style.zIndex = "9999";
      genieContainer.style.background = "#FFC107";
      genieContainer.style.borderRadius = "50%";
      genieContainer.style.padding = "10px";
      genieContainer.style.cursor = "pointer";

      // Add the custom avatar image
      var avatar = document.createElement('img');
      avatar.src = customAvatarURL;
      avatar.alt = "Chatbot";
      avatar.style.width = "50px";
      avatar.style.height = "50px";
      avatar.style.borderRadius = "50%";
      avatar.style.display = "block";

      // Append the avatar to the container
      genieContainer.appendChild(avatar);

      // Add the container to the body
      document.body.appendChild(genieContainer);

      // Add event listener to open chat window
      genieContainer.addEventListener('click', function() {
        alert("Hi there! I'm Growth Genie, here to guide you through the Limitless Living Launchpad. How can I help you today?");
      });

      console.log("Growth Genie: 🎉 Chatbot successfully added to the page.");
    }, 2000);
  } else {
    console.log('Growth Genie: 🚫 Not on course page. Skipping initialization.');
  }
})();
