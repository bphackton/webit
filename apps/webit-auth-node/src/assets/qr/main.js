const socket = io('', { path: '/ws', transports: ['websocket'] });

socket.on('connect', () => {
  console.log('Connected');
});

var qrcode = new QRCode('qrcode');
socket.on('generate qr', (msg) => {
  console.log('generate qr RECEIVED: ', msg);
  qrcode.makeCode(msg);
});

socket.on('webit redirect', (msg) => {
  console.log('webit redirect RECEIVED: ', msg);
  window.location.path(msg);
});
