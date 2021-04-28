function adicionaTarefa () {

    const inputTarefa = document.getElementById("tarefa");
    let diaDaSemana = document.getElementById("dias-semana").value;

    if (diaDaSemana == "domingo") {

        let diaDaTarefa = document.getElementById("domingo");
        diaDaTarefa.innerHTML += `<p>${inputTarefa.value}</p>`
        inputTarefa.value = "";

    } else if (diaDaSemana=="segunda"){

        let diaDaTarefa = document.getElementById("segunda");
        diaDaTarefa.innerHTML += `<p>${inputTarefa.value}</p>`
        inputTarefa.value = "";

    } else if (diaDaSemana == "terca"){

        let diaDaTarefa = document.getElementById("terca");
        diaDaTarefa.innerHTML += `<p>${inputTarefa.value}</p>`
        inputTarefa.value = "";

    } else if (diaDaSemana == "quarta"){

        let diaDaTarefa = document.getElementById("quarta");
        diaDaTarefa.innerHTML += `<p>${inputTarefa.value}</p>`
        inputTarefa.value = "";

    } else if (diaDaSemana == "quinta"){

        let diaDaTarefa = document.getElementById("quinta");
        diaDaTarefa.innerHTML += `<p>${inputTarefa.value}</p>`
        inputTarefa.value = "";

    } else if (diaDaSemana == "sexta"){

        let diaDaTarefa = document.getElementById("sexta");
        diaDaTarefa.innerHTML += `<p>${inputTarefa.value}</p>`
        inputTarefa.value = "";

    } else {

        let diaDaTarefa = document.getElementById("sabado");
        diaDaTarefa.innerHTML += `<p>${inputTarefa.value}</p>`
        inputTarefa.value = "";

    }
}



