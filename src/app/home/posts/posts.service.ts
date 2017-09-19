import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { PostsList } from "./posts.model";
@Injectable()
export class UsersService {
    constructor(private http: Http) {
    }

    getPosts(): Observable<PostsList> {
        return this.http.get('http://localhost:3000/posts')
            .map((res: Response) => <PostsList>res.json())
    }
}