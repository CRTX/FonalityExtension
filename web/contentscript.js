var Observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        var isMessage = $(mutation.target).hasClass("ListMessageText");
        if (isMessage) {
            var newMessage = $(mutation.target).text();
            chrome.runtime.sendMessage(
                {
                    plugin: "Fonality",
                    title: "New Message",
                    message: newMessage
                },
                function(response) {
                    console.log(response);
                });
        }
    });
});

$(".fj-scroll-content").load(function() {;
    var Notifications = $(".fj-scroll-content")[2];
    Observer.observe(Notifications, {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true
    });
});
