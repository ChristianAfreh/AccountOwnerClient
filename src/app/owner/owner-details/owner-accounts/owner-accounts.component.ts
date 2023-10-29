import { Component, Input, OnInit } from '@angular/core';
import { Account } from 'src/app/_interfaces/account.model';

@Component({
  selector: 'app-owner-accounts',
  templateUrl: './owner-accounts.component.html',
  styleUrls: ['./owner-accounts.component.css'],
})
export class OwnerAccountsComponent implements OnInit {
  @Input() accounts: Account[];

  constructor() {}

  ngOnInit(): void {}
  
}
