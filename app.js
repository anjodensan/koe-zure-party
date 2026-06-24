const modes = [
  {
    id: "easy",
    name: "かんたん",
    rule: "その言葉を直接言わずに説明。周りの人が当てます。",
    prompts: [
      "りんご",
      "ねこ",
      "カレー",
      "自転車",
      "ランドセル",
      "アイス",
      "サッカー",
      "バナナ",
      "えんぴつ",
      "おにぎり",
      "いぬ",
      "みかん",
      "パン",
      "牛乳",
      "すべり台",
      "電車",
      "バス",
      "ケーキ",
      "くつ",
      "かさ",
      "テレビ",
      "ピアノ",
      "プール",
      "花",
      "時計",
      "たまご",
      "うどん",
      "チョコ",
      "おふろ",
      "ふとん",
      "歯ブラシ",
      "ハンバーグ",
      "ロボット",
      "おまつり",
      "シャボン玉",
      "動物園",
      "すいか",
      "たこ",
      "かに",
      "ドーナツ",
      "本",
      "手紙",
      "公園",
      "飛行機",
      "船",
      "雪だるま",
      "風船",
      "カメラ",
      "リュック",
      "ポテト"
    ]
  },
  {
    id: "normal",
    name: "ふつう",
    rule: "その言葉を直接言わずに説明。周りの人が当てます。",
    prompts: [
      "たこ焼き",
      "新幹線",
      "カラオケ",
      "冷蔵庫",
      "観覧車",
      "花火大会",
      "目覚まし時計",
      "回転寿司",
      "卒業式",
      "キャンプ",
      "コンビニ",
      "映画館",
      "水族館",
      "図書館",
      "遊園地",
      "電子レンジ",
      "洗濯機",
      "掃除機",
      "スマートフォン",
      "イヤホン",
      "ハンカチ",
      "自動販売機",
      "郵便ポスト",
      "信号機",
      "横断歩道",
      "焼きそば",
      "ラーメン",
      "ハンバーガー",
      "クリスマス",
      "誕生日",
      "運動会",
      "遠足",
      "宿題",
      "給食",
      "温泉",
      "旅館",
      "空港",
      "銀行",
      "病院",
      "美容院",
      "野球",
      "バスケットボール",
      "スケート",
      "ピクニック",
      "釣り",
      "写真撮影",
      "料理番組",
      "天気予報",
      "宝くじ",
      "福袋"
    ]
  },
  {
    id: "hard",
    name: "むずかしい",
    rule: "その言葉を直接言わずに説明。周りの人が当てます。",
    prompts: [
      "宇宙旅行",
      "タイムマシン",
      "透明人間",
      "株主総会",
      "リモート会議",
      "防災訓練",
      "人工知能",
      "節約生活",
      "無人島",
      "選挙演説",
      "記者会見",
      "確定申告",
      "満員電車",
      "取扱説明書",
      "地球温暖化",
      "自動運転",
      "暗号資産",
      "サブスクリプション",
      "オンライン授業",
      "フードロス",
      "プレゼン資料",
      "面接試験",
      "裁判官",
      "内閣総理大臣",
      "気象予報士",
      "救急搬送",
      "避難経路",
      "宇宙ステーション",
      "深海探査",
      "世界遺産",
      "電子マネー",
      "生成AI",
      "個人情報",
      "著作権",
      "特許",
      "輸入品",
      "時差ぼけ",
      "睡眠不足",
      "健康診断",
      "婚姻届",
      "引っ越し業者",
      "保証書",
      "充電切れ",
      "通信障害",
      "予約キャンセル",
      "会員登録",
      "本人確認",
      "在宅勤務",
      "期末テスト",
      "多数決"
    ]
  }
];

