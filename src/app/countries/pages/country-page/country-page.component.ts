import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit{

  constructor(
    private activatedRout: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router,
    private CountriesService: CountriesService,

    ){}
  ngOnInit(): void {
    this.activatedRout.params

    .pipe(
      switchMap(({id}) => this.countriesService.searchCountryByAlphaCode(id)
      ),
    )
    .subscribe(country =>{
       // console.log({ country})
       if (!country){
        return this.router.navigateByUrl('');
       }

       console.log( "tenemos un pais");
       return

      });
  }


}
