chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    var links = getlinks();
    sendResponse(links);
});

function getlinks() {
    var links = [];

    $("link").each(function(){
        links.push($(this).prop('href'));
    });
    $("a").each(function(){
        links.push($(this).prop('href'));
    });
    $("input").each(function(){
        links.push($(this).prop('href'));
    });
    $("button").each(function(){
        links.push($(this).prop('href'));
    });

    return links;
};