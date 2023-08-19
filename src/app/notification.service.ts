import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  current = '';

  notify(message:string, timer = 10000) {
    this.current = message;
    setTimeout(() => {
      this.current = '';
    }, timer)
  }
}