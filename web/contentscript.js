var Observer = new MutationObserver(function(mutations) {
    var bg = $(mutations).find(".AvatarForeground").css('background-image');
    bg = bg.replace('url(','').replace(')','');
    console.log(bg);
    $(mutations).each(function() {
    });
});

setTimeout(function() {
var Notifications = $(".LeftSideBarSectionBody")[1];
    Observer.observe(Notifications, {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true
    });
}, 7000);

chrome.runtime.sendMessage({plugin: "Fonality", title: "New Message", message: "testing"}, function(response) {
	console.log(response);
});
