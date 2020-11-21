import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';

import {ActivatedRoute,Router} from '@angular/router';
 
@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(public blogHttpService:BlogHttpService,private _route:ActivatedRoute,private router:Router) {  }

  public blogTitle:String;
  public blogBodyHtml:String;
  public blogDescription:String;
  public blogCategory:String;
  public possibleCategories = ["Comedy","Drama","Action","Technology"]

  ngOnInit(): void {
  }

  public createBlog():any{

    let blogData={
      title:this.blogTitle,
      blogBody:this.blogBodyHtml,
      description:this.blogDescription,
      category:this.blogCategory
    }

    this.blogHttpService.createBlog(blogData).subscribe(

      data =>{
        console.log(data)
        alert("Created Successfully")
        setTimeout(()=>{
          this.router.navigate(['/blog',data.data.blogId]);
        },1000)
      },
      error =>{
        console.log(error.message)
        alert("Some Error Occured")
      }
      
    )
  }

}
