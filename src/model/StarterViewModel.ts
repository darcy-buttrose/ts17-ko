/// <reference path="../../typings/tsd.d.ts" />

import * as ko from "knockout";
import {Starter} from "./Starter";

export class StarterViewModel {
	code:KnockoutObservable<number>;
	name:KnockoutObservable<string>;
	constructor(starter:Starter) {
		this.code = ko.observable(starter.code);
		this.name = ko.observable(starter.name);
	}
}