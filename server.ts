const webpush = require('web-push');

// VAPID keys should be generated only once.
const vapidKeys = webpush.generateVAPIDKeys();

webpush.setGCMAPIKey('390225837325');
webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey('BJAqnVGjrVV8ohWhgZetRSfbc70QQM1MMZSta5XxP3TweUkZ2HOokLI41KMhc5AyZgDzkTUOSzwQlcnM0k9wC_M'),
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint: 'https://fcm.googleapis.com/fcm/send/d61c5u920dw:APA91bEmnw8utjDYCqSRplFMVCzQMg9e5XxpYajvh37mv2QIlISdasBFLbFca9ZZ4Uqcya0ck-SP84YJUEnWsVr3mwYfaDB7vGtsDQuEpfDdcIqOX_wrCRkBW2NDWRZ9qUz9hSgtI3sY',
  keys: {
    auth: 'juarI8x__VnHvsOgfeAPHg',
    p256dh: 'BL7ELU24fJTAlH5Kyl8N6BDCac8u8li_U5PIwG963MOvdYs9s7LSzj8x_7v7RFdLZ9Eap50PiiyF5K0TDAis7t0'
  }
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
