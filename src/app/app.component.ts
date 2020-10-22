import {
  Component,
  Input,
  OnInit
} from '@angular/core';
import {
  APICallerService
} from './apicaller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'IntegrationBackendFrontend';
  placeId = '';

  boards: [];

  charging: boolean;

  constructor(private apiCallerService: APICallerService) {
    this.charging = true;
  }

  ngOnInit(): void {
    this.charging = true;
    this.getAllBoards();
  }

  getAllBoards(): void {
    this.apiCallerService.getBoards().subscribe(val => {
      {
        this.boards = val;
        this.charging = false;
      }
    });
  }


  putABoard(board: string): void {
    this.charging = true;
    this.apiCallerService.createBoard(board).subscribe(val => {
      this.getAllBoards();
      this.placeId = '';
    });
  }

}
