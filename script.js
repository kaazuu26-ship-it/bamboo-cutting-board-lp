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
        // ボタンのリンク設定
        setupButtonLinks();
    })
    .catch(error => {
        console.warn('config.json が見つかりません:', error);
        console.warn('手動で config.json を作成してください。');
    });

// ===== ボタンリンク設定 =====
function setupButtonLinks() {
    // 中間のボタン
    const couponBtnMid = document.getElementById('couponBtnMid');
    const productBtnMid = document.getElementById('productBtnMid');

    // 最後のボタン
    const couponBtnFinal = document.getElementById('couponBtnFinal');
    const productBtnFinal = document.getElementById('productBtnFinal');

    // クーポンボタンの設定
    if (couponBtnMid && config.couponUrl) {
        couponBtnMid.href = config.couponUrl;
        couponBtnMid.addEventListener('click', function() {
            if (window.fbq) {
                fbq('trackCustom', 'RakutenCouponClick');
            }
        });
    }

    if (couponBtnFinal && config.couponUrl) {
        couponBtnFinal.href = config.couponUrl;
        couponBtnFinal.addEventListener('click', function() {
            if (window.fbq) {
                fbq('trackCustom', 'RakutenCouponClick');
            }
        });
    }

    // 商品ボタンの設定
    if (productBtnMid && config.productUrl) {
        productBtnMid.href = config.productUrl;
        productBtnMid.addEventListener('click', function() {
            if (window.fbq) {
                fbq('trackCustom', 'RakutenProductClick');
            }
        });
    }

    if (productBtnFinal && config.productUrl) {
        productBtnFinal.href = config.productUrl;
        productBtnFinal.addEventListener('click', function() {
            if (window.fbq) {
                fbq('trackCustom', 'RakutenProductClick');
            }
        });
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
