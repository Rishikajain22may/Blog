import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { BlogHttpService } from '../blog-http.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  public currentBlog;
  public blogTitle:String;
  public blogBodyHtml:String;
  public blogDescription:String;
  public blogCategory:String;
  public possibleCategories = ["Comedy","Drama","Action","Technology"]
  constructor(public blogHttpService:BlogHttpService,private _route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

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

  public editThisBlog():any{
    this.blogHttpService.editBlog(this.currentBlog.blogId,this.currentBlog).subscribe(

      data =>{
        console.log(data)
        alert("Edited Successfully")
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


}
