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

## WebGLRenderingContext
WebGLRenderingContext dipakai untuk mendapatkan akses ke konteks WebGL guna rendering objek 2D dan/atau 3D.
```javascript
var canvas = document.getElementById("myCanvas");
var gl = canvas.getContext("webgl");
```

## WebGLProgram
WebGL Program adalah bagian dari WebGL API yang merupakan kombinasi dari dua WebGLShader yang dikompilasi, yaitu **vertex shader** dan **fragment shader**.
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

# Menggambar Titik
## Satu Titik
Untuk memunculkan gambar satu titik
```javascript
...
// instruksi untuk menggambar point
gl.drawArrays(gl.POINTS, 0, 1);
```
<img src="https://github.com/cg2021b/menggambar-primitif-yoursemicolon/blob/main/img/gambar-titik.PNG" alt="gambar-titik.png" width="500">

## Tiga Titik
Untuk menggambar 3 titik, definisikan posisi titik terlebih dahulu.
```javascript
// mendefinisikan titik segitiga
/**
 * A(-0,5, 0.5); B(-0.5, -0.5); C(0.5, -0.5)
 */

// variabel untuk menampung titik-titik yang ada di segitiga
var vertices = [
    -0.5, 0.5, // titik A
    -0.5, -0.5, // titik B
    0.5, -0.5 // titik C
];
```
Untuk memunculkan gambar satu titik
```javascript
...
// instruksi untuk menggambar point
gl.drawArrays(gl.POINTS, 0, 3);
```
<img src="https://github.com/cg2021b/menggambar-primitif-yoursemicolon/blob/main/img/gambar-3-titik.PNG" alt="gambar-3-titik.png" width="500">

# <a src="gambar-garis"></a>Menggambar Garis 
## <a src="lines"></a>Menggunakan gl.LINES
Untuk membentuk 1 garis dengan ``gl.LINES`` dibutuhkan 2 titik sehingga untuk membentuk 3 garis segitiga dibutuhkan 6 titik sebagai berikut.
```javascript
...
var vertices = [
    // garis AB
    -0.5, 0.5, // titik A
    -0.5, -0.5, // titik B

    // garis BC
    -0.5, -0.5, // titik B
    0.5, -0.5, // titik C

    // garis CA
    0.5, -0.5, // titik C
    -0.5, 0.5 // titik A
];
...
```
Kemudian, untuk memunculkan garis di antara titik yang telah ditentukan
```javascript
...
// instruksi untuk menggambar lines
gl.drawArrays(gl.LINES, 0, 6);
 ```
 
## <a src="line-loop"></a>Menggunakan gl.LINE_LOOP
``gl.LINE_LOOP`` untuk menggambar serangkaian segmen garis yang terhubung . Menggabungkan vertex pertama dengan vertex terakhir untuk membentuk loop.
```javascript
...
var vertices = [
    -0.5, 0.5, // titik A
    -0.5, -0.5, // titik B
    0.5, -0.5, // titik C
];
```
Kemudian, untuk memunculkan garis
```javascript
...
// instruksi untuk menggambar lines
gl.drawArrays(gl.LINE_LOOP, 0, 3);
```

## <a src="line-strip"></a>Menggunakan gl.LINE_STRIP
gl.LINE_STRIP untuk menggambar serangkaian segmen garis yang terhubung. Dari A ke B, B ke C dan C ke A. Untuk itu dibutuhkan 4 titik koordinat.
```javascript
...
var vertices = [
    -0.5, 0.5, // titik A
    -0.5, -0.5, // titik B
    0.5, -0.5, // titik C
    -0.5, 0.5, // titik A
];
...
```
Untuk memunculkan garis
```javascript
// instruksi untuk menggambar lines
gl.drawArrays(gl.LINE_STRIP, 0, 4);
```

<img src="https://github.com/cg2021b/menggambar-primitif-yoursemicolon/blob/main/img/gambar-garis.PNG" alt="gambar-garis.png" width="500">

# Menggambar Segitiga
(Soon)

## References
* https://www.tutorialspoint.com/webgl/webgl_modes_of_drawing.htm
* https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API?retiredLocale=id
* https://webglfundamentals.org/webgl/lessons/webgl-points-lines-triangles.html
