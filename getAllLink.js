chrome.tabs.query( {active:true, currentWindow:true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {message: 'getLinks'}, function(links){
        writeLinks(links);
    });
});

$(function writeLinks(links) {
    links.forEach(function (link) {
        $('url').append(link);
    })
});