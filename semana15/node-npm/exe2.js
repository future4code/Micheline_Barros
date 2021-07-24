//2 

const operacao = process.argv[2]

switch(operacao){
	case "soma":
		console.log("Resposta:",Number(process.argv[3]) + Number(process.argv[4]))
		break;
	case "sub":
		console.log("Resposta:",Number(process.argv[3]) - Number(process.argv[4]))
		break;
    case "mul":
        console.log("Resposta:",Number(process.argv[3]) * Number(process.argv[4]))
        break;
    case "div":
		console.log("Resposta:",Number(process.argv[3]) / Number(process.argv[4]))
		break;
}

