chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    var links = getlinks();
    sendResponse(links);
});

$(function getlinks() {
    var link_links = $('link').attr('href');
    var a_links = $('a').attr('href');
    var input_links = $('input').attr('href');
    var button_links = $('button').attr('href');
    var links = link_links.concat(a_links, input_links , button_links);

    return links;
});