import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private LOGO = require("../assets/Penguins.jpg");
  private bestFromWaste = require("../assets/bestfromwaste.png");
  private tribologi = require("../assets/tribologi.png");
  private generalquiz = require("../assets/generalquiz.png");
  private ELOGO=require("../assets/Penguins.jpg");
  constructor() { }
  public headerName:any;
  public content:any='\n';
  ngOnInit() {
  }
  public opentribology():void{
    this.headerName="Tri Bology";
    this.ELOGO=this.tribologi;
    this.content=` 
    
    <br/>
    Welcome to the fascinating world of Electrical and Electronics Circuits and discover the phase of your journey. In the area of E&E circuits the occurrence of errors is common and it is a complicated task to locate and troubleshoot the errors in the circuit. Here we are providing opportunities for the students to express their technical skills in the field of E&E designing and circuit trouble shooting.
    <br/><br/>
    Rules:<br/>
    1. Problem statement will be given on 1st day.<br/>
    2. Working model demonstration on last day and it is a must.
    <br/>
    3. Any component can be used (Other than Logic Gates & Programmable Devices).<br/>
    <br/>
    Event charges: Rs.60/- per team<br/>
    <br/>
    ​Staff Coordinator:<br/>
    Prof. Varaprasad G<br/>
    <br/>
    Student Coordinator:<br/>
    Mr. Pramod Pawar<br/>`;
  }

  openBestFromWaste():void{
    this.headerName="Best From Waste";
    this.ELOGO=this.bestFromWaste;
    this.content=` 
    Rules:<br/>
    1. Use of waste material to create theme or project.<br/>
    2. Project or theme must be done on the spot within stipulated time.<br/>
    3. Candidates should bring their own material.<br/>
    Example:making models and products out of waste,solar heaters,use of wind mill<br/>
    energy, making scientific projects out of waste.<br/>
    4.Maximum 3 members in a team.                <br/>
    <br/>
    Event charges: Rs.50/- per team<br/>
    <br/>
    Staff Coordinators:<br/>
    1.Prof.Shankar Badiger<br/>
    2.Prof.Anant Joshi<br/>
    3.Prof.Vinay Bilgimath<br/>
    <br/>
    Student co-ordinators:<br/>
    1.Mr.Raghavendra Pattar    &nbsp; &nbsp;&nbsp;                  8747046505<br/>
    2.Ms.Priyanka<br/>
    3.Mr.Shivareddy<br/>
    4.Mr.Rohit       <br/>`;
  }
  openGeneralQuiz():void{
    this.headerName="General Quiz";
    this.ELOGO=this.generalquiz;
    this.content=` 
    Rules: <br/>
    1. Two members from each group. <br/>
    2. Shortlisted groups will be sent to second round. <br/>
    3. Judges decision will be final. <br/>
    <br/>
    Event charges:Rs.20/- per team <br/>
    <br/>
    Staff coordinators: <br/>
    ​1. Prof. Naveen S Hiremath <br/>
    2. Prof. R J Talapati <br/>
    3. Prof Gurunath M. <br/>
    <br/>
    Student Coordinators: <br/>
    1.Parag Bhat                                         9145477595
    2.Sumedh N
    <br/>`;
  }
}
