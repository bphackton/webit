import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { WebSocketEvents } from '../../../webit-server/src/app/web-socket-events';
import { Token } from '../../../webit-server/src/app/token';
import { io } from 'socket.io-client';
import { CacheService } from './cache.service';

@Injectable()
export class AuthService {
  public isAuthedSubj = new ReplaySubject<boolean>();
  public transferSubj = new ReplaySubject<any>();
  public tokenSubj = new Subject<string>();
  private socket;
  readonly tokenKey = 'auth-token';
  private token: Token;

  constructor(private cache: CacheService) {
    this.initSocket();
    this.token = cache.get(this.tokenKey);
  }

  private initSocket() {
    this.socket = io('', {
      path: '/ws'
    });

    this.socket.on(WebSocketEvents.Connect, () => {

      if (this.token) {
        this.socket.emit(WebSocketEvents.ValidateToken, this.token);
      } else {
        this.isAuthedSubj.next(false);
        this.socket.emit(WebSocketEvents.TokenRequest);
      }

      this.socket.on(WebSocketEvents.Token, (token: string) => {
        this.tokenSubj.next(token);
      });

      this.socket.on(WebSocketEvents.ValidityStatus, (valid: boolean) => {
        this.isAuthedSubj.next(valid);
        this.socket.emit(WebSocketEvents.TokenRequest);
      });

      this.socket.on(WebSocketEvents.Paired, (token: Token) => {
        this.cache.set(this.tokenKey, token);
        this.isAuthedSubj.next(true);
      });

      this.socket.on(WebSocketEvents.Transfer, (transfer) => {
        this.transferSubj.next(transfer);
      });

    });
  }

  authenticate(token) {
    this.socket.emit(WebSocketEvents.Authenticate, token);
  }

  addTransfer(transfer) {
    this.socket.emit(WebSocketEvents.Transfer, transfer);
  }

}