const $ = (selector) => document.querySelector(selector);
const TIMER_TICK_MS = 120;
const MAX_PLAYERS = 5;
const promptNgWords = {
  "りんご": ["赤い", "果物", "青森"],
  "ねこ": ["動物", "にゃー", "ひげ"],
  "カレー": ["辛い", "ごはん", "ルー"],
  "自転車": ["ペダル", "二輪", "乗る"],
  "ランドセル": ["小学生", "背負う", "学校"],
  "アイス": ["冷たい", "甘い", "溶ける"],
  "サッカー": ["ボール", "ゴール", "足"],
  "バナナ": ["黄色", "果物", "むく"],
  "えんぴつ": ["書く", "文房具", "削る"],
  "おにぎり": ["ごはん", "三角", "のり"],
  "いぬ": ["動物", "わん", "散歩"],
  "みかん": ["オレンジ", "果物", "こたつ"],
  "パン": ["焼く", "小麦", "朝ごはん"],
  "牛乳": ["白い", "飲み物", "牛"],
  "すべり台": ["公園", "すべる", "遊具"],
  "電車": ["線路", "駅", "乗る"],
  "バス": ["停留所", "運転手", "乗る"],
  "ケーキ": ["誕生日", "甘い", "クリーム"],
  "くつ": ["足", "履く", "歩く"],
  "かさ": ["雨", "さす", "ぬれない"],
  "テレビ": ["番組", "画面", "リモコン"],
  "ピアノ": ["鍵盤", "音楽", "弾く"],
  "プール": ["水泳", "水", "泳ぐ"],
  "花": ["咲く", "きれい", "植物"],
  "時計": ["時間", "針", "見る"],
  "たまご": ["黄身", "白身", "割る"],
  "うどん": ["麺", "つゆ", "白い"],
  "チョコ": ["甘い", "茶色", "お菓子"],
  "おふろ": ["お湯", "入る", "体"],
  "ふとん": ["寝る", "布団", "ベッド"],
  "歯ブラシ": ["歯", "みがく", "洗面所"],
  "ハンバーグ": ["肉", "丸い", "ソース"],
  "ロボット": ["機械", "動く", "未来"],
  "おまつり": ["屋台", "夏", "神社"],
  "シャボン玉": ["泡", "飛ぶ", "割れる"],
  "動物園": ["動物", "見る", "檻"],
  "すいか": ["夏", "緑", "種"],
  "たこ": ["海", "足", "八本"],
  "かに": ["はさみ", "海", "横歩き"],
  "ドーナツ": ["丸い", "穴", "甘い"],
  "本": ["読む", "ページ", "文字"],
  "手紙": ["書く", "送る", "封筒"],
  "公園": ["遊ぶ", "広場", "遊具"],
  "飛行機": ["空", "飛ぶ", "空港"],
  "船": ["海", "乗る", "港"],
  "雪だるま": ["雪", "冬", "丸い"],
  "風船": ["ふくらむ", "飛ぶ", "ゴム"],
  "カメラ": ["写真", "撮る", "レンズ"],
  "リュック": ["背負う", "荷物", "バッグ"],
  "ポテト": ["じゃがいも", "揚げる", "フライ"],
  "たこ焼き": ["丸い", "ソース", "大阪"],
  "新幹線": ["速い", "線路", "駅"],
  "カラオケ": ["歌う", "マイク", "採点"],
  "冷蔵庫": ["冷やす", "食べ物", "台所"],
  "観覧車": ["遊園地", "高い", "回る"],
  "花火大会": ["夏", "夜空", "音"],
  "目覚まし時計": ["朝", "起こす", "鳴る"],
  "回転寿司": ["寿司", "皿", "回る"],
  "卒業式": ["学校", "別れ", "証書"],
  "キャンプ": ["テント", "外", "火"],
  "コンビニ": ["店", "24時間", "弁当"],
  "映画館": ["スクリーン", "映画", "ポップコーン"],
  "水族館": ["魚", "水槽", "イルカ"],
  "図書館": ["本", "静か", "借りる"],
  "遊園地": ["乗り物", "アトラクション", "チケット"],
  "電子レンジ": ["温める", "台所", "チン"],
  "洗濯機": ["服", "洗う", "水"],
  "掃除機": ["ごみ", "吸う", "部屋"],
  "スマートフォン": ["電話", "画面", "アプリ"],
  "イヤホン": ["耳", "音楽", "聞く"],
  "ハンカチ": ["手", "ふく", "布"],
  "自動販売機": ["飲み物", "買う", "ボタン"],
  "郵便ポスト": ["手紙", "赤い", "入れる"],
  "信号機": ["赤", "青", "道路"],
  "横断歩道": ["道", "渡る", "白線"],
  "焼きそば": ["麺", "ソース", "祭り"],
  "ラーメン": ["麺", "スープ", "どんぶり"],
  "ハンバーガー": ["パン", "肉", "はさむ"],
  "クリスマス": ["12月", "サンタ", "プレゼント"],
  "誕生日": ["ケーキ", "年齢", "お祝い"],
  "運動会": ["学校", "走る", "競技"],
  "遠足": ["弁当", "学校", "出かける"],
  "宿題": ["勉強", "家", "提出"],
  "給食": ["学校", "昼ごはん", "食べる"],
  "温泉": ["お湯", "旅館", "入る"],
  "旅館": ["旅行", "泊まる", "和室"],
  "空港": ["飛行機", "出発", "荷物"],
  "銀行": ["お金", "口座", "ATM"],
  "病院": ["医者", "診察", "具合悪い"],
  "美容院": ["髪", "切る", "鏡"],
  "野球": ["バット", "ボール", "ホームラン"],
  "バスケットボール": ["ボール", "ゴール", "ドリブル"],
  "スケート": ["氷", "すべる", "靴"],
  "ピクニック": ["外", "弁当", "公園"],
  "釣り": ["魚", "針", "川"],
  "写真撮影": ["カメラ", "撮る", "ポーズ"],
  "料理番組": ["料理", "テレビ", "レシピ"],
  "天気予報": ["天気", "雨", "ニュース"],
  "宝くじ": ["当たる", "番号", "お金"],
  "福袋": ["正月", "袋", "中身"],
  "宇宙旅行": ["宇宙", "ロケット", "星"],
  "タイムマシン": ["時間", "未来", "過去"],
  "透明人間": ["見えない", "透明", "人"],
  "株主総会": ["会社", "株", "会議"],
  "リモート会議": ["オンライン", "画面", "仕事"],
  "防災訓練": ["避難", "災害", "練習"],
  "人工知能": ["AI", "コンピューター", "考える"],
  "節約生活": ["お金", "安い", "我慢"],
  "無人島": ["島", "誰もいない", "海"],
  "選挙演説": ["投票", "政治", "マイク"],
  "記者会見": ["質問", "発表", "報道"],
  "確定申告": ["税金", "書類", "お金"],
  "満員電車": ["混む", "通勤", "駅"],
  "取扱説明書": ["説明", "使い方", "読む"],
  "地球温暖化": ["暑い", "地球", "環境"],
  "自動運転": ["車", "運転", "自動"],
  "暗号資産": ["仮想通貨", "投資", "ブロックチェーン"],
  "サブスクリプション": ["月額", "サービス", "契約"],
  "オンライン授業": ["授業", "ネット", "先生"],
  "フードロス": ["食べ物", "捨てる", "もったいない"],
  "プレゼン資料": ["発表", "スライド", "説明"],
  "面接試験": ["仕事", "質問", "採用"],
  "裁判官": ["法律", "判決", "裁判"],
  "内閣総理大臣": ["政治", "首相", "国会"],
  "気象予報士": ["天気", "予報", "資格"],
  "救急搬送": ["救急車", "病院", "運ぶ"],
  "避難経路": ["逃げる", "道", "災害"],
  "宇宙ステーション": ["宇宙", "施設", "地球"],
  "深海探査": ["海", "深い", "調査"],
  "世界遺産": ["観光", "文化", "登録"],
  "電子マネー": ["支払い", "スマホ", "チャージ"],
  "生成AI": ["AI", "作る", "文章"],
  "個人情報": ["名前", "住所", "秘密"],
  "著作権": ["コピー", "作品", "権利"],
  "特許": ["発明", "権利", "申請"],
  "輸入品": ["外国", "買う", "商品"],
  "時差ぼけ": ["海外", "眠い", "時間"],
  "睡眠不足": ["眠い", "寝る", "足りない"],
  "健康診断": ["病院", "検査", "体"],
  "婚姻届": ["結婚", "役所", "書類"],
  "引っ越し業者": ["荷物", "家", "運ぶ"],
  "保証書": ["修理", "買う", "紙"],
  "充電切れ": ["電池", "スマホ", "なくなる"],
  "通信障害": ["ネット", "つながらない", "電波"],
  "予約キャンセル": ["予約", "やめる", "連絡"],
  "会員登録": ["登録", "アカウント", "メール"],
  "本人確認": ["身分証", "確認", "登録"],
  "在宅勤務": ["家", "仕事", "パソコン"],
  "期末テスト": ["学校", "試験", "成績"],
  "多数決": ["投票", "多い", "決める"]
};

