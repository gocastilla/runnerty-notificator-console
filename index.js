"use strict";

var Notification = global.NotificationClass;

class consoleNotificator extends Notification {
  constructor(notification) {
    super(notification);
  }

  send(notification) {
      notification.mode = (notification.mode)?notification.mode.toString():"info";
      notification.message = (notification.message)?notification.message.toString():"";
      this.logger(notification.mode, notification.message);
      this.end();
    };
}

module.exports = consoleNotificator;