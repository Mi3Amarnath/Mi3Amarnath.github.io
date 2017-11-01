import { Component , trigger,
  state,
  style,
  transition,
  animate,
  keyframes} from '@angular/core';
import { DataServiceService } from './data-service.service';
import { SidenavComponent } from './sidenav/sidenav.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DataServiceService],
  animations: [
    
            trigger('focusPanel', [
                state('inactive', style({
                    transform: 'scale(1)',
                    backgroundColor: '#eee'
                })),
                state('active', style({
                    transform: 'scale(1.1)',
                    backgroundColor: '#cfd8dc'
                })),
                transition('inactive => active', animate('100ms ease-in')),
                transition('active => inactive', animate('100ms ease-out'))
            ]),
    
        ]
})
export class AppComponent {
  title = 'Project Title';
  private aavishkar= require("./assets/aavishkar.png");
  private bglogo= require("./assets/body-bg.jpg");
  private EventLogo=this.bglogo;
  private bestFromWaste = require("./assets/bestfromwaste.png");
  private tribologi = require("./assets/tribologi.png");
  private generalquiz = require("./assets/generalquiz.png");
  private eventbg = require("./assets/eventbg.png");
  private applogo = require("./assets/app-logo.png");
  private qrcode = require("./assets/qrcode.png");
  private fbtroll = require("./assets/vdrittroll.jpg");
  private fbofficial=require("./assets/vdritofficial.jpg");
  constructor(private _dataService:DataServiceService ){

  }
   openNav() { 
    document.getElementById("mySidenav").style.width = "250px";
}

 closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
  changeTitle(){
    this.title = this._dataService.getTitle();
  }

