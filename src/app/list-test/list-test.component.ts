import { Component } from '@angular/core';
import {TestService} from '../test.service'
@Component({
  selector: 'app-list-test',
  templateUrl: './list-test.component.html',
  styleUrls: ['./list-test.component.css']
})
export class ListTestComponent {
 list1:any

  constructor( private test:TestService){ 
    test.getList().subscribe((result)=>{
    console.log(result)
    this.list1=result
  })}
 
  deleteTest(id:number)
  {
      //console.warn(list)
     this.test.deleteTest(id).subscribe(()=>window.location.reload())
   
  }
  
}

 
   

 
