setScreen("tela3_telaInicial");
onEvent("botao1_Tarea", "click", function( ) {
setScreen("tela1_triangulo");
triangulo();
});
onEvent("botao2_Sarea", "click", function( ) {
setScreen("tela2_quadrado");
quadrado();
});
onEvent("botao3_Speri", "click", function( ) {
setScreen("tela2_quadrado");
quadrado();
});
function triangulo() {
penColor("blue");
penWidth(5);
penUp();
moveTo(60, 300);
penDown();
turnRight(90);
moveForward(200);
turnLeft(120);
moveForward(200);
turnLeft(120);
moveForward(200);
hide();
}
function quadrado(){
penColor("yellow");
penWidth(5);
penUp();
moveTo(60, 300);
moveForward(200);
turnRight(90);
moveForward(200);
turnRight(90);
moveForward(200);
turnRight(90);
moveForward(200);
turnRight(90);
hide();
}
function AreaTriangulo() {
return (0.5 * (getNumber("caixa_texto2_alturaTriangulo") * getNumber("caixa_texto3_baseTriangulo")));
}
function QuadradoArea(){
return (getNumber("caixa_texto1_comprimentoQuadrado") * getNumber("caixa_texto1_comprimentoQuadrado"));
}
function QuadradoPerimetro(){
return (4 * getNumber("caixa_texto1_comprimentoQuadrado"));
}
onEvent("caixa_texto3_baseTriangulo", "input", function( ) {
  setText("caixa_texto4_AreaT", "A area é " + AreaTriangulo());
});
onEvent("caixa_texto1_comprimentoQuadrado", "input", function( ) {
  setText("caixa_texto4_areaQuadrado", "A area é " + QuadradoArea());
  setText("caixa_texto5_perimetroQuadrado", "O perimetro é " + QuadradoPerimetro());
});
onEvent("button1", "click", function( ) {
  setScreen("tela3_telaInicial");
});
onEvent("button2", "click", function( ) {
  setScreen("tela3_telaInicial");
});


