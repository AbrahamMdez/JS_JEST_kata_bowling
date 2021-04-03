import { Bowling } from '../src/Bowling.js';

describe('Bowling Kata', () => {
    //Primer refactor, instanciar el objeto fuera de cada test y antes de cada test instanciarlo   
    let bowling;

    beforeEach(() => {
        bowling = new Bowling();
    });

    //Aqui extraemos la iteración y la metemos en una funcion, en la cual pasamos dos parametros, uno el numero de bolos y otro el numero de lanzamientos
    let addThrow = (pins, times) => {
        for(let i = 0; i < times; i++) {
            bowling.addThrow(pins);
        }
    };

    //Testeamos que en las primerad 20 tiradas el resultado sea 0, al no tirar bolo
    it('all throws, zero pins throw, should retunr 0 points', () => {
        /* let bowling = new Bowling(); */
        /* for(let i = 0; i < 20; i++) {
            bowling.addThrow(0);
        } */
        addThrow( 0, 20);
        
        expect(bowling.getScore()).toBe(0);
    });

    //Testeamos que tiramos 3 bolos en cada lanzamiento, un total de 20 lanzamientos
    it('Throw 3 pins on each one throw, should return 60 points ', () => {
        /* let bowling = new Bowling(); */
        /* for(let i = 0; i < 20; i++) {
            bowling.addThrow(3);
        } */

        addThrow( 3, 20);

        expect(bowling.getScore()).toBe(60);
    });

    //Testeamos que en 2 intentos, en el primer intento tira 5 bolos en dos tiradas y despues tira los 18 restantes hasta 20 y no tira ninguno mas
    it('2 tries throw 5 pins total and the rest of throws nothing, should return 10 points', () => {
        addThrow( 5, 2);
        addThrow( 0, 18);
        expect(bowling.getScore()).toBe(10);
    });

    //Calculamos una bonificacion de 3 bolos, que fueron tirados en 18 intentos.
    it('second tried, we throw 3 pins on each rest throw, it should return 64 points', () => {
        addThrow( 5, 2);
        addThrow( 3, 18);
        //Nos devuelve 64 y tenemos que modificar la forma de calcular en la clase
        expect(bowling.getScore()).toBe(10 + 3 + 18 * 3);
    });
});