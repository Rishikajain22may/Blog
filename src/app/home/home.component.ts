import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { BlogService } from '../blog.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public allblogs;
  constructor(public blogService:BlogService,public blogHttpService:BlogHttpService) { }

  ngOnInit(): void {
  this.allblogs = this.blogHttpService.getallBlogs().subscribe(

    data =>{
      this.allblogs = data["data"];
    },
    error=>{
      console.log(error.message)
    }
  )
    
  }

}
