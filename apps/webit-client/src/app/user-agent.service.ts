import { Injectable } from "@angular/core";

@Injectable()
export class UserAgentService {

    constructor() {}

  checkDevice(){
    let ua = navigator.userAgent;
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua)) {
      console.log('mobile')
      return 'mobile'
    } else {
      console.log('desktop')
      return 'desktop'
    }

  }

}
