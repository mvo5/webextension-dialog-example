
$( document ).ready(function () {
    console.log("dialog.js: document.ready()")

    var params = new URLSearchParams(window.location.search)
    var tabID = parseInt(params.get("tab-id"))

    $('#dialog_ok').click(function() {
        browser.tabs.sendMessage(tabID, {
            msg: "message-from-dialog.",
            text: $("#dialog_text_input").val(),
        }).then(() => {
            window.close();
        });
    });

}); 
