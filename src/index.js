/*jshint esversion:6*/
import _ from 'lodash';
import './assets/css/ss1.scss';
import {cube} from './model/match.js';

function component(){
	let element = document.createElement('p');
	element.innerHTML = _.join(['hello doubi','5*5=',cube(5)],'-');
	return element;
}
let element = component();
document.body.appendChild(element);
