import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {

  public allblogs;
  public currentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';

  constructor(private _http: HttpClient) { }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message)
    return Observable.throw(err.message);
  }

  public getallBlogs(): any {
    let myResponse = this._http.get(this.baseUrl + '/all?authToken=NTU5NjhjN2M5NDY4MzdkYTdmYjdiYTJlM2ExMDdjY2NhM2RhMDUxNDllOGQ5Njk2ZjU4NWYxZTRhODc5NDc0ZTc3ODM5Y2U2ZjUzYTBlNmFmMzgxYTBkMTk5OTYwMTZiMDZlYjI1ODU2ZDM1Y2I4MGRmMjI5YTg4NTk0MzM5M2Q3MjQ4');
    return myResponse;
  }

  public getId(currentBlogId): any {
    let myResponse = this._http.get(this.baseUrl + '/view/' + currentBlogId + '?authToken=NTU5NjhjN2M5NDY4MzdkYTdmYjdiYTJlM2ExMDdjY2NhM2RhMDUxNDllOGQ5Njk2ZjU4NWYxZTRhODc5NDc0ZTc3ODM5Y2U2ZjUzYTBlNmFmMzgxYTBkMTk5OTYwMTZiMDZlYjI1ODU2ZDM1Y2I4MGRmMjI5YTg4NTk0MzM5M2Q3MjQ4');
    return myResponse;
  }

  public createBlog(blogData): any {
    let myResponse = this._http.post(this.baseUrl + '/create' + '?authToken=NTU5NjhjN2M5NDY4MzdkYTdmYjdiYTJlM2ExMDdjY2NhM2RhMDUxNDllOGQ5Njk2ZjU4NWYxZTRhODc5NDc0ZTc3ODM5Y2U2ZjUzYTBlNmFmMzgxYTBkMTk5OTYwMTZiMDZlYjI1ODU2ZDM1Y2I4MGRmMjI5YTg4NTk0MzM5M2Q3MjQ4',blogData);
    return myResponse;
  }

  public deleteBlog(blogId): any {
    let data={}
    let myResponse = this._http.post(this.baseUrl + '/' + blogId + '/delete' + '?authToken=NTU5NjhjN2M5NDY4MzdkYTdmYjdiYTJlM2ExMDdjY2NhM2RhMDUxNDllOGQ5Njk2ZjU4NWYxZTRhODc5NDc0ZTc3ODM5Y2U2ZjUzYTBlNmFmMzgxYTBkMTk5OTYwMTZiMDZlYjI1ODU2ZDM1Y2I4MGRmMjI5YTg4NTk0MzM5M2Q3MjQ4',data);
    return myResponse;
  }

  public editBlog(blogId,blogData): any {
    let myResponse = this._http.put(this.baseUrl + '/' + blogId + '/edit' + '?authToken=NTU5NjhjN2M5NDY4MzdkYTdmYjdiYTJlM2ExMDdjY2NhM2RhMDUxNDllOGQ5Njk2ZjU4NWYxZTRhODc5NDc0ZTc3ODM5Y2U2ZjUzYTBlNmFmMzgxYTBkMTk5OTYwMTZiMDZlYjI1ODU2ZDM1Y2I4MGRmMjI5YTg4NTk0MzM5M2Q3MjQ4',blogData);
    return myResponse;
  }


}
