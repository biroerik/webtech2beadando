import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { DVDService } from '../services/DVD.service'

@Component({
  selector: 'app-DVD-list',
  templateUrl: './DVD-list.component.html',
  styleUrls: ['./DVD-list.component.css'],
})
export class DVDListComponent implements OnInit {
  DVDs: any = []

  constructor(
    private router: Router,
    private DVDService: DVDService
  ) {
    this.getDVDs()
  }

  ngOnInit(): void {}

  getDVDs() {
    this.DVDService.getDVDs().subscribe((data) =>{
      this.DVDs = data
    })
  }

  editDVD(index){
    var id = this.DVDs[index]._id
    this.router.navigate(['/edit-DVD/:' + id])
  }
}
