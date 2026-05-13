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
        // リンク設定
        setupLinks();
    })
    .catch(error => {
        console.warn('config.json が見つかりません:', error);
        console.warn('手動で config.json を作成してください。');
    });

// ===== リンク設定 =====
function setupLinks() {
    // CTA 画像リンク（クーポンページへ）
    const ctaMidLink = document.getElementById('ctaMidLink');
    const ctaFinalLink = document.getElementById('ctaFinalLink');

    // 商品ボタン
    const productBtnMid = document.getElementById('productBtnMid');
    const productBtnFinal = document.getElementById('productBtnFinal');

    // CTA リンク設定（クーポン）
    if (ctaMidLink && config.couponUrl) {
        ctaMidLink.href = config.couponUrl;
        ctaMidLink.addEventListener('click', function() {
            if (window.fbq) {
                fbq('trackCustom', 'RakutenCouponClick');
            }
        });
    }

    if (ctaFinalLink && config.couponUrl) {
        ctaFinalLink.href = config.couponUrl;
        ctaFinalLink.addEventListener('click', function() {
            if (window.fbq) {
                fbq('trackCustom', 'RakutenCouponClick');
            }
        });
    }

    // 商品ボタン設定
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

// ===== Meta Pixel の埋め込み =====
(function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', config.pixelId);
fbq('track', 'PageView');

console.log('LP が読み込まれました。');
console.log('現在の設定:', config);
