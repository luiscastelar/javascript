// 0. Las constantes y variables
const URL_NORMAL = "https://luis-ferreira.es/2024/lmsgi/holaMundo.json";
const URL_CON_CORS = "https://lmsgi.luis-ferreira.es/holaMundo.json";

// 1. La captura
const URL = document.querySelector("#url");
const BOTON = document.querySelector("#boton");
const STATUS = document.querySelector("#status");
const ERROR = document.querySelector("#errores");

// 2. El procesado (las acciones)
// fetch !!!
const pedir = async e => {
    e.preventDefault();    

    // 2.1 fetch (la petición)
    //      obtiene devuelve una respuesta que se procesa en ".then()"
    //      o un error que se procesa en ".catch()"
    const resp = await fetch(URL.value)
        let json;
        // 2.2 then - Procesado de la respuesta
        STATUS.textContent = resp;
        if (resp.ok === true){
            // 2.3 if ok -> resp.json()
            console.log("La respuesta completa: ", resp);
            json = await resp.json(); // devolvemos la carga útil
        } else {
            // 2.4 if NO ok -> throw error (resp)
            throw {"resp": resp, "status": resp.status };
        }

        // 2.5 then json -> JSON.stringify(json) -> string
        // json es un objeto al que podemos acceder a sus atributos
        STATUS.textContent = JSON.stringify(json);
        console.log("La carga útil de la respuesta: ", json);
        console.log(`Por partes:
            El saludo: ${json.saludo}
            El receptor: ${json.receptor}`
        );
    
};


// 3. Los eventos (los desencadenantes)
BOTON.addEventListener("click", pedir);
