// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { TherapistsService } from '../../../core/services/therapists.service';
// import { Router, ActivatedRoute } from '@angular/router';
// import { Therapist } from '../../../types/therapist';
// import { Subscription, Observable } from 'rxjs';
// import { SymptomService } from '../../../core/services/symptom.service';
// import { SpecialtyService } from '../../../core/services/specialty.service';
// @Component({
//   selector: 'app-therapist-list',
//   templateUrl: './therapist-list.component.html',
//   styleUrls: ['./therapist-list.component.scss']
// })
// export class TherapistListComponent implements OnInit, OnDestroy {
//   protected selectedFilterList: string[] = [];
//   constructor(
//     private therapistsService: TherapistsService,
//     private route: ActivatedRoute,
//     private symptomService: SymptomService,
//     private specialtyService: SpecialtyService,
//   ) { }
//   private symptom: any;
//   private speciality: any;
//   private city: any;
//   private therapistsFiltered: any;
//   private therapists: Therapist[];
//   private therapist$: Observable<any>;
//   private therapistsObserver: Subscription;
//   async ngOnInit() {
//     this.route.paramMap.subscribe(params => {
//       this.symptom = params.get('symptom');
//       this.speciality = params.get('speciality');
//       this.city = params.get('city');
//       this.therapistsFiltered = [];
//       this.therapistsObserver = this.therapistsService.getTherapists().subscribe((data) => {
//         this.therapists = data;
//         for (let i = 0; i < this.therapists.length; i++) {
//           let matchSymptoms = false;
//           let matchspeciality = false;
//           for (let j = 0; j < this.therapists[i].symptom.length; j++) {
//             if (this.therapists[i].symptom[j] === this.symptom) {
//               matchSymptoms = true;
//             }
//           }
//           for (let z = 0; z < this.therapists[i].speciality.length; z++) {
//             if (this.therapists[i].speciality[z] === this.speciality) {
//               matchspeciality = true;
//             }
//           }
//           if (matchSymptoms && matchspeciality && this.therapists[i].city === this.city) {
//             this.therapistsFiltered.push(this.therapists[i]);
//           }
//         }
//       });
//       console.log(params.get('symptom') + params.get('speciality') + params.get('city'))
//     });
//     /* this.route.queryParams.subscribe(params => {
//           this.therapistsObserver = this.therapistsService.getTherapists(params).subscribe((data) => {
//             this.therapists = data;
//           });
//         }); */
//   }
//   ngOnDestroy() {
//     this.therapistsObserver.unsubscribe()
//   }
// }
