const modules = import.meta.glob("./**/*.vue");

/**
 * @param {object} app 
 * @returns 
 */
const install = function (app) {
    if (install.installed) return

    for (let path in modules) {
        modules[path]().then((mod) => {
            app.component(mod["default"]["__name"], mod["default"]);
        });
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install
}