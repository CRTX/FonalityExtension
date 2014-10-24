import 'dart:html';
import 'package:chrome/chrome_ext.dart' as chrome;

void main() {
    String background = "url(http://www.google.com/a/cpanel/apxrms.net/images/logo.gif?service=google_default)";
    Element body = querySelector("body");
    body.style.background = background;

    chrome.runtime.sendMessage("test");

    chrome.runtime.onMessage.listen(notify);

    /*
    chrome.NotificationOptions options = new chrome.NotificationOptions(
        type: chrome.TemplateType.BASIC,
        iconUrl: "",
        title: "Notification Title",
        message: "Notification Message"
    );

    chrome.notifications.create("test", options).then((id) => print('notification created'));
    */
}

void notify(chrome.OnMessageEvent event)
{
    chrome.NotificationOptions options = new chrome.NotificationOptions(
        type: chrome.TemplateType.BASIC,
        iconUrl: "",
        title: "Notification Title",
        message: "Notification Message"
    );

    chrome.notifications.create("test", options).then((id) => print('notification created'));
}
