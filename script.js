// ===== 設定の読み込み =====
let config = {
    couponUrl: '', // LSEG クーポン URL（config.json から読み込む）
    productUrl: '', // 楽天商品 URL（config.json から読み込む）
    pixelId: '' // Meta Pixel ID（未使用）
};

// config.json から設定を読み込む
fetch('config.json')
    .then(response => response.json())
    .then(data => {
        config = data;
    })
    .catch(error => {
        console.warn('config.json が見つかりません:', error);
        console.warn('手動で config.json を作成してください。');
    });

// ===== ボタンイベント =====
document.addEventListener('DOMContentLoaded', function() {
    // 中間の CTA ボタン
    const couponBtnMid = document.getElementById('couponBtnMid');
    const productBtnMid = document.getElementById('productBtnMid');

    // 最後の CTA ボタン
    const couponBtnFinal = document.getElementById('couponBtnFinal');
    const productBtnFinal = document.getElementById('productBtnFinal');

    // イベントリスナー設定
    if (couponBtnMid) {
        couponBtnMid.addEventListener('click', openCoupon);
    }
    if (productBtnMid) {
        productBtnMid.addEventListener('click', openProduct);
    }
    if (couponBtnFinal) {
        couponBtnFinal.addEventListener('click', openCoupon);
    }
    if (productBtnFinal) {
        productBtnFinal.addEventListener('click', openProduct);
    }
});

// ===== クーポン獲得ボタンの処理 =====
function openCoupon() {
    if (!config.couponUrl) {
        alert('クーポン URL がまだ設定されていません。');
        console.error('couponUrl を config.json で設定してください。');
        return;
    }
    window.open(config.couponUrl, '_blank');

    // 計測（必要に応じて）
    if (window.fbq) {
        fbq('trackCustom', 'RakutenCouponClick');
    }
}

// ===== 商品ページボタンの処理 =====
function openProduct() {
    if (!config.productUrl) {
        alert('商品 URL がまだ設定されていません。');
        console.error('productUrl を config.json で設定してください。');
        return;
    }
    window.location.href = config.productUrl;

    // 計測（必要に応じて）
    if (window.fbq) {
        fbq('trackCustom', 'RakutenProductClick');
    }
}

// ===== Meta Pixel の埋め込み（オプション）=====
// 以下のコメントを外して、Meta Pixel ID を設定してください
/*
(function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID_HERE'); // ← Meta Pixel ID をここに設定
fbq('track', 'PageView');
*/

console.log('LP が読み込まれました。');
console.log('現在の設定:', config);
