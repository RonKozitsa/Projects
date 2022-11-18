const tryToBypass = () => {
    const idList = Array.from(document.querySelectorAll('*[id]'));
    const overlays = idList.filter(element => element.id.toLowerCase().includes('overlay'));
    console.log(overlays);
    overlays.forEach(overlay => {
        console.log(overlay);
        overlay.parentNode.removeChild(overlay);
    });
    document.body.classList.add('bypassScroll');
}

tryToBypass();
