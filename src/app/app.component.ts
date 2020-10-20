import {Component, Input, OnInit} from '@angular/core';
import {APICallerService} from './apicaller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'IntegrationBackendFrontend';
  placeId = '';

  boards: [];

  constructor(private apiCallerService: APICallerService) {
  }

  ngOnInit(): void {
    this.getAllBoards();
  }

  getAllBoards(): void {
    this.apiCallerService.getBoards().subscribe(val => {
      {
        this.boards = val;
      }
    });
  }


  putABoard(board: string): void {
    this.apiCallerService.createBoard(board).subscribe(val => {
      this.getAllBoards();
    });
  }

}
