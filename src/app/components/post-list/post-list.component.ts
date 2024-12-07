import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common'; // Importer CommonModule depuis @angular/common


@Component({
  selector: 'app-post-list',
  standalone: true, // Définir le composant comme standalone
  imports: [CommonModule], // Ajouter CommonModule dans imports
  templateUrl: './post-list.component.html', // Votre template HTML
  styleUrls: ['./post-list.component.css'], // Vos styles CSS
})
export class PostListComponent {
  posts = [
    { id: '1', title: 'First post', content: 'first post details' },
    { id: '2', title: 'Second post', content: 'second post details' },
    { id: '3', title: 'Third post', content: 'third post details' },
  ];
}
