(function() {
  var container = document.getElementById("ad-728x90");

  if (container) {
    // Set Adsterra configuration
    var configScript = document.createElement('script');
    configScript.type = 'text/javascript';
    configScript.innerHTML = `
      atOptions = {
        'key' : 'b5c9831c055ab6694d6882aa18538653',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
      };
    `;
    container.appendChild(configScript);

    // Load the invoke.js script
    var adScript = document.createElement('script');
    adScript.type = 'text/javascript';
    adScript.src = 'https://www.highperformanceformat.com/b5c9831c055ab6694d6882aa18538653/invoke.js';
    adScript.async = true;
    container.appendChild(adScript);
  } else {
    console.warn('Ad container #ad-728x90 not found.');
  }
})();
