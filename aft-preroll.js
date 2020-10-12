function user_info(user) {
 
    var user_id = user.id;   // user's id
    var app_id = 7613304;  // your app's id
 
    admanInit({
      user_id: user_id,
      app_id: 7613304,
      mobile: true,
      type: 'rewarded',
      params: {preview: 1}
    }, onAdsReady, onNoAds);
 
    function onAdsReady(adman) {
      adman.onStarted(function () {});
      adman.onCompleted(function() {});
      adman.onSkipped(function() {});      
      adman.onClicked(function() {}); 
      adman.start('preroll');
    };
    function onNoAds() {};
}