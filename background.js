function MyGenericClick(info, tab){
    console.log("Clicked on page:", info, tab)
}

function MyImageClick(info, tab){
    console.log("Clicked an Image:", info, tab)
    chrome.windows.create({
        "url": "http://facebook.com/sharer.php?u=" + info.srcUrl,
        "type": "popup"
    })
}

function MyQuoteClick(info, tab){
    console.log("Clicked an Imange:", info, tab)
    chrome.windows.create({
        "url": "http://facebook.com/sharer.php?u=" + info.pageUrl + "&display=popup&quote=" + info.selectionText,
        "type": "popup"
    })
}


chrome.contextMenus.create({
    "title" : "Share Image",
    "contexts" : ["image"],
    "onclick" : MyImageClick
})

chrome.contextMenus.create({
    "title" : "Share Quote",
    "contexts" : ["selection"],
    "onclick" : MyQuoteClick
})

function sendResponse(){

}

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse){
    console.log("message", msg)
})