import * as components from './components/indexPadre.js';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' }); //Encapsular el codigo y
		// permitir que el DOM encuentre nuestra nueva clase
	}

	//Cuando el componente se carga en el DOM hace lo que le indiquemos
	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
		 <link rel="stylesheet" href="./src/index.css">

   <nav-bar
		
			img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-9jprALW9id1NWGp8fSOXkHrLb756jsHBWg&s"

	></nav-bar>



    <product-card
      img="https://upload.wikimedia.org/wikipedia/commons/b/b1/Call_of_Duty_Mobile_Logo.png"
      description="Obligados a revelarse. Perseguidos desde dentro"

    ></product-card>


	 




	<div id="cartas-completas">

	<div class= "box-title">
		<h1 class="titulo">ÚLTIMAS NOTICIAS Y ÁRTICULOS</h1>
	</div>

	 <categorie-logo
		
	></categorie-logo>
	<div id="cartas">


	
	<big-card
		img =  "src/fotos/foto1.png"
		date = "AUG 08,2024"
		title = "Modo Zombis de Black Ops 6:"
		>
		
		
	</big-card>

	<big-card
		img =  "src/fotos/foto2.png"
		date = "AUG 08,2024"
		title = "Modo Zombis de Black Ops 6: qué necesitas saber"
		>
		
		
	</big-card>

	<big-card
	
		img =  "src/fotos/foto3.png"
		date = "AUG 08,2024"
		title = "Modo Zombis de Black Ops 6: qué necesitas saber"
		>
		
		
	</big-card>

        </div>

	

	<div id="cartas">


	
	<big-card
		img =  "src/fotos/foto4.png"
		date = "AUG 08,2024"
		title = "Modo Zombis de Black Ops 6: qué necesitas saber"
		>
		
		
	</big-card>

	<big-card
		img =  "src/fotos/foto5.png"
		date = "AUG 08,2024"
		title = "Modo Zombis de Black Ops 6: qué necesitas saber"
		>
		
		
	</big-card>

	<big-card
		img =  "src/fotos/foto6.png"
		date = "AUG 08,2024"
		title = "Modo Zombis de Black Ops 6: qué necesitas saber"
		>
		
	</big-card>

        </div>

	<div class= "box-button">
		<div class="button">VER TODO</div>
	</div>

	
		</div>

	<call-to-action
		title = "¡ESTAMOS AQUÍ PARA AYUDAR!"
		description ="Obtén respuestas a las preguntas más frecuentes, comprueba el estado del servidor y contacta con alguien experto en asistencia técnica."
		txtbutton ="VISITAR SERVICIO TECNICO"
		img =  "src/fotos/fondolargo.png"



	></call-to-action>

	<div class= "box-title2">
		<h1 class="titulo">COMUNIDAD</h1>
	</div>



	<div class= "post-completos">
		<post-card
		   img =  "src/fotos/post1.png"
           logo =  "src/fotos/instagram-logo.png"
            
        ></div>
		<post-card
		   img =  "src/fotos/post2.png"
           logo =  "src/fotos/instagram-logo.png"
            
        ></div>
		<post-card
		   img =  "src/fotos/post3.png"
           logo =  "src/fotos/instagram-logo.png"
            
        ></div>
		
	</div>


	<call-to-action2
		title = "Diviértete"
		description ="Más información sobre las oportunidades de empleo"
		txtbutton ="UNETE A NOSOTROS"
		img =  "src/fotos/fondolargo.png"
		title2 ="NUESTROS EQUIPOS"
		description2="Diseño de juego
		Gráficos y animación
		Gestion de marca
		Producción
		Control de calidad"
		description3="Asistencia al cliente
		Operaciones del estudio
		Programación
		Finanzas y contabilidad
		Recursos humanos"



	></call-to-action2>


	




     
    `;
	}
}

customElements.define('app-container', AppContainer);