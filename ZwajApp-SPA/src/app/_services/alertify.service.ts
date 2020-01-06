import { Injectable } from '@angular/core';

//نعمل تعريف لل alertify
declare let alertify :any;
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }

//function confirm
confirm(message:string,okCallback:()=>any){
  alertify.confirm(message,function(e){
    //if (e) ok then ينفذ okCallback
    if(e){okCallback()}
    else{}

  });
}

//function seuccess
success(message:string){
  alertify.success(message);
  
}

//function error
error(message:string){
  alertify.error(message);
  
}

//function warning
warning(message:string){
  alertify.warning(message);
  
}

//function message
message(message:string){
  alertify.message(message);
  
}
}


alertify.defaults = {
  // dialogs defaults
  autoReset:true,
  basic:false,
  closable:true,
  closableByDimmer:true,
  invokeOnCloseOff:false,
  frameless:false,
  defaultFocusOff:false,
  maintainFocus:true, // <== global default not per instance, applies to all dialogs
  maximizable:true,
  modal:true,
  movable:true,
  moveBounded:false,
  overflow:true,
  padding: true,
  pinnable:true,
  pinned:true,
  preventBodyShift:false, // <== global default not per instance, applies to all dialogs
  resizable:true,
  startMaximized:false,
  transition:'pulse',
  transitionOff:false,
  tabbable:'button:not(:disabled):not(.ajs-reset),[href]:not(:disabled):not(.ajs-reset),input:not(:disabled):not(.ajs-reset),select:not(:disabled):not(.ajs-reset),textarea:not(:disabled):not(.ajs-reset),[tabindex]:not([tabindex^="-"]):not(:disabled):not(.ajs-reset)',  // <== global default not per instance, applies to all dialogs

  // notifier defaults
  notifier:{
  // auto-dismiss wait time (in seconds)  
      delay:10,
  // default position
      position:'bottom-right',
  // adds a close button to notifier messages
      closeButton: false,
  // provides the ability to rename notifier classes
      classes : {
          base: 'alertify-notifier',
          prefix:'ajs-',
          message: 'ajs-message',
          top: 'ajs-top',
          right: 'ajs-right',
          bottom: 'ajs-bottom',
          left: 'ajs-left',
          center: 'ajs-center',
          visible: 'ajs-visible',
          hidden: 'ajs-hidden',
          close: 'ajs-close'
      }
  },

  // language resources 
  glossary:{
      // dialogs default title
      title:'AlertifyJS',
      // ok button text
      ok: 'OK',
      // cancel button text
      cancel: 'Cancel'            
  },

  // theme settings
  theme:{
      // class name attached to prompt dialog input textbox.
      input:'ajs-input',
      // class name attached to ok button
      ok:'ajs-ok',
      // class name attached to cancel button 
      cancel:'ajs-cancel'
  },
  // global hooks
  hooks:{
      // invoked before initializing any dialog
      preinit:function(instance){},
      // invoked after initializing any dialog
      postinit:function(instance){},
  },
};