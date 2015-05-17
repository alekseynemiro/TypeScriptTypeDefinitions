// Type definitions for JavaScript Canvas to Blob 2.0.5
// Project: https://github.com/blueimp/JavaScript-Canvas-to-Blob
// Definitions by: Aleksey Nemiro <https://github.com/alekseynemiro>

interface HTMLCanvasElement {

	/**
	 * Creates a Blob object representing a file containing the image in the canvas, and invokes a callback with a handle to that object.
	 */
	toBlob(callback: Function, type?: string, quality?: number): void;

}