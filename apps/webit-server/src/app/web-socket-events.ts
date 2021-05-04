export enum WebSocketEvents {
  // generic socket.io events
  Connect = 'connect',
  Connection = 'connection',
  Disconnect = 'disconnect',
  Disconecting = 'disconnecting', // Fired when the client is going to be disconnected (but hasn't left its rooms yet).
  Error = 'error',

  // custom events
  TokenRequest = 'tokenRequest', // received from clients to obtain token
  Token = 'token', // emitted by server with generated token
  Paired = 'paired',
  Suspend = 'suspend',
  Authenticated = 'authenticated',
  Authenticate = 'authenticate',

}
