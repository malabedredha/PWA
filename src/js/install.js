const butInstall = document.getElementById('buttonInstall');

// Event handler for 'beforeinstallprompt'
window.addEventListener('beforeinstallprompt', (event) => {
    
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);

});

// Implements 'click' event listener for 'butInstall' 
butInstall.addEventListener('click', async () => {
   
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
     return;
    }
  
    promptEvent.prompt();
    
    window.deferredPrompt = null;
    
    butInstall.classList.toggle('hidden', true);

});

// Event handler for 'appinstalled'
window.addEventListener('appinstalled', (event) => {
    
    window.deferredPrompt = null;
    
});
