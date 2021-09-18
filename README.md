# Menggambar Primitif:art:
## WebGL
WebGL atau Web Graphics Library adalah Javascript API untuk me-render high-performance interactive 2D dan 3D objek pada browser compatible tanpa menggunakan plugin. WebGL menggunakan sintaks Javascript.

## Membuat Canvas
Canvas adalah media yang akan digunakan untuk menggambar. ``onload`` berfungsi untuk menjalankan fungsi yang ada di ``main.js`` ketika browser me-render body.
```html
<body onload="main()">
    <!-- kertas / media untuk menggambar -->
    <canvas id="myCanvas" width="750" height="500" style="border: 1px solid black;">
    </canvas>
</body>
```

## WebGLProgram
WebGLProgram adalah bagian dari WebGL API yang merupakan kombinasi dari dua WebGLShader yang dikompilasi, yaitu **vertex shader** dan **fragment shader**.
```javascript
// membuat package program --> compile
var shaderProgram = gl.createProgram();

// attach vertex dan fragment
gl.attachShader(shaderProgram, vertexShader);
gl.attachShader(shaderProgram, fragmentShader);

// link program
gl.linkProgram(shaderProgram);

if(!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    var info = gl.getProgramInfoLog(shaderProgram);
    throw `Could not compile WebGL program. \n\n ${info}` // template literals
}

// use the program
gl.useProgram(shaderProgram);

// set warna background
gl.clearColor(0.0, 0.0, 0.0, 1.0);
// clear background
gl.clear(gl.COLOR_BUFFER_BIT);

// instruksi untuk menggambar point
gl.drawArrays(gl.POINT, 0, 1);
```

## Hasil Gambar Titik
<img src="https://github.com/cg2021b/menggambar-primitif-yoursemicolon/blob/main/img/gambar-titik.PNG" width="500">
