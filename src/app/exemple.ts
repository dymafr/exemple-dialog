import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog';

@Component({
  selector: 'app-exemple-component',
  templateUrl: 'exemple.html',
  styleUrls: ['exemple.scss'],
})
export class ExempleComponent {
  public plat!: string;
  public nom: string = 'Bob';

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { nom: this.nom, plat: this.plat },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.plat = result;
    });
  }
}
