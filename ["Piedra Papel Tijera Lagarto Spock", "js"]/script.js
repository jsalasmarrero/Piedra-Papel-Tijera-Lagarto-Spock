function aleatorio (minimo, maximo) {
	 var numero = Math.floor(Math.random()*(maximo - minimo +1) + minimo);
	 return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;
var lagarto = 3;
var spock = 4;

var opciones = ["piedra","papel","tijera","lagarto","spock"];
//Como accedo a cualquier elemento del array de arriba?
// alert(opciones[1]); --> Con esto accedo a Papel

var opcionUsuario;
var srJavascript = aleatorio(0,4);

opcionUsuario = prompt("¿Que eliges?\n Piedra(0)\n Papel(1) \n Tijera(2) \n Lagarto(3) \n Spock(4)", 0);

alert("Elegiste: " + opciones[opcionUsuario]);
alert("Javascript eligio: "+ opciones[srJavascript]);

if (opcionUsuario == piedra) 
{
	if (srJavascript == piedra) 
	{
		alert("¡Es un Empate!");
	}
	else if (srJavascript == papel) 
	{
		alert("¡Tu Pierdes! Papel tapa a Piedra");
	}
	else if (srJavascript == tijera) 
	{
		alert("¡Tu Ganas! Piendra aplasta a las Tijeras");
	}
	else if (srJavascript == lagarto) 
	{
		alert("¡Tu Ganas! Piedra aplasta a Lagarto");
	}
	else if (srJavascript == spock) 
	{
		alert("¡Tu Pierdes! Spock vaporiza a Piedra");
	}
} 
else if (opcionUsuario == papel) 
{
		if (srJavascript == piedra) 
	{
		alert("¡Tu Pierdes! Papel tapa a Piedra");
	}
	else if (srJavascript == papel) 
	{
		alert("¡Es un Empate!");
	}
	else if (srJavascript == tijera) 
	{
		alert("¡Tu Pierdes! Tijeras cortan al Papel" );
	}
	else if (srJavascript == lagarto) 
	{
		alert("¡Tu Pierdes! Lagarto devora Papel");
	}
	else if (srJavascript == spock) 
	{
		alert("¡Tu Ganas! Papel desautoriza a Spock");
	}
} 
else if (opcionUsuario == tijera) 
{
		if (srJavascript == piedra) 
	{
		alert("¡Tu Pierdes! Piedra aplasta las Tijeras");
	}
	else if (srJavascript == papel) 
	{
		alert("¡Tu Ganas! Tijeras cortan al Papel");
	}
	else if (srJavascript == tijera) 
	{
		alert("¡Es un Empate!");
	}
	else if (srJavascript == lagarto) 
	{
		alert("¡Tu Ganas! Tijeras decapitan al Lagarto");
	}
	else if (srJavascript == spock) 
	{
		alert("¡Tu Pierdes! Spock rompe las Tijeras");
	}
}
else if (opcionUsuario == lagarto) 
{
		if (srJavascript == piedra) 
	{
		alert("¡Tu Pierdes! Piedra aplasta al Lagarto");
	}
	else if (srJavascript == papel) 
	{
		alert("¡Tu Ganas! Lagarto devora al Papel");
	}
	else if (srJavascript == tijera) 
	{
		alert("¡Tu Pierdes! Tijeras decapitan al Lagarto");
	}
	else if (srJavascript == lagarto) 
	{
		alert("¡Es un Empate!");
	}
	else if (srJavascript == spock) 
	{
		alert("¡Tu Ganas! Lagarto envenena a Spock");
	}
}
else if (opcionUsuario == spock) 
{
		if (srJavascript == piedra) 
	{
		alert("¡Tu Ganas! Spock vaporiza la Piedra");
	}
	else if (srJavascript == papel) 
	{
		alert("¡Tu Pierdes! Papel desautoriza a Spock");
	}
	else if (srJavascript == tijera) 
	{
		alert("¡Tu Ganas! Spock rompe Tijeras");
	}
	else if (srJavascript == lagarto) 
	{
		alert("¡Tu Pierdes! Lagarto envenena a Spock");
	}
	else if (srJavascript == spock) 
	{
		alert("¡Es un Empate!");
	}
} 
else
{
	alert("No se quiera pasar de verga, esa no es una opcion valida >:v");
}