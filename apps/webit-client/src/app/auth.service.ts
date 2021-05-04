import { Injectable } from '@angular/core';
import {BehaviorSubject, interval, Observable, Subject, timer} from 'rxjs';
import {startWith, takeUntil} from 'rxjs/operators';
import {WebSocketEvents} from '../../../webit-server/src/app/web-socket-events';
import { io } from 'socket.io-client';

@Injectable()
export class AuthService {
  private socket;
  isAuthedSubj = new BehaviorSubject<boolean>(true);
  public tokenSubj = new Subject<string>();

  constructor() {
    this.initSocket();
  }

  private initSocket() {
    this.socket = io('', {
      path: '/ws',
      transports: ['websocket']
    });
    this.socket.on(WebSocketEvents.Connect, () => {

      this.socket.emit(WebSocketEvents.TokenRequest);

      this.socket.on(WebSocketEvents.Token, (token: string) => {
        this.tokenSubj.next(token);
      });

      this.socket.on(WebSocketEvents.Authenticated, (token: boolean) => {
        this.isAuthedSubj.next(true);
      });

    });
  }

}