const elements = {
  audioStatus: $("#audioStatus"),
  toggleAudio: $("#toggleAudio"),
  meterBar: $("#meterBar"),
  delayValue: $("#delayValue"),
  voiceSlider: $("#voiceSlider"),
  voiceValue: $("#voiceValue"),
  maskSlider: $("#maskSlider"),
  maskValue: $("#maskValue"),
  maskType: $("#maskType"),
  presetButtons: document.querySelectorAll("[data-delay]"),
  timeButtons: document.querySelectorAll("[data-seconds]"),
  modeButtons: $("#modeButtons"),
  promptText: $("#promptText"),
  ngLine: $("#ngLine"),
  promptRule: $("#promptRule"),
  micPanel: $("#micPanel"),
  micState: $("#micState"),
  micHint: $("#micHint"),
  answerLine: $("#answerLine"),
  prevPrompt: $("#prevPrompt"),
  nextPrompt: $("#nextPrompt"),
  timerButton: $("#timerButton"),
  playersBoard: $("#playersBoard"),
  addPlayer: $("#addPlayer"),
  removePlayer: $("#removePlayer"),
  resetScore: $("#resetScore")
};

let audioContext;
let mediaStream;
let sourceNode;
let delayNode;
let gainNode;
let maskGainNode;
let noiseNode;
let musicNodes = [];
let analyserNode;
let animationId;
let isAudioRunning = false;
let isAudioLoading = false;

