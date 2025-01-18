function resumeLink() {
    return "/Becca_Woo-Resume-March_2024.pdf";
}

function getScreenSize() {
    if (typeof window.innerWidth != 'undefined') {
        // standards compliant
        return { width: window.innerWidth, height: window.innerHeight };
    } else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) {
        // IE6
        return { width: document.documentElement.clientWidth, height: document.documentElement.clientHeight };
    } else {
        // older
        var body = document.getElementsByTagName('body')[0]
        return { width: body.clientWidth, height: body.clientHeight }; 
    }
}

function isMobile() {
    var screenSize = getScreenSize();
    return screenSize.width < 856;
    // screenSize.width < screenSize.height
}

function mobileCards() {
    if (isMobile()) {
        for (const item of document.getElementsByClassName("cardGrid")) {
            item.style.gridTemplateColumns = "auto";
        }
        for (const item of document.getElementsByClassName("card")) {
            item.style.width = "71.2cqw";
            item.style.height = "71.2cqw";
        }
    }
}

function mobileCaseStudy() {

}
