import { Injectable } from '@angular/core';
import {BehaviorSubject, interval, Observable, Subject, timer} from 'rxjs';
import {startWith, takeUntil} from 'rxjs/operators';
import {WebSocketEvents} from '../../../webit-node/src/app/web-socket-events';
import { io } from 'socket.io-client';

@Injectable()
export class AuthService {
  private socket;
  public isAuthedSubj = new BehaviorSubject<boolean>(true);
  private tokenSubj = new Subject<string>();

  constructor() {
    // this.isAuthedSubj.next(token != null);
    this.socket = io('', {
      path: '/ws',
      transports: ['websocket']
    });
  }

  requestToken(): Observable<string> {
    const oneMinute = 6000;
    interval(oneMinute)
        .pipe(
            startWith(0),
            takeUntil(timer(oneMinute * 8)),
            takeUntil(this.isAuthedSubj)
        )
        .subscribe(x => {
          // automatic login after 1 sec.
          if (x === 1) {
            this.isAuthedSubj.next(true);
          }
          console.log('socket-service: emitting token request ', x);
          this.socket.emit(WebSocketEvents.TokenRequest);
        })
        .add(() => {
          this.tokenSubj.complete();
        });
    return this.tokenSubj.asObservable();
  }

}