let modeIndex = 0;
let promptIndex = -1;
let promptHistory = [];
let timerId;
let timerEndsAt = 0;
let selectedSeconds = 30;
let remainingSeconds = selectedSeconds;
let players = [
  { name: "プレイヤー1", score: 0 },
  { name: "プレイヤー2", score: 0 }
];

function getNgWords(text) {
  return promptNgWords[text] || ["名前そのもの", "似た言葉", "ジェスチャー"];
}

function renderModes() {
  elements.modeButtons.replaceChildren();
  modes.forEach((mode, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = mode.name;
    button.className = index === modeIndex ? "active" : "";
    button.addEventListener("click", () => {
      modeIndex = index;
      promptIndex = -1;
      promptHistory = [];
      renderModes();
      resetTimer();
      renderPrompt();
    });
    elements.modeButtons.appendChild(button);
  });
}

function refreshModeButtons() {
  [...elements.modeButtons.children].forEach((button, index) => {
    button.classList.toggle("active", index === modeIndex);
  });
}

function currentMode() {
  return modes[modeIndex];
}

function renderPrompt() {
  const mode = currentMode();
  const hasPrompt = promptIndex >= 0;
  const prompt = hasPrompt ? mode.prompts[promptIndex] : "";

  elements.promptText.textContent = hasPrompt ? prompt : "ここにお題が表示されます";
  elements.promptText.classList.toggle("is-placeholder", !hasPrompt);
  elements.ngLine.textContent = hasPrompt
    ? `NGワード: ${getNgWords(prompt).join("・")}`
    : "表示されるNGワードは説明に使ってはいけません";
  elements.ngLine.hidden = false;
  elements.promptRule.textContent = mode.rule;
  elements.answerLine.hidden = true;
  elements.timerButton.disabled = !hasPrompt;
  elements.prevPrompt.disabled = !hasPrompt;
  elements.prevPrompt.hidden = !hasPrompt;
  elements.nextPrompt.textContent = hasPrompt ? "次のお題" : "はじめる";
  refreshModeButtons();
}

function getRandomPromptIndex() {
  const prompts = currentMode().prompts;
  if (prompts.length <= 1) {
    return 0;
  }

  let nextIndex = promptIndex;
  while (nextIndex === promptIndex) {
    nextIndex = Math.floor(Math.random() * prompts.length);
  }
  return nextIndex;
}

function showNextPrompt() {
  stopRoundAudio();
  promptIndex = getRandomPromptIndex();
  promptHistory.push(promptIndex);
  resetTimer();
  renderPrompt();
}

function showPreviousPrompt() {
  stopRoundAudio();
  if (promptHistory.length > 1) {
    promptHistory.pop();
    promptIndex = promptHistory[promptHistory.length - 1];
  }
  resetTimer();
  renderPrompt();
}

