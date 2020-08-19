import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../service/transaction.service';
import { Data } from '@angular/router';
import { Chart } from 'chart.js';  

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
transactiontotal_arr:Data[]=[];
Player = [];  
Run = [];  
chart = [];  
  constructor(private transactionService:TransactionService) { }

  ngOnInit(): void {
    this.transactionService.getAllTransactionTotalByNopName().subscribe((data:Data[]) => {
      console.log(data);
      this.transactiontotal_arr = data;
      data.forEach(x => {  
        this.Player.push(x.nop_name);  
        this.Run.push(x.Total_Amt);  
      });
      this  
      this.chart = new Chart('canvas', {  
        type: 'doughnut',  
        data: {  
          labels: this.Player,  
          datasets: [  
            {  
              data: this.Run,  
              borderColor: '#3cba9f',  
              backgroundColor: [  
                "#3cb371",  
                "#0000FF",  
                "#9966FF",  
                "#4C4CFF",  
                "#00FFFF",  
                "#f990a7",  
                "#aad2ed",  
                "#FF00FF",  
                "Blue",  
                "Red",  
                "Blue"  
              ],  
              fill: true  
            }  
          ]  
        },  
        options: {  
          legend: {  
            display: true  
          },  
          scales: {  
            xAxes: [{  
              display: false  
            }],  
            yAxes: [{  
              display: true  
            }],  
          }  
        }  
      });  
      
    });
  }
}
