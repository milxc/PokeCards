import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from "@angular/router";

@Component({
    selector: 'sidebar-component',
    templateUrl: 'sidebar.component.html',
    styleUrl: 'sidebar.component.scss',
    imports: [RouterLink]
})

export class SidebarComponent implements OnInit {

    isOpen = false;
    isDocumentsOpen = false;

    constructor(private router: Router) { }

    ngOnInit() { }

    toggleSidebar() {
        this.isOpen = !this.isOpen;
    }

    closeSidebar() {
        this.isOpen = false;
    }

    logout() {
        // Simulate logout logic
        this.router.navigate(['/login']);
    }

}