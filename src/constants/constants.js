
// =================================================================================
export class Settings {
    
    static endpoint = './src/json/proyectos.json';

    static offSetHorizontalElementos = 50;
    static contador = undefined;

    static valores_iniciales = {
        
        carets_h2: [
            ['h2Contenedor', false],
            ['h2Contenedor', false],
            ['h2Contenedor', false],
            ['h2Contenedor', false]
        ]
    };

    static mis_lenguajesImg = [
        './assets/img/astro-logo.svg',
        './assets/img/html-1.svg',
        './assets/img/css-3.svg',
        './assets/img/javascript-1.svg',
        './assets/img/jquery-444684.svg',
        './assets/img/react-2.svg',
        './assets/img/java.svg',
        './assets/img/python-4.svg',
        './assets/img/node-js-736399.svg',
        './assets/img/vite.svg'
    ];

    static misTitulos = {
        html: {
            id: "titulo-html",
            href: "./titulo-frontend.html",
            texto: "HTML5 y CSS3"
        },
        react: {
            id: "titulo-react",
            href: "./titulo-react.html",
            texto: "JavaScript Avanzado"
        },
        java: {
            id: "titulo-java",
            href: "./titulo-appweb-java.html",
            texto: "Desarrollo apps web Java"
        }
    };
}
