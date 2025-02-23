window.GrowthGenie = {
  init: function(config) {
    console.log("Growth Genie: 🚀 Initialized with config:", config);
    // Add the chatbot code here
    var genieContainer = document.createElement('div');
    genieContainer.classList.add('growth-genie-widget');
    genieContainer.innerHTML = `
      <div style="position:fixed; bottom: 20px; right: 20px; z-index: 9999; background: ${config.primaryColor}; color: white; padding: 10px; border-radius: 50%;">
        <img src="${config.customAvatar}" alt="Chatbot" style="width: 50px; height: 50px; border-radius: 50%;">
      </div>
    `;
    document.body.appendChild(genieContainer);
  }
};
