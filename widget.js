(function() {
  var customAvatarURL = "https://storage.googleapis.com/msgsndr/qVkjYa5LfhdWJHMfsWnW/media/67b8e82c674fb5abb664d8f5.png";
  
  if (window.location.href.includes('/courses/')) {
    console.log("Growth Genie: ✅ On course page. Initializing...");

    setTimeout(function() {
      console.log('Growth Genie: ⏳ Waiting for full page load...');

      var oldGenies = document.querySelectorAll('.growth-genie-widget');
      oldGenies.forEach(function(oldGenie) {
        oldGenie.remove();
        console.log('Growth Genie: 🔄 Removed old instance.');
      });

      var chatbotScript = document.createElement('script');
      chatbotScript.src = "https://cdn.jsdelivr.net/gh/eliciasimon/growth-genie-widget/widget.js";
      chatbotScript.async = true;
      
      chatbotScript.onload = function() {
        console.log('Growth Genie: ✅ Script loaded. Initializing...');
        if (window.GrowthGenie) {
          window.GrowthGenie.init({
            botName: "Growth Genie",
            welcomeMessage: "Hi there! I'm Growth Genie, here to guide you through the Limitless Living Launchpad. How can I help you today?",
            primaryColor: "#FFC107",
            position: "bottom-right",
            customAvatar: customAvatarURL,
            persistentMemory: true,
            locationID: "qVkjYa5LfhdWJHMfsWnW"
          });
          console.log('Growth Genie: 🚀 Initialized successfully.');
        } else {
          console.error("Growth Genie: ❌ Script loaded, but Growth Genie is undefined.");
        }
      };

      chatbotScript.onerror = function() {
        console.error("Growth Genie: ❌ Failed to load Growth Genie script.");
      };

      document.body.appendChild(chatbotScript);
    }, 2000);
  } else {
    console.log('Growth Genie: 🚫 Not on course page. Skipping initialization.');
