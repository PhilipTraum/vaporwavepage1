function generatePoem() {
    var poemInput = document.getElementById('poemInput');
    var poemOutput = document.getElementById('poemOutput');

    var poemText = poemInput.value;

    // Aquí puedes agregar cualquier lógica para generar la poesía, como reemplazar palabras, añadir estilos, etc.
    var generatedPoem = '<pre>' + poemText + '</pre>';

    poemOutput.innerHTML = generatedPoem;
}