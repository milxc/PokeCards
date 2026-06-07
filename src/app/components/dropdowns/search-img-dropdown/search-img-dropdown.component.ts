import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownOption } from '../../../utilities/objects/dropdown-options.object';

@Component({
    selector: 'search-img-dropdown',
    templateUrl: 'search-img-dropdown.component.html',
    styleUrls: ['search-img-dropdown.component.scss'],
    imports: [CommonModule, FormsModule]
})
export class SearchImgDropdownComponent {
    @Input() options: DropdownOption[] = [];
    @Input() placeholder = 'Choose an option…';
    @Output() selected = new EventEmitter<DropdownOption>();

    isOpen = false;
    searchQuery = '';
    selectedOption: DropdownOption | null = null;

    get filtered() {
        const q = this.searchQuery.toLowerCase();
        return this.options.filter(o => o.name.toLowerCase().includes(q));
    }

    toggle() {
        this.isOpen = !this.isOpen;
    }

    select(option: DropdownOption) {
        this.selectedOption = option;
        this.isOpen = false;
        this.searchQuery = '';
        this.selected.emit(option);
    }

    //if you click on the outside then close
    @HostListener('document:click', ['$event'])
    onOutsideClick(event: MouseEvent) {
        const el = event.target as HTMLElement;
        if (!el.closest('search-img-dropdown')) this.isOpen = false;
    }
}