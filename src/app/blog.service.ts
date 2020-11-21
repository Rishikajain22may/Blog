import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public currentBlog;

  public allblogs=[{
    "blogId": "1",
    "created": "2017-10-20T12:20:47.854Z",
    "tags": ["hero","heroine"],
    "author": "Admin",
    "category": "comedy",
    "bodyhtml":"This is body",
    "description": "this is blog 1 description",
    "title": "This is blog 1"
  },
  {
    "blogId": "2",
    "created": "2017-10-20T12:20:47.854Z",
    "tags": [],
    "author": "Admin",
    "category": "comedy",
    "bodyhtml":"<strong>This is body</strong>",
    "description": "this is blog 2 description",
    "title": "This is blog 2"
  },
  {
    "blogId": "3",
    "created": "2017-10-20T12:20:47.854Z",
    "tags": [],
    "author": "Admin",
    "category": "comedy",
    "bodyhtml":"<h1>This is body</h1>",
    "description": "this is blog 3 description",
    "title": "This is blog 3"
  }
]

public getallBlogs():any{
  return this.getallBlogs;
}

public getId(currentBlogId):any
{
  for(let blog of this.allblogs)
  {
    if(blog.blogId==currentBlogId)
    {
      this.currentBlog = blog;
    }
  }

  return this.currentBlog;
}
  constructor() { }
}
