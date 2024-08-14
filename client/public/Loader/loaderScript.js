const reactScript = document.getElementById('app-script');

reactScript.onload = () => {
    const appBody = document.getElementById('app');
    appBody.classList.remove("loader-container")
    const spinner = document.getElementById('spinner');
    appBody.removeChild(spinner);
}