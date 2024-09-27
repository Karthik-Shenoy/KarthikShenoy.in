const reactScript = document.getElementById("app-script");

const removeLoader = () => {
    const appBody = document.getElementById("app");
    appBody.classList.remove("loader-container");
    const spinner = document.getElementById("spinner");
    appBody.removeChild(spinner);
};

reactScript &&
    (reactScript.onload = () => {
        removeLoader();
    });
