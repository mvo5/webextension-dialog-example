

browser.runtime.onMessage.addListener((message) => {
    console.log("background on-message", message);

    browser.tabs.query({active: true, currentWindow: true}).then((tabs) => {
        browser.tabs.sendMessage(tabs[0].id, {
            msg: "message-from-background.js",
        });
        let creating=browser.windows.create({
            url: 'dialog.html?tab-id='+tabs[0].id,
            width: 600,
            height: 400,
            type: 'popup'
        });
        creating.then((windowInfo) => {
            // workaround for buggy FF 57 - it will open
            // the window empty until a resize event
            // happens
            browser.windows.update(windowInfo.id, {
                width: 601,
                height: 401
            });
        });
        
    });
});

$(function() {
    console.log("background init");
});
