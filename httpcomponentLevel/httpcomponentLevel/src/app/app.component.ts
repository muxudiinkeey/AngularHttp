import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ipost } from './post';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

private url='http://jsonplaceholder.typicode.com/posts';

http = inject(HttpClient);

post : any;
posts : Ipost []= []


$posts = this.getPosts();
// GET
getPosts(){
  return this.http.get<Ipost[]>(this.url)
}

getPost(id: number ){

  return this.http.get<Ipost[]>(this.url+'/'+id);
}

/* // CREATE
greatePost(post: any){
 return this.http.post(this.url, post);
}


// UPDATE
updatePost(post: any){
 return this.http.put(this.url+'/'+ post.id, post);
}
} */
 
deletePost(id: number){
  return this.http.delete(this.url+'/'+id);

}

}
