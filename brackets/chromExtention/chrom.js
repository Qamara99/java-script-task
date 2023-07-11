let links = [];
const parsing = JSON.parse( sessionStorage.getItem("links") )


if (parsing) {
    links = parsing
    addlink(links)
}

document.getElementById("tab-btn").addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        links.push(tabs[0].url)
        sessionStorage.setItem("links", JSON.stringify(links) )
        addlink(links)
    }) 
})


function addlink(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    document.getElementById("ul-el").innerHTML = listItems
}

document.getElementById("delete").addEventListener("dblclick", function() {
    sessionStorage.clear();
    links = [];
    addlink(links);
})

document.getElementById("input-btn").addEventListener("click", function() {
    links.push(document.getElementById("input-el").value);
    document.getElementById("input-el").value = "";
    sessionStorage.setItem("links", JSON.stringify(links) );
    addlink(links)
})