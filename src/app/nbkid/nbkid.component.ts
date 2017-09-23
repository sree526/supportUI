import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NBKIDService} from '../services/addService';
@Component({
  selector: 'app-nbkid',
  templateUrl: './nbkid.component.html',
  styleUrls: ['./nbkid.component.css']
})
export class NbkidComponent implements OnInit {
  public nbkId= ""

  constructor(private router: Router,private addNbkIdService:NBKIDService) { }

  ngOnInit() {
  }
 addNbkId(addNbkidForm) {
   console.log(addNbkidForm)
   if(this.nbkId!=undefined && this.nbkId!=''){
     console.log(addNbkidForm);
     let data = {
      "nbkId": this.nbkId, 
    }
    this.addNbkIdService.addNbkId(data).subscribe(response=>{response
     this.router.navigate(['/applications']);
    })

   }
 
 }
}
