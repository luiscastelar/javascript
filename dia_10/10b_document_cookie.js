// 0. Las constantes y variables
const MI_COOKIE = "miCookie";

// 1. La captura
const TEXTO = document.querySelector("#texto");
const INPUT = document.querySelector("#dato");
const BOTON = document.querySelector("#boton");
const BORRAR = document.querySelector("#borrar");
const STATUS = document.querySelector("#status");

// 2. El procesado (las acciones)
const run = () => { // Al llegar a la web
    const valorCookie = getCookie(MI_COOKIE);
    console.log("La cookie al llegar: ",valorCookie);
    if (valorCookie !== undefined && valorCookie.length !== 0){
        console.log("Cookie value: ", valorCookie);
        STATUS.textContent = `La cookie 'miCookie' contiene '${valorCookie}'`;
        INPUT.value = valorCookie;
    } else {
        STATUS.textContent = "La cookie 'miCookie' NO existe";
    }
};

const borrarCookie = evento => {
    evento.preventDefault();
    console.log("Borrar cookie");
    deleteCookie(MI_COOKIE);
};

const actualizarCookie = evento => {
    evento.preventDefault();

    const valorCookie = getCookie(MI_COOKIE);
    
    console.log("Cookie value: ", valorCookie, valorCookie.length);

    const texto = INPUT.value;
    STATUS.textContent = `La cookie 'miCookie' contiene '${valorCookie}' => la modificamos con el valor: '${texto}'`;

    setCookie(MI_COOKIE, texto);
};


// 3. Los eventos (los desencadenantes)
BOTON.addEventListener("click", actualizarCookie);
BORRAR.addEventListener("click", borrarCookie);

// Llegada a la web
run(); 

// 4. Funciones auxiliares
/** Devuelve la cookie con el nombre dado, o undefined si no la encuentra 
 * 
 * @name El nombre de la cookie 
 * @returns El valor de la cookie
*/
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

/** Modifica una cookie
 * 
 * @name El nombre de la cookie
 * @value El valor
 * @attributes Extras (se sale del scope de este manual)
 */
function setCookie(name, value, attributes = {}) {
    attributes = {
        path: "/",
        // agregar otros valores predeterminados si es necesario
        //...attributes
    };

    if (attributes.expires instanceof Date) {
        attributes.expires = attributes.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let attributeKey in attributes) {
        updatedCookie += "; " + attributeKey;
        let attributeValue = attributes[attributeKey];
        if (attributeValue !== true) {
            updatedCookie += "=" + attributeValue;
        }
    }
    document.cookie = updatedCookie;
}
// Ejemplo de uso:
//setCookie('user', 'John', {secure: true, 'max-age': 3600});


/** Borra una cookie
 * 
 * @name La cookie a eliminar
 */
function deleteCookie(name) {
    setCookie(name, "", {
        "max-age": -1
    });
}