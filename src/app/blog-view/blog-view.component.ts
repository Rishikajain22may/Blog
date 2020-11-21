import { Component, OnInit, ViewContainerRef } from '@angular/core';

import {ActivatedRoute,Router} from "@angular/router";
import { BlogHttpService } from '../blog-http.service';
import {Location} from '@angular/common';


@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers:[Location]
})
export class BlogViewComponent implements OnInit {

  public currentBlog;

  
  
constructor(private _route:ActivatedRoute,private router:Router,public blogHttpService:BlogHttpService,private loc:Location) {}

ngOnInit(): void
 {
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    this.blogHttpService.getId(myBlogId).subscribe(

      data =>{
        this.currentBlog = data["data"];
      },
      error =>{
        console.log(error.message)
      }
    )
  }

  public deleteThisBlog():any{
    this.blogHttpService.deleteBlog(this.currentBlog.blogId).subscribe(

      data =>{
        console.log(data)
        alert("Deleted Successfully")
        setTimeout(()=>{
          this.router.navigate(['/home']);
        },1000)
      },
      error =>{
        console.log(error.message)
        alert("Some Error Occured")
      }
      
    )
  }

  public goBack():any{
    this.loc.back();
  }
  
  

}
