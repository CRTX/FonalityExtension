chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	var option = {
            type: "basic",
            title: request.title,
            iconUrl: "logo.png",
            message: request.message
        };

	var callback = function(test){
		console.log(chrome.runtime.lastError);
	};
	if (request.plugin == 'Fonality') {
            chrome.notifications.create("", option, callback);
            sendResponse({yay: "it works"});
        }

    }
);
