
/**
 * Esta funcion me permite extraer el valor de la carta seleccionada
 * @param {String} carta El strig de la carta seleccionada
 * @returns {Number} Valor numerico de la carta
 */


export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}





