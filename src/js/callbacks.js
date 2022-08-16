const heroes = {
    capi: {
        nombre: 'capitan america',
        poder: 'Utilizar traje'
    },
    ironman: {
        nombre: 'Iron Man',
        poder: 'Filantropo playboy'
    },
    spiderman: {
        nombre: 'Spiderman',
        poder: 'Ser el increible hombre araña'
    }
}


export const buscarHero = (id, callback) => {

    const heroe = heroes[id];


    callback(heroe)
}
