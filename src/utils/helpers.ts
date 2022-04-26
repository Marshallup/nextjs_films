export function getPropertyStyleEl(el: HTMLElement, property: string) {
    return parseInt(getComputedStyle(el).getPropertyValue(property), 10);
}