//2 

const operacao = process.argv[2]

switch(operacao){
	case "soma":
		console.log("Resposta:",Number(process.argv[3]) + Number(process.argv[4]))
		break;
	case "subt":
		console.log("Resposta:",Number(process.argv[3]) - Number(process.argv[4]))
		break;
    case "mult":
        console.log("Resposta:",Number(process.argv[3]) * Number(process.argv[4]))
        break;
    case "div":
		console.log("Resposta:",Number(process.argv[3]) / Number(process.argv[4]))
		break;
}

