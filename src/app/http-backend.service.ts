import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})

export class HttpBackendClient extends HttpClient{
    constructor( httpBackend: HttpBackend) { 
        super(httpBackend)
    }
    
}