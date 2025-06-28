document.getElementById('draw-button').addEventListener('click', function() {
    const fortunes = {
        '大吉': {
            description: '素晴らしい一日になるでしょう。新しい挑戦に最適です。',
            summer_message: 'まるでラムネのように爽やかな気分で過ごせそう。'
        },
        '吉': {
            description: '幸運が訪れる予感。積極的に行動しましょう。',
            summer_message: '風鈴の音色のように、涼やかな幸運が舞い込みます。'
        },
        '中吉': {
            description: '穏やかな一日。周りの人への感謝を忘れずに。',
            summer_message: '線香花火のように、儚くも美しい時間を楽しんで。'
        },
        '小吉': {
            description: 'ささやかな幸せがありそう。見逃さないで。',
            summer_message: '冷たい麦茶が身に染みるような、小さな喜びに満ちた日。'
        },
        '末吉': {
            description: '努力が実を結ぶ時。最後まで諦めないで。',
            summer_message: 'ひまわりのように、太陽に向かって真っ直ぐ進めば道は開けます。'
        },
        '凶': {
            description: '少し注意が必要な日。慎重に行動しましょう。',
            summer_message: '夕立のように、急な変化に気をつけて。傘を忘れずに。'
        },
        '大凶': {
            description: '今日は控えめに。嵐が過ぎ去るのを待ちましょう。',
            summer_message: '暑さでぼーっとしてしまいがち。水分補給を忘れずに、冷静に。'
        }
    };
    const fortuneKeys = Object.keys(fortunes);
    const randomIndex = Math.floor(Math.random() * fortuneKeys.length);
    const fortune = fortuneKeys[randomIndex];
    const details = fortunes[fortune];
    const resultDisplay = document.getElementById('result-display');

    resultDisplay.innerHTML = '';

    // フェードアウト
    resultDisplay.classList.add('fade-out');

    setTimeout(() => {
        const fortuneEl = document.createElement('div');
        fortuneEl.className = 'fortune';
        fortuneEl.textContent = fortune;

        const descriptionEl = document.createElement('div');
        descriptionEl.className = 'description';
        descriptionEl.textContent = details.description;

        const summerMessageEl = document.createElement('div');
        summerMessageEl.className = 'summer-message';
        summerMessageEl.textContent = details.summer_message;

        resultDisplay.appendChild(fortuneEl);
        resultDisplay.appendChild(descriptionEl);
        resultDisplay.appendChild(summerMessageEl);

        // フェードイン
        resultDisplay.classList.remove('fade-out');
    }, 500); // フェードアウトの時間と合わせる
});