import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms'
import {TestService} from '../test.service'

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.css']
})
export class AddTestComponent {
  alert:boolean=false

  addTest =new FormGroup({
    testName: new FormControl('')
  }) 

  constructor(private test:TestService) {
    
  }
 

  ngOnInit():void {

  }
  collectTest()
  {
   
    this.test.postTest(this.addTest.value).subscribe((result:object)=>{
    

    this.alert=true
    this.addTest.reset({})
    })
    

   
   
  }
 
  
}