function updateDelay(value) {
  const delayMs = Number(value);
  elements.delayValue.textContent = String(delayMs);
  if (delayNode && audioContext) {
    delayNode.delayTime.setTargetAtTime(delayMs / 1000, audioContext.currentTime, 0.015);
  }
  elements.presetButtons.forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.delay) === delayMs);
  });
}

function updateVoiceVolume(value) {
  const volume = Number(value);
  elements.voiceValue.textContent = String(volume);
  if (gainNode && audioContext) {
    gainNode.gain.setTargetAtTime(volume / 100, audioContext.currentTime, 0.015);
  }
}

function updateMaskVolume(value) {
  const volume = Number(value);
  elements.maskValue.textContent = String(volume);
  if (maskGainNode && audioContext) {
    maskGainNode.gain.setTargetAtTime(volume / 100, audioContext.currentTime, 0.015);
  }
}

async function startAudio() {
  if (isAudioRunning) {
    return true;
  }
  if (isAudioLoading) {
    return false;
  }

  const hasMicApi = Boolean(window.navigator?.mediaDevices?.getUserMedia);
  if (!hasMicApi) {
    setMicState("unsupported");
    elements.audioStatus.textContent = "ブラウザ非対応";
    return false;
  }

  isAudioLoading = true;
  setMicState("loading");

  try {
    mediaStream = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: false,
        noiseSuppression: false,
        autoGainControl: false
      },
      video: false
    });

    audioContext = new AudioContext();
    sourceNode = audioContext.createMediaStreamSource(mediaStream);
    delayNode = audioContext.createDelay(1);
    gainNode = audioContext.createGain();
    maskGainNode = audioContext.createGain();
    analyserNode = audioContext.createAnalyser();

    delayNode.delayTime.value = Number(elements.delayValue.textContent) / 1000;
    gainNode.gain.value = Number(elements.voiceSlider.value) / 100;
    maskGainNode.gain.value = Number(elements.maskSlider.value) / 100;
    analyserNode.fftSize = 256;

    sourceNode.connect(analyserNode);
    sourceNode.connect(delayNode);
    delayNode.connect(gainNode);
    gainNode.connect(audioContext.destination);
    maskGainNode.connect(audioContext.destination);

    isAudioRunning = true;
    isAudioLoading = false;
    setMicState("live");
    elements.audioStatus.textContent = "動作中";
    elements.audioStatus.classList.add("live");
    elements.toggleAudio.classList.add("running");
    elements.toggleAudio.innerHTML = '<span class="button-icon" aria-hidden="true">■</span><span>こえズレ停止</span>';
    animateMeter();
    return true;
  } catch (error) {
    isAudioLoading = false;
    const detail = getAudioErrorMessage(error);
    setMicState("error", detail.hint);
    elements.audioStatus.textContent = detail.status;
    return false;
  }
}

async function stopAudio() {
  stopMaskingSound();
  cancelAnimationFrame(animationId);
  elements.meterBar.style.width = "0%";

  if (mediaStream) {
    mediaStream.getTracks().forEach((track) => track.stop());
  }
  if (audioContext) {
    await audioContext.close();
  }

  mediaStream = null;
  audioContext = null;
  sourceNode = null;
  delayNode = null;
  gainNode = null;
  maskGainNode = null;
  analyserNode = null;
  isAudioRunning = false;
  isAudioLoading = false;

  setMicState("off");
  elements.audioStatus.textContent = "停止中";
  elements.audioStatus.classList.remove("live");
  elements.toggleAudio.classList.remove("running");
  elements.toggleAudio.innerHTML = '<span class="button-icon" aria-hidden="true">▶</span><span>こえズレ開始</span>';
}

function startMaskingSound() {
  stopMaskingSound();
  if (!audioContext || !maskGainNode) {
    return;
  }
  if (elements.maskType.value === "none") {
    return;
  } else if (elements.maskType.value === "noise") {
    startNoise();
  } else {
    startMusic();
  }
}

function stopMaskingSound() {
  musicNodes.forEach((node) => {
    try {
      node.stop();
    } catch {}
  });
  musicNodes = [];
  if (noiseNode) {
    try {
      noiseNode.stop();
    } catch {}
    noiseNode = null;
  }
}

