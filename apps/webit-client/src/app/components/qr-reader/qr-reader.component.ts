import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import QrScanner from 'qr-scanner';
import QrScannerWorkerPath from '../../../../../../node_modules/qr-scanner/qr-scanner-worker.min.js';

@Component({
  selector: 'webit-qr-reader',
  templateUrl: './qr-reader.component.html',
  styleUrls: ['./qr-reader.component.scss']
})
export class QrReaderComponent implements AfterViewInit {
  @ViewChild('videoEl') private videoEl: ElementRef;
  @Output() scanSuccess = new EventEmitter();
  @Output() scanError = new EventEmitter();
  scanLog: string;

  hasCamera: boolean;

  ngAfterViewInit() {
    QrScanner.WORKER_PATH = QrScannerWorkerPath;

    QrScanner.hasCamera().then(hasCamera => {
      this.hasCamera = hasCamera;
      console.log('hasCamera', hasCamera);
      if (hasCamera) {
        this.initReader();
      } else {
        this.scanError.emit('Camera not Found!');
      }
    });
  }

  initReader() {
    const qrScanner = new QrScanner(this.videoEl.nativeElement, result => {
      console.log('decoded qr code:', result);
      this.scanLog = result;
      qrScanner.stop();
      this.scanSuccess.emit(result);
    }, onDecodeError => {
      console.log('onDecodeError', onDecodeError);
      this.scanLog = onDecodeError;
      this.scanError.emit(onDecodeError);
      // qrScanner.stop();
    });
    qrScanner.start();
  }

}
