function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    // mendefinisikan titik segitiga
    /**
     * A(-0,5, 0.5); B(-0.5, -0.5); C(0.5, -0.5)
     */

    // variabel untuk menampung titik-titik yang ada di segitiga
    var vertices = [
        -0.5, 0.5, // titik A
        -0.5, -0.5, // titik B
        0.5, -0.5, // titik C
        -0.5, 0.5, // titik A
    ];

    // empty buffer object to store vertex buffer
    var positionBuffer = gl.createBuffer();

    // bind appropriate array buffer to it
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    // pass the vertex data to the buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    // unbind the buffer
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    // mendefinisikan vertex
    var vertexShaderCode = `
    attribute vec2 a_Position; 
    void main() {
        gl_Position = vec4(a_Position, 0.0, 1.0);
        gl_PointSize = 20.0;
    }`;

    // membuat vertex shader
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);

    // mendefinisikan fragment
    var fragmentShaderCode = `
    void main() {
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }`;

    // membuat fragment shader
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);

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

    // untuk menggambar 3 titik x, y vertex
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    var aPosition = gl.getAttribLocation(shaderProgram, "a_Position");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aPosition);


    // set warna background
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // clear background
    gl.clear(gl.COLOR_BUFFER_BIT);

    // instruksi untuk menggambar lines
    gl.drawArrays(gl.LINE_STRIP, 0, 4);
}