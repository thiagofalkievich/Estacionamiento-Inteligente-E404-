const plazas = [
    { id: 1, estado: "ocupado" },
    { id: 2, estado: "fuera-servicio" },
    { id: 3, estado: "ocupado" },
    { id: 4, estado: "libre" },
    { id: 5, estado: "libre" },
    { id: 6, estado: "libre" },
    { id: 7, estado: "libre" },
    { id: 8, estado: "fuera-servicio" }
];


/* CONTENEDOR DE PLAZAS */
const contenedor = document.getElementById("plazas");


/* CREAR PLAZAS */
plazas.forEach(plaza => {

    const divPlaza = document.createElement("div");

    divPlaza.classList.add("plaza");
    divPlaza.classList.add(plaza.estado);


    /* PLAZA OCUPADA */
    if (plaza.estado === "ocupado") {

        const auto = document.createElement("img");

        auto.src = "IMG/auto.png";
        auto.classList.add("auto");

        divPlaza.appendChild(auto);
    }


    /* PLAZA LIBRE */
    if (plaza.estado === "libre") {

        const icono = document.createElement("div");

        icono.textContent = "🚘";
        icono.classList.add("icono-libre");

        divPlaza.appendChild(icono);
    }


    /* PLAZA FUERA DE SERVICIO */
    if (plaza.estado === "fuera-servicio") {

        const icono = document.createElement("div");

        icono.textContent = "🛠️";
        icono.classList.add("icono-servicio");

        divPlaza.appendChild(icono);
    }


    /* NÚMERO DE PLAZA */
    const numero = document.createElement("span");

    numero.textContent = plaza.id;

    divPlaza.appendChild(numero);


    /* AGREGAR PLAZA AL HTML */
    contenedor.appendChild(divPlaza);
});


/* CONTADORES */
const total = plazas.length;

const libres = plazas.filter(
    plaza => plaza.estado === "libre"
).length;

const ocupados = plazas.filter(
    plaza => plaza.estado === "ocupado"
).length;

const fueraServicio = plazas.filter(
    plaza => plaza.estado === "fuera-servicio"
).length;


/* MOSTRAR CONTADORES */
document.getElementById("total").textContent = total;
document.getElementById("libres").textContent = libres;
document.getElementById("ocupados").textContent = ocupados;


/* HORA ACTUAL */
function actualizarHora() {

    const ahora = new Date();

    const horas = ahora
        .getHours()
        .toString()
        .padStart(2, "0");

    const minutos = ahora
        .getMinutes()
        .toString()
        .padStart(2, "0");

    document.getElementById("hora").textContent =
        `${horas}:${minutos}`;
}

actualizarHora();

setInterval(actualizarHora, 1000);


/* GRÁFICO DONA */
const ctx = document.getElementById("graficoDona");

new Chart(ctx, {

    type: "doughnut",

    data: {

        labels: [
            "Libres",
            "Ocupados",
            "Fuera de servicio"
        ],

        datasets: [{
            data: [
                libres,
                ocupados,
                fueraServicio
            ],

            backgroundColor: [
                "#22b455",
                "#c62828",
                "#f4c20d"
            ]
        }]
    }
});