  opentab(tab:any):void{
      
  }
  ngOnInit() {
  //  this.title = this._dataService.getTitle();
}
homeState: boolean =true;
andriodState: boolean =false;
fbState:boolean =false;
public content:any='\n';
public eventContent:any='\n';
    toggleMove(compState:any) {
      console.log(compState);
      if(compState === 'home'){
        this.homeState = true;
        this.andriodState=false;
        this.fbState=false;
      }
      else if(compState === 'andriod'){
        this.homeState = false;
        this.andriodState=true;
        this.fbState=false;
      }

      else if(compState === 'fb'){
        this.homeState = false;
        this.andriodState=false;
        this.fbState=true;
      }
        

    }
    public paperPresentation(branch:string):void
    {
      if(branch==='science')
      {
        this.content=`
        <div class="paragraph" style="text-align:left;"><font color="#da4444"><span style="font-weight:400"><span style="font-weight:400"><font size="6"><strong><span>&nbsp;&nbsp;&nbsp; TOPICS</span></strong></font></span></span></font><font size="6"><strong><font color="#da4444">&#65279;:</font></strong></font><br /><br /><font size="4"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1.Photonics: Theory and its applications.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2.Physics of Micro &amp; Molecular Electronic Devices.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.Conquering Metallic Corrosion.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4. Green Chemistry in Technology.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5.Applications of Differential equations in Mathematical Modelling.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6.Transformation techniques in Engineering</strong></font>.<br /><br /><strong><font size="4" color="#f80707">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <font size="5">Rules:</font><br /></font></strong><font size="4"><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. The format of paper must be in Time New Roman with font size 12,1.5 - line spacing<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; in MS-Word format must not exceed 8 pages.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. 2 participants in each team.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3. Time limit: 10Mins for&nbsp; presentation and 2Mins for discussions.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4. Registration fees Rs.200/- per team</font><br /><font size="4"><strong><font color="#f80707">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br /><font size="5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Staff Co-ordinators:</font></font></strong><br /><strong><font size="3" color="cyan">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <font size="4">1. Dr. Anita.R.Shettar&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cell:9844829591</font></font><br /><font color="#3f3f3f"><font color="cyan">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. Dr. Satish.Hande &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Cell:8050425503</font></font></strong></font><br /><br /><font size="4"><strong><font color="#f80707"><font size="5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Student Co-ordinator:</font></font></strong><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font size="3">&nbsp;<font size="4"><strong>&nbsp; <font color="cyan">1.</font></strong></font></font><strong><strong> Deepa.Amingad&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <font color="cyan">Cell:</font>7411156524</strong></strong></font><br /><font size="4"><strong><font size="3" color="cyan">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </font></strong></font><br /><font size="5"><font color="#5848b7"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Mail id:</strong></font><span><font color="#5fa233"><strong>&#65279;aavishkaarbs@gmail.com</strong></font></span></font><br /></div>
        </div>
        
        
        `;
      }
      else if(branch=='civil')
      {
        this.content=`
        <div class="paragraph" style="text-align:left;"><strong><em><font size="6" color="#f80707">&nbsp; </font></em><u><font size="6" color="#f80707">TOPICS</font></u></strong><br /><font size="4"><strong>&nbsp;&nbsp;&nbsp; 1. Urban transport planning.</strong></font><br /><font size="4"><strong>&nbsp;&nbsp;&nbsp; 2. Recent innovations in soil stabilization.</strong></font><br /><font size="4"><strong>&nbsp;&nbsp;&nbsp; 3. Use of green materials in the construction of buildings.</strong></font><br /><font size="4"><strong>&nbsp;&nbsp;&nbsp; 4. Remote sensing and GIS applications in Civil Engineering field.</strong></font><br /><font size="4"><strong>&nbsp;&nbsp;&nbsp; 5. Innovations in air quality monitoring.</strong></font><br /><font size="4"><strong>&nbsp;&nbsp;&nbsp; 6. Recent innovations in artificial recharge of ground water exploration.</strong></font><br /><font size="4"><strong>&nbsp;&nbsp;&nbsp; 7. Sedimentation analysis using GIS and remote sensing</strong></font>.<br /><br /><font size="6"><strong><font color="#f80707">&nbsp;&nbsp;&nbsp; Rules:</font></strong></font><br /><font style="font-weight:normal" size="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. The competition is open to all students of BE in Civil.</font><br /><font style="font-weight:normal" size="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. Team can have maximum of 2 participants.</font><br /><font style="font-weight:normal" size="3">&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; 3. Registration Fees for each group Rs.200/-.</font><br /><font style="font-weight:normal" size="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4. The presentation time is 10 mins and queries 2 mins for each paper.</font><br /><font style="font-weight:normal" size="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5. Candidates should submit the softcopy of the full paper in IEEE format, to our mail id on or before the&nbsp;<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; prescribed date.</font><br /><font style="font-weight:normal" size="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6. It is mandatory to mention the domain of paper in subject of Email.</font><br /><font style="font-weight:normal" size="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7. Selected candidates should bring two hard copies and one soft copy of the paper at the time of<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; presentation (MS Office 2003, 2007 format).</font><br /><font style="font-weight:normal" size="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8. Paper should not exceed 6 pages.</font><br /><font style="font-weight:normal" size="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9. Selected candidates should bring their identity card at the time of presentation.</font><br /><font style="font-weight:normal" size="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10. Decision of the judges is final.</font><br /><br /><br /><br /><strong><span>&nbsp;<font size="5" color="#f80707">&nbsp;&nbsp; Staff co-ordinators:</font></span></strong><br /><br /><span><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font size="4">&nbsp;&nbsp; 1. Prof. Seema .B&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </font></strong></span><br /><br /><strong><span><font size="4" color="#f80707">&nbsp;&nbsp;&nbsp;&nbsp; <font size="5">Student co-ordinator:<br />&nbsp;&nbsp;&nbsp;<font size="4" color="cyan"><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. <font size="3">Prashant.Patil&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Cell: 8431710718</font></font></font></font></span></strong><br /><br /><font size="5"><span><strong><font color="#5fa233">&nbsp;&nbsp;&nbsp; <font color="#5848b7">Mail id:</font>aavishkaarciv@gmail.com</font></strong></span></font><br /></div>
        </div>
        `;
      }
      else if (branch==='cs')
      {
        this.content=`
        <div class="paragraph" style="text-align:left;"><font size="6" color="#8d2424"><strong>&nbsp;&nbsp; <font color="#5040ae">Topics:</font></strong></font><br /><strong><font size="4"><font size="5">&nbsp;<font size="4">&nbsp;&nbsp; 1.Cloud and Internet of Things (IOT).<br />&nbsp;&nbsp;&nbsp; 2.Pattern Recognition and Machine Learning.<br />&nbsp;&nbsp;&nbsp; 3.Data Mining and Warehousing.<br />&nbsp;&nbsp;&nbsp; 4.Vehicular Adhoc Networks (VANETS).<br />&nbsp;&nbsp;&nbsp; 5.Internet and Web Applications.</font></font></font></strong><br /><br /><font size="6"><strong><font color="#f80707">&nbsp;&nbsp; Rules:</font></strong></font><br /><font style="font-weight:normal" size="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. The competition is open to all students of BE in CSE/IS.</font><br /><font style="font-weight:normal" size="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. Team can have maximum of 2 participants.</font><br /><font style="font-weight:normal" size="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3. Registration Fees for each group Rs.200/-.</font><br /><font style="font-weight:normal" size="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4. The presentation time is 10 mins and queries 2 mins for each paper.</font><br /><font style="font-weight:normal" size="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5. Candidates should submit the softcopy of the full paper in IEEE format, to our mail id on or before the<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; prescribed date.</font><br /><font style="font-weight:normal" size="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6. It is mandatory to mention the domain of paper in subject of Email.</font><br /><font style="font-weight:normal" size="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7. Selected candidates should bring two hard copies and one soft copy of the paper at the time of&nbsp;&nbsp;<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; presentation (MS Office 2003, 2007 format).</font><br /><font style="font-weight:normal" size="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8. Paper should not exceed 6 pages.</font><br /><font style="font-weight:normal" size="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9. Selected candidates should bring their identity card at the time of presentation.</font><br /><font style="font-weight:normal" size="3">&nbsp;&nbsp;&nbsp; 10. Decision of the judges is final.</font><br /><br /><font><font size="5" color="#f80707"><strong>&nbsp;&nbsp; Staff Co-ordinators:</strong></font><font size="5">&#8203;<br /><strong>&nbsp; 1. Prof. Damodar H<br />&nbsp; 2. Prof. Saleem H</strong><br /><br /><strong><font color="#f80707">&nbsp;&nbsp; <font color="#5848b7">Student Co-ordinators:</font><br />&nbsp;&nbsp; 1. Nikhil.M.Kulkarni&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9036669217<br />&nbsp;&nbsp; 2. Sania.S.Ankolekar&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7899529807<br />&nbsp;&nbsp; 3. Aishwarya.D.Khanapurkar&nbsp;&nbsp;&nbsp;&nbsp; 9916638566</font></strong></font></font><br /><br /><font size="5"><font color="#5040ae">&nbsp;&nbsp; Mail-id:</font><font color="#8d2424"> aavishkarcse.vdrit@gmail.com</font></font><br /></div>
        </div>
        `;

      }
      else if(branch==='ec')
      {
        this.content=`
        <div class="paragraph" style="text-align:left;"><strong><font color="#f80707" size="5">&nbsp;&nbsp;&nbsp; <br />&nbsp;&nbsp;&nbsp; TOPIC:</font></strong><br /><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <font size="4">1. New gen technology in electronics from silicon to software.</font></strong><br /><br /><br /><strong><font color="#f80707"><font size="4">&nbsp;&nbsp;&nbsp;&nbsp; <font size="5">RULES:</font></font></font></strong><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <font size="4">Paper should be submitted in standard IEEE format as given below:<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1.Style : Times New Roman.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. Title: font size 24.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3. Author name : font size 11.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4. Body text, equations : font size 10.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5. Abstract, keywords : font size 9.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6. Author affiliation, all captions, table text, figure text, references : font size 8.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7. Abstract not more than 150 words ( it should not include figure, equations, table etc.)</font>&nbsp;<br /><br /><font color="#f80707" size="4"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <font color="#5848b7" size="5">Staff Co-ordinators:</font><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. Plasin.Dias<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. Jyotsna.C</strong></font><br /><br /><font color="#f80707" size="4"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <font color="#5848b7" size="5">Student Co-ordinators:<br />&nbsp;&nbsp;&nbsp;&nbsp; <font color="#8d2424" size="4">1.</font></font></strong></font><font color="#8d2424"><strong><font size="4"> Ms.Arpita.Gejji&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9071186003<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. Mr.Tanveerahmed&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9738990431<br /></font></strong></font><br /><strong><span><font size="5"><font color="#5fa233"><font color="#5848b7">&nbsp;&nbsp;&nbsp;&nbsp; Mail-id: </font><font color="#8d2424">aavishkarenc@gmail.com</font></font></font></span></strong><br /></div>
        </div>
        
        `;
      }
      else if(branch==='ee')
      {
        this.content=`
        <div class="paragraph" style="text-align:left;"><strong><font size="6"><font color="#f80707">&nbsp;&nbsp; TOPICS:</font></font></strong><br /><font size="4"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. Recent advancement in instrumentation for power system.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. Hybrid power system / Distributed power generation.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3. Recent advancement in illumination system.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4. Mitigation of harmonics and Reactive power management.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5. Sustainable and renewable energy advancements.</strong></font><br /><br /><font size="5"><strong>&nbsp;&nbsp;&nbsp; <font size="6" color="#5848b7">Rules:</font></strong></font><br /><font style="font-weight:normal" size="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. The competition is open to all students of BE in EEE.</font><br /><font style="font-weight:normal" size="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. Team can have maximum of 2 participants.</font><br /><font style="font-weight:normal" size="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3. Registration Fees for each group Rs.200/-.</font><br /><font style="font-weight:normal" size="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4. The presentation time is 10 mins and queries 2 mins for each paper.</font><br /><font style="font-weight:normal" size="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5. Candidates should submit the softcopy of the full paper in IEEE format, to our mail id on or before the&nbsp;<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; prescribed date.</font><br /><font style="font-weight:normal" size="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6. It is mandatory to mention the domain of paper in subject of Email.</font><br /><font style="font-weight:normal" size="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7. Selected candidates should bring two hard copies and one soft copy of the paper at the time of<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; presentation (MS Office 2003, 2007 format).</font><br /><font style="font-weight:normal" size="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8. Paper should not exceed 6 pages.</font><br /><font style="font-weight:normal" size="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9. Selected candidates should bring their identity card at the time of presentation.</font><br /><font style="font-weight:normal" size="3">&nbsp;&nbsp;&nbsp; 10. Decision of the judges is final.</font><br /><br /><font size="4" color="#f80707"><strong><font size="5">&nbsp;&nbsp;&nbsp;&nbsp; Staff Co-ordinator:</font></strong></font><br /><strong><font size="4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. Prof .Subrahmanya.Hegde<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font size="5" color="#da4444"> Student Coordinator:</font><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1.Veeraj.R&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cell:8867719901</font></strong><br /><br /><strong><span><font size="5"><font color="#5fa233">&nbsp;&nbsp;&nbsp;&nbsp; <font color="#6555c2">Mail-id: </font><font color="#8d2424">aavishkaarene@gmail.com</font></font></font></span></strong><br /></div>
        </div>
        
        `;
      }
      else if(branch==='mech'){
        this.content=`
        <div class="paragraph" style="text-align:left;"><font size="6" color="#f80707"><strong>&nbsp;&nbsp;&nbsp;<br />&nbsp;&nbsp;&nbsp; TOPICS:</strong></font><br /><font color="#a82e2e"><strong><font size="4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="cyan"> 1. Advanced Technology In Aerospace And Automotive Sector.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. Recent Trends In Composite Materials.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3. Role Of Mechanical Engineers in Make In India.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4. </font></font></strong></font><font size="4" color="cyan"><strong>Recent Advances in thermal Engineering</strong><strong>.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5. Design Fabrication and Application of Drones.</strong><br /><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6. Recent Advances in Renewable Energy.<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7. Recent Advances in Manufacturing Process.</strong></font><br /><br /><font size="6"><strong><font color="#f80707">&nbsp;&nbsp;&nbsp; Rules:</font></strong></font><br /><font style="font-weight:normal" size="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. The competition is open to all students of BE in Mechanical.</font><br /><font style="font-weight:normal" size="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. Team can have maximum of 2 participants.</font><br /><font style="font-weight:normal" size="3">&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; 3. Registration Fees for each group Rs.200/-.</font><br /><font style="font-weight:normal" size="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4. The presentation time is 10 mins and queries 2 mins for each paper.</font><br /><font style="font-weight:normal" size="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5. Candidates should submit the softcopy of the full paper in IEEE format, to our mail id on<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; or before the prescribed date.</font><br /><font style="font-weight:normal" size="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 6. It is mandatory to mention the domain of paper in subject of Email.</font><br /><font style="font-weight:normal" size="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 7. Selected candidates should bring two hard copies and one soft copy of the paper at the time of&nbsp;&nbsp;<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; presentation (MS Office2003, 2007 format).</font><br /><font style="font-weight:normal" size="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 8. Paper should not exceed 6 pages.</font><br /><font style="font-weight:normal" size="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 9. Selected candidates should bring their identity card at the time of presentation.</font><br /><font style="font-weight:normal" size="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10. Decision of the judges is final.</font><br /><br /><strong><font size="5" color="#fb0404">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Staff Co-ordinators:</font><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <font size="4">1. Prof. Santosh.Savnur<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. Prof. Sanjay.Dambal</font></strong><br /><br /><strong><font size="5" color="#fb0404">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Student Co-ordinators:<br /><font size="4" color="cyan">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. Vijay.Mahantesh&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cell:9008625006</font></font></strong><br /><br /><font size="5"><strong><font color="#5fa233">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <font color="#5848b7">Mail-id: </font></font><font color="#8d2424"><span><span>aavishkaarme@gmail.com</span></span></font></strong></font><br /><strong>&nbsp; &nbsp;&nbsp;</strong><br /></div>
        </div>        
        `;
      }
    }
    public eventHeader:any;
    public eventRules:any;
    public eventCharges:any;
    public eventStaff:any;
    public eventStudent:any;
    public events(eventType:any):void
    {
        if(eventType==='tribologi')
        {
          this.EventLogo=this.tribologi;
          this.eventHeader='Tribo-Logi';
          this.eventRules=`          1.Team of 3 members and 1 member should participate in 1 round (no repetition).
          2.1st round: Memory Quotient:
                                 Videos and photos will be previously displayed.
                                 Based on videos questions are asked.                           
          3.2nd Round: Pick The Word:
                                 One big  word will be given. 
                                 Form more number of words using given word.
          4.3rd Round: Snakes and ladders`;
          this.eventCharges=`<div class="eventCharges">
         Event Charges : Rs. 60 /- per team
          </div>
          `;
          this.eventStaff=`          Prof. Varaprasad G`;
          this.eventStudent=`          Mr. Pramod Pawar`;

        }
        if(eventType==='bestfromwaste')
        {
          this.EventLogo=this.bestFromWaste;
          this.eventHeader='Best From Waste';
          this.eventRules=`          1. Use of waste material to create theme or project.
          2. Project or theme must be done on the spot within stipulated time.
          3. Candidates should bring their own material.
          Example:making models and products out of waste,solar heaters,use of wind mill
          energy, making scientific projects out of waste.
          4.Maximum 3 members in a team.   `;
          this.eventCharges=`<div class="eventCharges">
         Event Charges : Rs. 50 /- per team
          </div>
          `;
          this.eventStaff=`          1.Prof.Shankar Badiger
          2.Prof.Anant Joshi
          3.Prof.Vinay Bilgimath`;
          this.eventStudent=`          1.Mr.Raghavendra Pattar                           8747046505
          2.Ms.Priyanka
          3.Mr.Shivareddy
          4.Mr.Rohit`;

        }
        if(eventType==='generalquiz')
        {
          this.EventLogo=this.generalquiz;
          this.eventHeader='General Quiz';
          this.eventRules=`          1. Two members from each group.
          2. Shortlisted groups will be sent to second round.
          3. Judges decision will be final.`;
          this.eventCharges=`<div class="eventCharges">
         Event Charges : Rs. 20 /- per team
          </div>
          `;
          this.eventStaff=`          ​1. Prof. Naveen S Hiremath
          2. Prof. R J Talapati
          3. Prof Gurunath M`;
          this.eventStudent=`          1.Parag Bhat                                         9145477595
          2.Sumedh N`;

        }
    }

}
