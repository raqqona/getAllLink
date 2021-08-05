chrome.tabs.query( {active:true, currentWindow:true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {message: 'getLinks'}, function(links){
        console.log(links);
        writeLinks(links);
    });
});

function writeLinks(links) {
    $.each(links, function(index, link) {
        if (link != null) {
            $('.url').append("<p>" + link + "</p>");
        }
    })
};