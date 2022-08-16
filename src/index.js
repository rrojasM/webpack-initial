import './styles.css';

import { buscarHero } from './js/callbacks';
const heroeId = 'capi'

buscarHero(heroeId, (heroe) => {
    console.log(heroe);
});



console.log('Fin del prigrama');