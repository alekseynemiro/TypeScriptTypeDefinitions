```TypeScript
var canvas: HTMLCanvasElement = document.createElement('canvas');
canvas.toBlob(function (blob) {
	var formData = new FormData();
	formData.append('file', blob, 'example.jpg');
}, 'image/jpeg');
```