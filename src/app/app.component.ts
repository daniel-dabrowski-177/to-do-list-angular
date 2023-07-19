import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('campaignName') campaignName: any = ElementRef;
  @ViewChild('keywords') keywords: any = ElementRef;
  @ViewChild('bidAmount') bidAmount: any = ElementRef;
  @ViewChild('campaignFund') campaignFund: any = ElementRef;
  @ViewChild('status') status: any = ElementRef;
  @ViewChild('town') town: any = ElementRef;
  @ViewChild('radius') radius: any = ElementRef;

  currentBalance: number = 200;
  title = 'Hello Seller!';
  list: any[] = [];

  addTask(
    campaignName: any,
    keywords: any,
    bidAmount: any,
    campaignFund: any,
    status: any,
    town: any,
    radius: any
  ) {
    // Check if balance is = 0 ? update it or send alert
    if (this.currentBalance - campaignFund >= 0) {
      this.currentBalance -= campaignFund;
      this.list.push({
        id: this.list.length,
        campaignName,
        keywords,
        bidAmount,
        campaignFund,
        status,
        town,
        radius,
      });
    } else {
      alert('Not enough funds!');
    }
  }

  // Removing task & updating new balance
  removeTask(id: number) {
    let campaignFund: number = Number(this.list[id].campaignFund);
    this.currentBalance += campaignFund;
    this.list = this.list.filter((item) => item.id !== id);
  }

  // Entering items into create form and delete existing item
  editTask(id: number) {
    // campaignName Input
    this.campaignName = this.campaignName.nativeElement.value =
      this.list[id].campaignName;

    // keywords Input
    this.keywords = this.keywords.nativeElement.value = this.list[id].keywords;

    // bidAmount Input
    this.bidAmount = this.bidAmount.nativeElement.value =
      this.list[id].bidAmount;

    // campaignFund Input
    this.campaignFund = this.campaignFund.nativeElement.value =
      this.list[id].campaignFund;

    // status Input
    this.status = this.status.nativeElement.checked = this.list[id].status;

    // town Input
    this.town = this.town.nativeElement.value = this.list[id].town;

    // radius Input
    this.radius = this.radius.nativeElement.value = this.list[id].radius;

    // removing item after editing
    let campaignFund: number = Number(this.list[id].campaignFund);
    this.currentBalance += campaignFund;
    this.list = this.list.filter((item) => item.id !== id);
  }
}
