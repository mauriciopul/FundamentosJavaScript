//Estructura de control SWITCH

var signo = prompt('¿Cuál es tu signo?')

switch (signo) {
    case 'aries':
        console.log(`No importa lo que haya pasado, superarás los problemas.`)
        break;
    case 'tauro':
        console.log(`En tus manos y voluntad está el poder cambiar tu realidad.`)
        break;
    case 'geminis':
    case 'géminis':
        console.log(`Recuperas lo que pensaste no ibas a volver a tener en tus manos. `)
        break;
    case 'cancer':
    case 'cáncer':
        console.log(`Sucederán cosas realmente interesantes en tu vida afectiva.`)
        break;
    case 'leo':
        console.log(`Das pasos concretos en un nuevo camino sentimental.`)
        break;
    case 'virgo':
        console.log(`Tu vida íntima adquiere una nueva dimensión emocional. `)
        break;
    case 'libra':
        console.log(`Tiempo de efectuar cambios necesarios en tu vida.`)
        break;
    case 'escorpion':
    case 'escorpión':
        console.log(`Lo difícil ahora se vuelve fácil y se agilizan las soluciones`)
        break;
    case 'sagitario':
        console.log(`Eclipse de Sol, hay un nuevo despertar dentro de tu vida afectiva`)
        break;
    case 'capricornio':
        console.log(`Se abre una nueva etapa amorosa en tu vida íntima.`)
        break;
    case 'acuario':
        console.log(`Inicias una nueva vida dentro de tu realidad sentimental.`)
        break;
    case 'piscis':
        console.log(`El entusiasmo que ahora te envuelve te ayudará a salir bien de tus dificultades`)
        break;

    default:
        console.log(`Debes ingresar un signo zodiacal válido`)
        break;
}











