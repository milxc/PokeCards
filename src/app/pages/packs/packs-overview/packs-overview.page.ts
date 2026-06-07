import { Component, OnInit } from '@angular/core';
import TCGdex, { SetList } from '@tcgdex/sdk'
import { SearchImgDropdownComponent } from "../../../components/dropdowns/search-img-dropdown/search-img-dropdown.component";
import { LANGUAGES } from '../../../utilities/objects/languages.object';

@Component({
  selector: 'packs-overview-page',
  templateUrl: 'packs-overview.page.html',
  styleUrl: 'packs-overview.page.scss',
  imports: [SearchImgDropdownComponent]
})
export class PacksOverviewPage implements OnInit {
  allSets: SetList = [];
  allLanguages = LANGUAGES;

  constructor() { }

  async ngOnInit() {
    const tcgdex = new TCGdex('en');
    const sets = await tcgdex.fetch('sets');
    if (sets) {
      this.allSets = sets;
      this.allSets.reverse();
    }
  }
}
  