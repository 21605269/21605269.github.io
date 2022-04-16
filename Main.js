import  Game  from './Model/Game.js';
import  View  from './View/View.js';
import  Controller  from './Controller/Controller.js';

const app= new Controller(new Game(),new View(ctx))