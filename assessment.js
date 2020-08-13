'use strict';

const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');

function removeALLChildren(element){
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}

assessmentButton.onclick = () => {
    const userName = userNameInput.value;
    if(userName.length === 0){
        return;
    }
    removeALLChildren(resultDivided);
    const header = document.createElement('h3');
    header.innerText = "診断結果";
    resultDivided.appendChild(header);

    const paragraph = document.createElement("p");
    const result = assessment(userName);
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);

    const paragraph2 = document.createElement('p');
    const picture = imger(userName);
    console.log(picture);
    paragraph2.innerHTML = picture;
    resultDivided.appendChild(paragraph2);

    removeALLChildren(tweetDivided);
    const anchor = document.createElement('a');
    const hrefValue = 
        "https://twitter.com/intent/tweet?button_hashtag=" +
        encodeURIComponent("あなたの好きな女性のタイプ") +
        "&ref_src=twsrc%5Etfw";

    anchor.setAttribute("href", hrefValue);
    anchor.className = 'twitter-hashtag-button';
    anchor.setAttribute('data-text', result);
    anchor.innerText = 'Tweet #あなたの好きな女性のタイプ';

    tweetDivided.appendChild(anchor);
    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    tweetDivided.appendChild(script);

    };
userNameInput.onkeydown = event => {
    if(event.key === "Enter"){
        assessmentButton.onclick();
    }
};

const ansewers = [
'{userName}さんが好きな女性のタイプはロリです。{userName}さんはロリコンです。犯罪者予備軍です。',
'{userName}さんが好きな女性のタイプは妹です。{userName}さんは年下が好きです。「お兄ちゃん」と呼ばれることを夢みています。',
'{userName}さんが好きな女性のタイプは巨乳です。{userName}さんはおっぱいが大好きです。おっぱいだけで飯3杯食えます。',
'{userName}さんが好きな女性のタイプはお姉さんです。{userName}さんは年上が好きです。そして、そのお姉さんにいじめられたいと思っています。',
'{userName}さんが好きな女性のタイプはギャルです。{userName}さんは軽い女性が好きです。sexできると期待しています',
'{userName}さんが好きな女性のタイプはアイドルです。{userName}さんはアイドルが好きです。本気で付き合いと思っています。',
'{userName}さんが好きな女性のタイプはモデルです。{userName}さんは綺麗な女性が好きです。女性に対する理想が高いです。',
'{userName}さんが好きな女性のタイプは金髪です。{userName}さんは金髪の綺麗な女性が好きです。よく洋物のavを見ます',
'{userName}さんが好きな女性のタイプは女王様です。{userName}さんはドMです。シンプルに変態です。',
'{userName}さんが好きな女性のタイプはエロい人です。{userName}さんはセクシーな女性が好きです。常に欲情しています。',
'{userName}さんが好きな女性のタイプは二次元です。{userName}さんはアニメが好きです。現実の女性には興味がありません。',
'{userName}さんが好きな女性のタイプは強い人です。{userName}さんは守られたいと思っています。',
'{userName}さんが好きな女性のタイプは熟女です。{userName}さんは若い女性には興味がありません。年齢が高ければ高いほどいいと考えていています。',
'{userName}さんが好きな女性のタイプはないです。{userName}さんは女性には興味がありません。ゴリゴリの男にしか興味がありません。',
'{userName}さんが好きな女性のタイプは全てです。{userName}さんは女性であれば誰でもいいと考えている変態です。',
'{userName}さんが好きな女性のタイプはドMです。{userName}さんは女性を性欲を満たす道具としか思っていません。' ,
'{userName}さんが好きな女性のタイプはショートカットです。{userName}さんはショートカットが似合う女性が好きです。'
];

const pictures =[
'<img src="https://i.pinimg.com/474x/ce/28/2e/ce282e9ba7bab56ca80bbcbc8cd39482.jpg" alt="ロリ"　width="400" height="400">',
'<img src="https://dechamora.com/wp-content/uploads/2013/04/e50466fe4c6d374c662276f9c065fdbc.jpg" alt="年下"　width="400" height="400">',
'<img src="https://static-ca-cdn.eporner.com/photos/683058_296x1000.jpg" alt="巨乳"　width="400" height="400">',
'<img src="https://pbs.twimg.com/media/ES4CVZhUMAAE29V.jpg" alt="年上"　width="400" height="400">',
'<img src="https://images.supermm.jp/ec/products/576/576436/576436_04_l.jpg" alt="ギャル"　width="400" height="400">',
'<img src="https://i.imgur.com/gZJ8hAY.jpg" alt="アイドル" width="500" height="400">',
'<img src="https://asagei.biz/wp-content/uploads/2020/04/1d0b8f5d08189bab6d098053013df336-1200x1200.jpg" alt="モデル" width="400" height="400">',
'<img src="https://www.celebskart.com/wp-content/uploads/2020/06/jackie-r-jacobson-in-a-yellow-bikini-at-a-boat-photos-shared-in-instagram-2020-06-14-01-768x767.jpg" alt="金髪" width="400" height="400">',
'<img src="https://img.ellegirl.jp/var/assets/storage/images/article/british-royalfamilytree-200108-hns/17/3490877-1-jpn-JP/2-1926_rect490.jpg" alt="女王様" width="400" height="500">',
'<img src="https://i.pinimg.com/originals/1a/8a/74/1a8a7402268bf9cc60d1b301fdf45b62.jpg" alt="エロい" width="400" height="500">',
'<img src="https://punitown.me/bar004/thum/sub/paei0054001-5x.jpg" alt="二次元" width="500" height="400">',
'<img src="https://dot.asahi.com/S2000/upload/2016081900226_1.jpg" alt="強い人" width="400" height="500">',
'<img src="https://dot.asahi.com/S2000/upload/2020031200022_1.jpg" alt="熟女" width="400" height="400">',
'<img src="https://rr.img.naver.jp/mig?src=http%3A%2F%2Fimgcc.naver.jp%2Fkaze%2Fmission%2Ftv%2F20140228%2F16%2F1270616%2F50%2F300x470xf2b483c5a168091216827f89.jpg%2F300%2F600&twidth=300&theight=600&qlt=80&res_format=jpg&op=r" alt="男" width="400" height="500">',
'<img src="https://amd.c.yimg.jp/im_sigg5k6.VwqriXPL34RTyNK1sA---x481-y640-q90-exp3h-pril/amd/20200715-01681895-sspa-000-1-view.jpg" alt="all" width="400" height="500">',
'<img src="https://blog-imgs-101-origin.fc2.com/o/d/a/odanon/1121afrog.jpg" alt="どm" width="400" height="400">',
'<img src="https://broimg.net/images/1818/341/755/_5c5494abf016c.jpeg" alt="ショートカット" width="400" height="400">'
];

function assessment(userName){
    let sumOfCharCode = 0;
    for(let i = 0;i<userName.length;i++){
        sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
    }
    const index = sumOfCharCode % ansewers.length;
    let result = ansewers[index];
    result = result.replace(/\{userName\}/g,userName);

    return result;
}

function imger(userName){
    let sumOfCharCode = 0;
    for(let i = 0;i<userName.length;i++){
        sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
    }
    const index = sumOfCharCode % pictures.length;
    let picture = pictures[index];
    return picture;
}


