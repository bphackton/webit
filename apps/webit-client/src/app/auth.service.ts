import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { WebSocketEvents } from '../../../webit-server/src/app/web-socket-events';
import { io } from 'socket.io-client';

@Injectable()
export class AuthService {
  private socket;
  isAuthedSubj = new BehaviorSubject<boolean>(false);
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

      this.socket.on(WebSocketEvents.Authenticated, (authenticated: boolean) => {
        this.isAuthedSubj.next(authenticated);
      });

    });
  }

  public authenticate(token) {
    this.socket.emit(WebSocketEvents.Authenticate, token);
  }

}
