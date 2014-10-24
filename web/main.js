var notification = webkitNotifications.createNotification(
          '48.png',  // icon url - can be relative
            'Hello!',  // notification title
              'Lorem ipsum...'  // notification body text
        );

// Or create an HTML notification:
// var notification = webkitNotifications.createHTMLNotification(
//   'notification.html'  // html url - can be relative
//   );
//
//   // Then show the notification.
//   notification.show();:
