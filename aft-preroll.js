function user_info(user) {
 
    var user_id = user;   // user's id
    var app_id = 7613304;  // your app's id
 
    admanInit({
      user_id: user_id,
      app_id: 7613304,
      mobile: true,
      type: 'preloader'
    }, onAdsReady, onNoAds);
 
    function onAdsReady(adman) {
      adman.onStarted(function () {
        console.log(`Начался просмотр рекламы`)
      });
      adman.onCompleted(function() {
        console.log(`Вы досмотрели до конца`)
      });
      adman.onSkipped(function() {
        console.log(`Вы пропустили`)
      });      
      adman.onClicked(function() {}); 
      adman.start('preroll');
    };
    function onNoAds() {};
}