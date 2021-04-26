import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { DVDService } from '../services/DVD.service'

@Component({
  selector: 'app-add-DVD',
  templateUrl: './add-DVD.component.html',
  styleUrls: ['./add-DVD.component.css'],
})
export class AddDVDComponent implements OnInit {
  addDVDForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    director: new FormControl('', [Validators.required]),
    score: new FormControl('', [Validators.required, Validators.pattern("[+-]?([0-9]*[.])?[0-9]+")]),
    
  })
  constructor(
    private DVDService: DVDService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addDVD() {
    const DVD = this.addDVDForm.value
    this.DVDService.addeDVD(DVD).subscribe(
      () => {
        console.log('Successfully created!')
        this.router.navigateByUrl('/DVD-list')
      },
      (error) => {
        console.log(error)
      }
    )
  }
}
