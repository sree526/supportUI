import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appShowhide]'
})
export class ShowhideDirective {

 @HostBinding() type: string;
     
    constructor(){
        this.type='password';
    }
    
    changeType(type:string): void {
        this.type = type;
    }

}
