
$(function() {
    if (window.alreadyInit) {
        return;
    }
    window.alreadyInit = true;
    console.log("content-script init");

    browser.runtime.onMessage.addListener((message) => {
        console.log("content-script on-message", message);
        if (message["text"]) {
            window.myExtensionSelectedTarget.value = message["text"];
        }
    });
    
    
    window.addEventListener("click", (e) => {
        window.myExtensionSelectedTarget = e.target;
            
        console.log(e.target)
        if (e.target.tagName != "INPUT") {
            return;
        }
        if (e.target.className == "noext") {
            return;
        }
        browser.runtime.sendMessage({
            "url": e.target.href,
        });
    });
    
});
