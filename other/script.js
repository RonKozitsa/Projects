const body = document.createElement("body");
const iframe = document.createElement("iframe");
iframe.src = "https://drive.google.com/file/d/1IzrxFmPyywdoh_ucHRpdfdjHC8FRXwaC/preview";
body.style = "display: flex; align-items:center;justify-content: center;height: 100vh;width: 100vw;";
body.appendChild(iframe);
document.body = body;
