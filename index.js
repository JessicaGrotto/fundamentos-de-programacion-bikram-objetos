//Interaciones Pair Programming
//Objetos
//Declaración
const coche = {
    marca: "Honda",
    modelo: "Fit",
    matricula: "1234ABC",
};

const casa = {
    codPostal: 28012,
    calle: "calle Mayor",
    portal: 3,
    piso: 7,
}

const FullStackDeveloper = {
    lenguajes: [phyton, js],
    proyectos: [proyecto1, proyecto2, proyecto3]
};

const Perro = {
    nombre: "Cachorro",
    raza: "Pincher",
    color: "amarillo",
    edad: 2,
    ladrar: function(){
        return console.log("Woof")
    },
    popo: function(){
        return Math.random()*3
    },
};

//Lectura de propriedades
const marcaPortatil = Portatil.marca;
const marcaPortatil2 = Portatil["marca"];
const grupos = Conciertos.grupos;
const RGB = [Led.rojo, Led.verde, Led.azul];

//Modificación de propriedades
Portatil.modelo = P345;
Concierto.cartelera.push("Gus N' Roses");
Concierto.fecha = new Date();
Impressora.imprimiendo = {
    nombreArquivo: "nombre",
    copias: 0,
    numPaginas: 3,
};

//Interaciones Pair Programming
//Objetos
//Declaración
const Noticia = {
    titular: "",
    cuerpo: "",
};
const Persona = {
    nombre: "",
    apellidos: "",
    edad: 0,
};
const Avion = {
    numPasajeros: 0,
    despegar: function(){
        return console.log("Despegando.")
    },
    volar: function(){
        return console.log("Llegando al destino.")
    },
    aterrizar: function(){
        return console.log("Aterrizando.")
    }
};
const Paquete = {
    contenido: []
};
const Pais = {
    numHabitantes: 0,
    continente: "",
    geltilicio: "",
};

//Lectura de propriedades
const codError = O_Error.codigo;
const integrantes = Grupo["integrantes"];
const nivelesTinta = Impressora.tinta;
const pixeles = Pantalla.pixeles;
const especificaciones = Movil["especificaciones"];

//Modificación de Propriedades
Grupo.numIntegrantes = 5;
Pantalla.dimensiones = "1920x1080";
Led.encendido = !Led.encendido;
Movil.temperatura = 20;


