declare interface Logger {
    log(value: any): void;
}
declare type PageObject = {
    init(driver, options?: { timeout?: number, logger?: Logger }): void;
    register(pageObject: Object): void;
    getElement(path: string, options?: {immediate: boolean}): WebdriverIO.Element | WebdriverIO.Element[]
}
declare module '@qavajs/po' {
    let po: PageObject;
    class Component {
        constructor(selector: any)
    }
    function Selector(selectorFunction: Function): any
    function $(selector: string|Object, options?: { ignoreHierarchy: boolean }): Object;
    function $$(selector: string|Object, options?: { ignoreHierarchy: boolean }): Object;
    export { $, $$, po, Component, Selector }
}
