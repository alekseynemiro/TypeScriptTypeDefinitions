// Type definitions for jsx-to-html v1.1.0
// Project: https://github.com/OpenJSX/jsx-to-html
// Definitions by: Aleksey Nemiro <https://github.com/alekseynemiro>

declare namespace JsxToHtml {

  export function render(value: JSX.Element): string;

}

declare module 'jsx-to-html' {
  export = JsxToHtml;
}