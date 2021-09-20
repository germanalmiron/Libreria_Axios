//Consumo de libreria Externa mediante la libreria Axios.

(() => {

    //Declaro las variables.

    const $requestAxios=document.getElementById("requestAxios"),
    $fragmento=document.createDocumentFragment();

    //Implemento Axios. Objeto Axios

    axios.get("http://jsonplaceholder.typicode.com/users")

    //Implemento Axios con .then . catch . finally

    .then ((res)=>{
    console.log(res);
        let jsondata = res.data;
        jsondata.forEach(element =>{
            const $li=document.createElement("li");
            $li.innerHTML=`${element.name}--${element.email}--${element.phone}--${element.website}<br><br>`
            $fragmento.appendChild($li);
            //console.log($fragmento)
        });

        //Realiza una inserción en el DOM
        $requestAxios.appendChild($fragmento)

    })
    .catch((err)=>{
        //console.log ("Gestionando el Error, err")
        let mensaje = err.statusText || "Ocurrio un error";
        $fetchAsync.innerHTML=`ERROR ${err.status}:${mensaje}`;
    })
    .finally()
        console.log("Este código se ejecuta de igual manera, independientente del try..catch");

})();
