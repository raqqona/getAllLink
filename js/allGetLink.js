chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	if (request == "Action") {
		getAllLink();
	}
});

function getAllLink() {
    
}