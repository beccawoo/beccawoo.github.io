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
