import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DVDService } from '../services/DVD.service';

@Component({
  selector: 'app-delete-DVD',
  templateUrl: './delete-DVD.component.html',
  styleUrls: ['./delete-DVD.component.css'],
})
export class DeleteDVDComponent implements OnInit {
  DVDs: any = [];

  constructor(
    private router: Router,
    private DVDService: DVDService
  ) {}

  ngOnInit(): void {
    this.getDVDs();
  }

  getDVDs() {
    this.DVDService.getDVDs().subscribe((data) => {
      this.DVDs = data;
    });
  }

  deleteDVD(index) {
    var id = this.DVDs[index]._id;
    this.DVDService.deleteDVD(id).subscribe(
      () => {
        console.log('DVD deleted successfully!');
        this.ngOnInit();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
