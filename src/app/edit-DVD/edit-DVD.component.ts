import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { DVDService } from '../services/DVD.service'

@Component({
  selector: 'app-edit-DVD',
  templateUrl: './edit-DVD.component.html',
  styleUrls: ['./edit-DVD.component.css'],
})
export class EditDVDComponent implements OnInit {
  editDVDForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    director: new FormControl('', [Validators.required]),
    score: new FormControl('', [Validators.required, Validators.pattern("[+-]?([0-9]*[.])?[0-9]+")]),
    
  })

  constructor(
    private router: Router,
    private DVDService: DVDService
  ) {
    this.createForm()
  }

  ngOnInit(): void {}

  createForm() {
    const id = this.router.url.split(':')[1]

    this.DVDService.getDVD(id).subscribe((data) => {
      this.editDVDForm = new FormGroup({
        title: new FormControl('', [Validators.required]),
        date: new FormControl('', [Validators.required]),
        director: new FormControl('', [Validators.required]),
        score: new FormControl('', [Validators.required, Validators.pattern("[+-]?([0-9]*[.])?[0-9]+")]),
    
      })
    })
  }

  editDVD() {
    const id = this.router.url.split(':')[1]
    const newDVD = this.editDVDForm.value

    this.DVDService.updateDVD(id, newDVD).subscribe(
      () => {
        console.log('DVD updated successfully!')
        this.router.navigateByUrl('/DVD-list')
      }, (error) => {
        console.log(error)
      })

  }

  cancel(){
    this.router.navigateByUrl('/DVD-list')
  }
}