function startNoise() {
  const bufferSize = audioContext.sampleRate * 2;
  const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
  const data = buffer.getChannelData(0);
  for (let index = 0; index < bufferSize; index += 1) {
    data[index] = Math.random() * 2 - 1;
  }
  noiseNode = audioContext.createBufferSource();
  noiseNode.buffer = buffer;
  noiseNode.loop = true;
  noiseNode.connect(maskGainNode);
  noiseNode.start();
}

function startMusic() {
  const chordGain = audioContext.createGain();
  const lfo = audioContext.createOscillator();
  const lfoGain = audioContext.createGain();
  const notes = [220, 277.18, 329.63, 440];

  chordGain.gain.value = 0.2;
  chordGain.connect(maskGainNode);
  lfo.frequency.value = 5.4;
  lfoGain.gain.value = 8;

  notes.forEach((frequency, index) => {
    const oscillator = audioContext.createOscillator();
    oscillator.type = index % 2 === 0 ? "sine" : "triangle";
    oscillator.frequency.value = frequency;
    lfo.connect(lfoGain);
    lfoGain.connect(oscillator.frequency);
    oscillator.connect(chordGain);
    oscillator.start();
    musicNodes.push(oscillator);
  });

  lfo.start();
  musicNodes.push(lfo);
}

function getAudioErrorMessage(error) {
  const name = error?.name || "";
  if (name === "NotAllowedError" || name === "PermissionDeniedError") {
    return {
      status: "許可が必要",
      hint: "ブラウザのマイク許可が拒否されています。アドレスバー付近のマイク設定を確認してください"
    };
  }
  if (name === "NotFoundError" || name === "DevicesNotFoundError") {
    return {
      status: "マイクなし",
      hint: "使えるマイクが見つかりません。端末のマイク接続を確認してください"
    };
  }
  if (name === "NotReadableError" || name === "TrackStartError") {
    return {
      status: "使用中",
      hint: "他のアプリがマイクを使っている可能性があります"
    };
  }
  if (name === "SecurityError") {
    return {
      status: "制限中",
      hint: "このブラウザではマイクが制限されています。ChromeかSafariで http://127.0.0.1:4180/ を開いてください"
    };
  }
  return {
    status: "マイク不可",
    hint: "Codex内ブラウザで許可が出ない場合は、ChromeかSafariで http://127.0.0.1:4180/ を開いてください"
  };
}

function setMicState(state, customHint) {
  const messages = {
    off: ["マイク未接続", "スタートで自動的に音声ディレイを開始します"],
    loading: ["マイク準備中", "ブラウザの許可を確認しています"],
    live: ["マイク接続中", "音声ディレイが動いています"],
    error: ["マイクを使えません", "ブラウザのマイク許可を確認してください"],
    unsupported: ["このブラウザではマイク不可", "ChromeかSafariで http://127.0.0.1:4180/ を開いてください"]
  };
  const [title, hint] = messages[state];
  elements.micPanel.dataset.state = state;
  elements.micState.textContent = title;
  elements.micHint.textContent = customHint || hint;
}

function animateMeter() {
  if (!analyserNode) {
    return;
  }

  const data = new Uint8Array(analyserNode.frequencyBinCount);
  analyserNode.getByteTimeDomainData(data);
  let sum = 0;
  for (const value of data) {
    const centered = value - 128;
    sum += centered * centered;
  }
  const rms = Math.sqrt(sum / data.length);
  const width = Math.min(100, Math.round(rms * 5));
  elements.meterBar.style.width = `${width}%`;
  animationId = requestAnimationFrame(animateMeter);
}

async function toggleTimer() {
  if (promptIndex < 0 || timerId) {
    return;
  }

  elements.timerButton.disabled = true;
  elements.timerButton.textContent = "マイク準備中";
  const audioStarted = await startAudio();
  if (!audioStarted) {
    elements.timerButton.disabled = false;
    elements.timerButton.textContent = `${selectedSeconds}秒スタート`;
    return;
  }

  elements.answerLine.hidden = true;
  elements.timerButton.classList.add("running");
  elements.timerButton.disabled = false;
  startMaskingSound();
  timerEndsAt = Date.now() + selectedSeconds * 1000;
  tickTimer();
  timerId = setInterval(tickTimer, TIMER_TICK_MS);
}

function tickTimer() {
  const msLeft = Math.max(0, timerEndsAt - Date.now());
  remainingSeconds = Math.ceil(msLeft / 1000);
  renderTimer();
  if (msLeft <= 0) {
    finishRound();
  }
}

