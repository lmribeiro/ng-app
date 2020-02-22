import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'status'
})
export class StatusPipe implements PipeTransform {

	transform(value: any, args?: any): any {
		let res = value;
		if(value == "1") {
			return "Active";
		}
		return "Inactive";
	}
}
