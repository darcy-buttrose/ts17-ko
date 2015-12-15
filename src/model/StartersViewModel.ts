/// <reference path="../../typings/tsd.d.ts" />

import * as ko from "knockout";
import {Starter} from "./Starter";
import {StarterViewModel} from "./StarterViewModel";

export class StartersPageViewModel {
	starters: KnockoutObservableArray<StarterViewModel>;
	constructor(starters:Array<Starter>) {
		this.starters = ko.observableArray(starters.map((starter) => {
			return new StarterViewModel(starter);
		}));
	}
}