function finishRound() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
  elements.timerButton.classList.remove("running");
  elements.timerButton.textContent = "終了";
  elements.answerLine.textContent = "時間です。答えを発表してください！";
  elements.answerLine.hidden = false;
  if (isAudioRunning) {
    stopAudio();
  }
}

function renderTimer() {
  elements.timerButton.textContent = `${remainingSeconds}秒`;
  elements.timerButton.classList.toggle("danger", remainingSeconds > 0 && remainingSeconds <= 5);
}

function resetTimer() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
  timerEndsAt = 0;
  remainingSeconds = selectedSeconds;
  elements.timerButton.classList.remove("running", "danger");
  elements.timerButton.textContent = `${selectedSeconds}秒スタート`;
  elements.answerLine.hidden = true;
}

function updateSelectedSeconds(value) {
  selectedSeconds = Number(value);
  elements.timeButtons.forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.seconds) === selectedSeconds);
  });
  resetTimer();
}

function stopRoundAudio() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
  if (isAudioRunning || isAudioLoading) {
    stopAudio();
  }
}

function renderPlayers() {
  elements.playersBoard.replaceChildren();
  elements.playersBoard.style.setProperty("--player-count", String(players.length));
  players.forEach((player, index) => {
    const card = document.createElement("div");
    const name = document.createElement("span");
    const score = document.createElement("strong");
    const controls = document.createElement("div");
    const minusButton = document.createElement("button");
    const plusButton = document.createElement("button");
    card.className = "player-card";
    controls.className = "score-controls";
    name.textContent = player.name;
    score.textContent = String(player.score);
    minusButton.type = "button";
    minusButton.className = "score-minus";
    minusButton.textContent = "-1";
    minusButton.addEventListener("click", () => updateScore(index, -1));
    plusButton.type = "button";
    plusButton.textContent = "+1";
    plusButton.addEventListener("click", () => updateScore(index, 1));
    controls.append(minusButton, plusButton);
    card.append(name, score, controls);
    elements.playersBoard.appendChild(card);
  });
  elements.addPlayer.disabled = players.length >= MAX_PLAYERS;
  elements.removePlayer.disabled = players.length < 3;
}

function updateScore(index, delta) {
  players[index].score = Math.max(0, players[index].score + delta);
  renderPlayers();
}

function addPlayer() {
  if (players.length >= MAX_PLAYERS) {
    return;
  }
  players.push({ name: `プレイヤー${players.length + 1}`, score: 0 });
  renderPlayers();
}

function removePlayer() {
  if (players.length < 3) {
    return;
  }
  players.pop();
  players = players.map((player, playerIndex) => ({
    ...player,
    name: `プレイヤー${playerIndex + 1}`
  }));
  renderPlayers();
}

elements.toggleAudio.addEventListener("click", async () => {
  if (isAudioRunning) {
    stopAudio();
  } else {
    const audioStarted = await startAudio();
    if (audioStarted) {
      startMaskingSound();
    }
  }
});

elements.voiceSlider.addEventListener("input", (event) => updateVoiceVolume(event.target.value));
elements.maskSlider.addEventListener("input", (event) => updateMaskVolume(event.target.value));
elements.maskType.addEventListener("change", () => {
  if (isAudioRunning) {
    startMaskingSound();
  }
});
elements.presetButtons.forEach((button) => {
  button.addEventListener("click", () => updateDelay(button.dataset.delay));
});
elements.timeButtons.forEach((button) => {
  button.addEventListener("click", () => updateSelectedSeconds(button.dataset.seconds));
});

elements.nextPrompt.addEventListener("click", showNextPrompt);
elements.prevPrompt.addEventListener("click", showPreviousPrompt);
elements.timerButton.addEventListener("click", toggleTimer);
elements.addPlayer.addEventListener("click", addPlayer);
elements.removePlayer.addEventListener("click", removePlayer);

elements.resetScore.addEventListener("click", () => {
  players = players.map((player) => ({ ...player, score: 0 }));
  renderPlayers();
});

window.addEventListener("beforeunload", () => {
  if (mediaStream) {
    mediaStream.getTracks().forEach((track) => track.stop());
  }
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {});
  });
}

renderModes();
renderPlayers();
renderPrompt();
