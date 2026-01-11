const grammarData = [
    // ==========================================
    // 【1. 品詞問題 (名詞・動詞・形容詞・副詞)】
    // ==========================================
    {
        q: "The maintenance ------- will arrive at the factory at 9:00 A.M.",
        options: ["crew", "crews", "crewed", "crewing"],
        ans: "crew", trans: "保守作業チームは午前9時に工場に到着します。", cat: "名詞"
    },
    {
        q: "Please review the manual ------- before operating the equipment.",
        options: ["careful", "carefully", "carefulness", "caring"],
        ans: "carefully", trans: "装置を操作する前に、マニュアルを注意深く確認してください。", cat: "副詞"
    },
    {
        q: "Daily ------- of the vacuum chamber is necessary for stable production.",
        options: ["inspect", "inspected", "inspection", "inspecting"],
        ans: "inspection", trans: "安定した生産のためには、真空チャンバーの毎日の検査が必要である。", cat: "名詞"
    },
    {
        q: "The new sensor is ------- more sensitive than the previous model.",
        options: ["significance", "significant", "significantly", "signify"],
        ans: "significantly", trans: "新しいセンサーは、以前のモデルよりもかなり感度が高い。", cat: "副詞"
    },
    {
        q: "We need to find a ------- solution to this recurring error.",
        options: ["permanence", "permanent", "permanently", "permanency"],
        ans: "permanent", trans: "この再発するエラーに対して、恒久的な解決策を見つける必要がある。", cat: "形容詞"
    },
    {
        q: "The customer was very ------- with the speed of our service.",
        options: ["satisfy", "satisfying", "satisfied", "satisfaction"],
        ans: "satisfied", trans: "顧客は我々のサービスの速さに非常に満足していた。", cat: "形容詞"
    },
    {
        q: "Access to the cleanroom is strictly ------- to authorized personnel.",
        options: ["limit", "limits", "limited", "limiting"],
        ans: "limited", trans: "クリーンルームへの立ち入りは、許可された職員に厳しく制限されている。", cat: "形容詞"
    },
    {
        q: "Please read the safety instructions -------.",
        options: ["thorough", "thoroughly", "thoroughness", "thoroughbred"],
        ans: "thoroughly", trans: "安全に関する指示書を徹底的に読んでください。", cat: "副詞"
    },
    {
        q: "The engineer spoke ------- about the new semiconductor technology.",
        options: ["knowledge", "know", "knowledgeable", "knowledgeably"],
        ans: "knowledgeably", trans: "そのエンジニアは新しい半導体技術について知識豊富に語った。", cat: "副詞"
    },
    {
        q: "Regular ------- is key to extending the machine's lifespan.",
        options: ["maintains", "maintained", "maintenance", "maintaining"],
        ans: "maintenance", trans: "定期的なメンテナンスは、機械の寿命を延ばすための鍵である。", cat: "名詞"
    },
    {
        q: "The system runs ------- even under high pressure.",
        options: ["efficient", "efficiency", "efficiently", "efficiencies"],
        ans: "efficiently", trans: "そのシステムは高圧下でも効率的に稼働する。", cat: "副詞"
    },
    {
        q: "It is ------- to wear protective gear in this area.",
        options: ["mandatory", "mandate", "mandated", "mandatorily"],
        ans: "mandatory", trans: "このエリアでは保護具の着用が義務付けられている。", cat: "形容詞"
    },
    {
        q: "The project was completed ------- thanks to the team's effort.",
        options: ["success", "succeed", "successful", "successfully"],
        ans: "successfully", trans: "チームの努力のおかげで、プロジェクトは無事完了した。", cat: "副詞"
    },
    {
        q: "Please accept our sincere ------- for the delay.",
        options: ["apologize", "apologies", "apologetic", "apologetically"],
        ans: "apologies", trans: "遅延に対する心からのお詫びを受け入れてください。", cat: "名詞"
    },
    {
        q: "The data shows a ------- increase in production yield.",
        options: ["steady", "steadily", "steadiness", "steads"],
        ans: "steady", trans: "データは生産歩留まりの着実な増加を示している。", cat: "形容詞"
    },
    {
        q: "Workers must follow the guidelines -------.",
        options: ["strict", "strictly", "strictness", "stricter"],
        ans: "strictly", trans: "作業員はガイドラインに厳格に従わなければならない。", cat: "副詞"
    },
    {
        q: "We offer a wide ------- of electronic components.",
        options: ["vary", "various", "variety", "varied"],
        ans: "variety", trans: "我々は多種多様な電子部品を提供している。", cat: "名詞"
    },
    {
        q: "The software update was ------- successful.",
        options: ["high", "highly", "height", "heighten"],
        ans: "highly", trans: "ソフトウェアの更新は非常にうまくいった。", cat: "副詞"
    },
    {
        q: "The instructions were ------- complex for the new staff.",
        options: ["too", "two", "to", "tow"],
        ans: "too", trans: "その指示書は新人スタッフにはあまりにも複雑すぎた。", cat: "副詞"
    },
    {
        q: "Effective ------- is essential for teamwork.",
        options: ["communicate", "communicates", "communication", "communicative"],
        ans: "communication", trans: "効果的なコミュニケーションはチームワークに不可欠だ。", cat: "名詞"
    },

    // ==========================================
    // 【2. 動詞の形 (時制・受動態・助動詞)】
    // ==========================================
    {
        q: "All engineers must ------- safety goggles inside the cleanroom.",
        options: ["wear", "wears", "wearing", "wore"],
        ans: "wear", trans: "すべてのエンジニアはクリーンルーム内で保護メガネを着用しなければならない。", cat: "助動詞"
    },
    {
        q: "The machine stopped working because the power supply -------.",
        options: ["fail", "failed", "failing", "fails"],
        ans: "failed", trans: "電源が故障したため、機械が停止した。", cat: "時制"
    },
    {
        q: "The maintenance work was ------- by the senior engineer yesterday.",
        options: ["complete", "completing", "completed", "completion"],
        ans: "completed", trans: "保守作業は昨日、主任エンジニアによって完了された。", cat: "受動態"
    },
    {
        q: "If the temperature ------- too high, the system will shut down.",
        options: ["rise", "rises", "rising", "rose"],
        ans: "rises", trans: "もし温度が上がりすぎれば、システムは停止します。", cat: "時制"
    },
    {
        q: "The CEO ------- the new factory opening next week.",
        options: ["visit", "will visit", "visited", "visiting"],
        ans: "will visit", trans: "CEOは来週、新工場の開所式を訪問する予定だ。", cat: "時制"
    },
    {
        q: "We have ------- the software to the latest version.",
        options: ["update", "updates", "updated", "updating"],
        ans: "updated", trans: "私たちはソフトウェアを最新バージョンに更新しました。", cat: "完了形"
    },
    {
        q: "The training session will ------- in the main conference room.",
        options: ["hold", "be held", "holding", "held"],
        ans: "be held", trans: "研修セッションはメイン会議室で開催される予定だ。", cat: "受動態"
    },
    {
        q: "Before ------- the machine, please read the manual.",
        options: ["start", "starts", "starting", "started"],
        ans: "starting", trans: "機械を始動する前に、マニュアルを読んでください。", cat: "動名詞"
    },
    {
        q: "The package should ------- by tomorrow afternoon.",
        options: ["arrive", "arrives", "arrived", "arriving"],
        ans: "arrive", trans: "その荷物は明日の午後までに到着するはずだ。", cat: "助動詞"
    },
    {
        q: "The problem was ------- quickly by the support team.",
        options: ["solve", "solving", "solved", "solution"],
        ans: "solved", trans: "その問題はサポートチームによって迅速に解決された。", cat: "受動態"
    },
    {
        q: "Ms. Tanaka suggests ------- the meeting until Friday.",
        options: ["postpone", "postponing", "postponed", "postponement"],
        ans: "postponing", trans: "田中さんは会議を金曜日まで延期することを提案している。", cat: "動名詞"
    },
    {
        q: "We look forward to ------- from you soon.",
        options: ["hear", "hearing", "heard", "hears"],
        ans: "hearing", trans: "あなたからの連絡を楽しみに待っています。", cat: "動名詞"
    },
    {
        q: "The document needs to be ------- by the manager.",
        options: ["sign", "signs", "signed", "signing"],
        ans: "signed", trans: "その書類はマネージャーによる署名が必要だ。", cat: "受動態"
    },
    {
        q: "While ------- the facility, please wear a helmet.",
        options: ["visit", "visits", "visiting", "visited"],
        ans: "visiting", trans: "施設を訪問中はヘルメットを着用してください。", cat: "分詞構文"
    },
    {
        q: "He is capable of ------- complex problems.",
        options: ["solve", "solving", "solved", "solves"],
        ans: "solving", trans: "彼は複雑な問題を解決する能力がある。", cat: "動名詞"
    },
    {
        q: "The flight to San Jose has been -------.",
        options: ["cancel", "canceling", "canceled", "cancellation"],
        ans: "canceled", trans: "サンノゼ行きの便はキャンセルされた。", cat: "受動態"
    },
    {
        q: "Please ------- us know if you have any questions.",
        options: ["let", "lets", "letting", "letter"],
        ans: "let", trans: "質問があれば私たちに知らせてください。", cat: "命令形"
    },
    {
        q: "By the time we arrived, the meeting ------- already started.",
        options: ["has", "had", "have", "having"],
        ans: "had", trans: "私たちが到着した時までに、会議はすでに始まっていた。", cat: "完了形"
    },
    {
        q: "It is important ------- double-check the data.",
        options: ["to", "for", "with", "of"],
        ans: "to", trans: "データを二重チェックすることは重要だ。", cat: "不定詞"
    },
    {
        q: "The technicians are currently ------- the new equipment.",
        options: ["install", "installed", "installing", "installation"],
        ans: "installing", trans: "技術者たちは現在、新しい装置を設置しているところだ。", cat: "進行形"
    },

    // ==========================================
    // 【3. 前置詞・接続詞 (文の繋ぎ方)】
    // ==========================================
    {
        q: "------- the rain, the installation was delayed.",
        options: ["Because", "Due to", "Although", "Despite"],
        ans: "Due to", trans: "雨のため、設置作業が遅れた。", cat: "前置詞"
    },
    {
        q: "The manager wants to hire more staff ------- the project is behind schedule.",
        options: ["because", "due to", "despite", "so"],
        ans: "because", trans: "プロジェクトが遅れているため、マネージャーは増員を望んでいる。", cat: "接続詞"
    },
    {
        q: "Please submit the report ------- Friday.",
        options: ["by", "until", "on", "at"],
        ans: "by", trans: "金曜日までに報告書を提出してください（期限）。", cat: "前置詞"
    },
    {
        q: "The office will be closed ------- August 10 to August 15.",
        options: ["from", "at", "in", "by"],
        ans: "from", trans: "オフィスは8月10日から8月15日まで閉鎖されます。", cat: "前置詞"
    },
    {
        q: "We continued working ------- the noise outside.",
        options: ["although", "despite", "even", "however"],
        ans: "despite", trans: "外の騒音にもかかわらず、私たちは作業を続けた。", cat: "前置詞"
    },
    {
        q: "Please verify the specs ------- placing an order.",
        options: ["before", "ago", "front", "ahead"],
        ans: "before", trans: "注文する前に仕様を確認してください。", cat: "接続詞"
    },
    {
        q: "Mr. Sato will be in New York ------- a week.",
        options: ["for", "during", "while", "since"],
        ans: "for", trans: "佐藤さんは1週間ニューヨークに滞在します。", cat: "前置詞"
    },
    {
        q: "------- asking for help, try to solve it yourself.",
        options: ["Instead of", "Because of", "Due to", "Thanks to"],
        ans: "Instead of", trans: "助けを求める代わりに、自分で解決しようとしてみてください。", cat: "前置詞"
    },
    {
        q: "Please turn off your phones ------- the presentation.",
        options: ["while", "during", "as", "when"],
        ans: "during", trans: "プレゼンテーションの間は電話を切ってください。", cat: "前置詞"
    },
    {
        q: "We must finish this ------- 5:00 PM.",
        options: ["until", "by", "on", "for"],
        ans: "by", trans: "私たちは午後5時までにこれを終わらせなければならない。", cat: "前置詞"
    },
    {
        q: "He has been working here ------- 2010.",
        options: ["for", "since", "from", "in"],
        ans: "since", trans: "彼は2010年からここで働いている。", cat: "前置詞"
    },
    {
        q: "You can choose ------- the blue one or the red one.",
        options: ["both", "either", "neither", "also"],
        ans: "either", trans: "青か赤のどちらかを選べます。", cat: "接続詞"
    },
    {
        q: "------- he was tired, he kept working.",
        options: ["Despite", "In spite of", "Although", "Because"],
        ans: "Although", trans: "彼は疲れていたが、働き続けた。", cat: "接続詞"
    },
    {
        q: "The seminar starts ------- 10 o'clock.",
        options: ["on", "at", "in", "to"],
        ans: "at", trans: "セミナーは10時に始まります。", cat: "前置詞"
    },
    {
        q: "Please contact me ------- email.",
        options: ["with", "by", "on", "in"],
        ans: "by", trans: "メールで私に連絡してください。", cat: "前置詞"
    },
    {
        q: "The factory is located ------- the river.",
        options: ["near", "nearly", "nears", "nearing"],
        ans: "near", trans: "工場は川の近くにある。", cat: "前置詞"
    },
    {
        q: "We need to discuss this ------- the meeting.",
        options: ["at", "on", "to", "of"],
        ans: "at", trans: "私たちは会議でこれを議論する必要がある。", cat: "前置詞"
    },
    {
        q: "This tool is used ------- measuring pressure.",
        options: ["to", "for", "with", "by"],
        ans: "for", trans: "この道具は圧力を測定するために使われる。", cat: "前置詞"
    },
    {
        q: "------- addition to the salary, we offer bonuses.",
        options: ["In", "On", "At", "By"],
        ans: "In", trans: "給料に加えて、ボーナスも提供します。", cat: "前置詞"
    },
    {
        q: "I am interested ------- applying for the position.",
        options: ["at", "on", "in", "of"],
        ans: "in", trans: "その職に応募することに興味があります。", cat: "前置詞"
    },

    // ==========================================
    // 【4. 代名詞・関係詞・比較 (文法構造)】
    // ==========================================
    {
        q: "The engineer ------- designed this system received an award.",
        options: ["who", "which", "whose", "whom"],
        ans: "who", trans: "このシステムを設計したエンジニアは賞を受け取った。", cat: "関係代名詞"
    },
    {
        q: "This is the laboratory ------- we conduct experiments.",
        options: ["which", "where", "when", "who"],
        ans: "where", trans: "ここが私たちが実験を行う研究所です。", cat: "関係副詞"
    },
    {
        q: "The new model is ------- than the old one.",
        options: ["fast", "faster", "fastest", "fastly"],
        ans: "faster", trans: "新しいモデルは古いものより速い。", cat: "比較級"
    },
    {
        q: "This is the ------- effective method we have found.",
        options: ["most", "more", "much", "many"],
        ans: "most", trans: "これは私たちが見つけた中で最も効果的な方法だ。", cat: "最上級"
    },
    {
        q: "Please keep ------- password secret.",
        options: ["you", "your", "yours", "yourself"],
        ans: "your", trans: "パスワードは秘密にしておいてください。", cat: "代名詞"
    },
    {
        q: "Mr. Smith introduced ------- to the new clients.",
        options: ["he", "him", "his", "himself"],
        ans: "himself", trans: "スミスさんは新しい顧客に自己紹介した。", cat: "代名詞"
    },
    {
        q: "Those ------- wish to attend must register today.",
        options: ["who", "which", "whose", "whom"],
        ans: "who", trans: "出席を希望する人は今日登録しなければならない。", cat: "関係代名詞"
    },
    {
        q: "The company ------- headquarters are in Tokyo is hiring.",
        options: ["who", "which", "whose", "that"],
        ans: "whose", trans: "東京に本社があるその会社は採用を行っている。", cat: "関係代名詞"
    },
    {
        q: "Is this laptop -------?",
        options: ["you", "your", "yours", "yourself"],
        ans: "yours", trans: "このノートパソコンはあなたのですか？", cat: "代名詞"
    },
    {
        q: "This problem is much ------- than we thought.",
        options: ["serious", "more serious", "most serious", "seriously"],
        ans: "more serious", trans: "この問題は私たちが考えていたよりもずっと深刻だ。", cat: "比較級"
    },
    {
        q: "Of all the options, this one is the -------.",
        options: ["good", "better", "best", "well"],
        ans: "best", trans: "全ての選択肢の中で、これが最良だ。", cat: "最上級"
    },
    {
        q: "Please give the report to ------- comes in first.",
        options: ["who", "whoever", "whom", "whomever"],
        ans: "whoever", trans: "最初に来た人に報告書を渡してください。", cat: "関係代名詞"
    },
    {
        q: "Neither Mr. A ------- Mr. B can attend the meeting.",
        options: ["or", "nor", "and", "but"],
        ans: "nor", trans: "A氏もB氏も会議に出席できない。", cat: "接続詞"
    },
    {
        q: "I like this design ------- than that one.",
        options: ["good", "well", "better", "best"],
        ans: "better", trans: "私はあれよりこのデザインの方が好きだ。", cat: "比較級"
    },
    {
        q: "We have to fix this by -------.",
        options: ["our", "us", "ours", "ourselves"],
        ans: "ourselves", trans: "私たちはこれを自分たちで直さなければならない。", cat: "代名詞"
    },
    {
        q: "The manual ------- I read yesterday was very helpful.",
        options: ["who", "whom", "which", "what"],
        ans: "which", trans: "私が昨日読んだマニュアルはとても役に立った。", cat: "関係代名詞"
    },
    {
        q: "There is ------- information about the incident.",
        options: ["little", "few", "many", "a few"],
        ans: "little", trans: "その事件に関する情報はほとんどない。", cat: "数量形容詞"
    },
    {
        q: "I have ------- questions about the project.",
        options: ["a little", "much", "a few", "little"],
        ans: "a few", trans: "プロジェクトについていくつか質問があります。", cat: "数量形容詞"
    },
    {
        q: "This camera takes ------- pictures than my phone.",
        options: ["clear", "clearer", "clearest", "clearly"],
        ans: "clearer", trans: "このカメラは私の電話より鮮明な写真が撮れる。", cat: "比較級"
    },
    {
        q: "It was ------- a difficult test that many failed.",
        options: ["so", "such", "too", "very"],
        ans: "such", trans: "それはとても難しいテストだったので、多くが不合格だった。", cat: "強調"
    },

    // ==========================================
    // 【5. 語彙・熟語・コロケーション (意味で選ぶ)】
    // ==========================================
    {
        q: "We must ------- with the safety regulations.",
        options: ["comply", "observe", "follow", "obey"],
        ans: "comply", trans: "我々は安全規則を順守しなければならない(comply with)。", cat: "熟語"
    },
    {
        q: "Who is in ------- of this department?",
        options: ["control", "charge", "change", "check"],
        ans: "charge", trans: "誰がこの部署の担当ですか？", cat: "熟語"
    },
    {
        q: "Please fill ------- the application form.",
        options: ["in", "on", "at", "to"],
        ans: "in", trans: "申込用紙に記入してください。", cat: "熟語"
    },
    {
        q: "The meeting will take ------- in Room A.",
        options: ["part", "place", "care", "off"],
        ans: "place", trans: "会議はルームAで行われます(take place)。", cat: "熟語"
    },
    {
        q: "We need to ------- out the problem immediately.",
        options: ["find", "look", "figure", "search"],
        ans: "figure", trans: "私たちは直ちに問題を解明(figure out)しなければならない。", cat: "熟語"
    },
    {
        q: "Please ------- sure that the door is locked.",
        options: ["do", "make", "take", "get"],
        ans: "make", trans: "ドアが施錠されているか確認(make sure)してください。", cat: "熟語"
    },
    {
        q: "He didn't show ------- for the meeting.",
        options: ["in", "off", "up", "on"],
        ans: "up", trans: "彼は会議に現れなかった(show up)。", cat: "熟語"
    },
    {
        q: "We ran ------- of paper for the printer.",
        options: ["out", "away", "off", "over"],
        ans: "out", trans: "プリンターの紙がなくなった(run out of)。", cat: "熟語"
    },
    {
        q: "I would like to apply ------- the position.",
        options: ["to", "for", "at", "in"],
        ans: "for", trans: "その職に応募したいです。", cat: "熟語"
    },
    {
        q: "He is looking ------- to the business trip.",
        options: ["for", "at", "forward", "ahead"],
        ans: "forward", trans: "彼は出張を楽しみにしている。", cat: "熟語"
    },
    {
        q: "The car broke ------- on the highway.",
        options: ["up", "down", "out", "off"],
        ans: "down", trans: "車が高速道路で故障した。", cat: "熟語"
    },
    {
        q: "Please turn ------- the lights when you leave.",
        options: ["on", "in", "off", "out"],
        ans: "off", trans: "帰る時は電気を消してください。", cat: "熟語"
    },
    {
        q: "We have to deal ------- this complaint.",
        options: ["with", "to", "at", "for"],
        ans: "with", trans: "私たちはこの苦情に対処しなければならない。", cat: "熟語"
    },
    {
        q: "Can you pick me ------- at the station?",
        options: ["up", "on", "in", "off"],
        ans: "up", trans: "駅で私を拾ってくれませんか？", cat: "熟語"
    },
    {
        q: "Don't give -------, keep trying.",
        options: ["in", "up", "out", "off"],
        ans: "up", trans: "あきらめないで、挑戦し続けて。", cat: "熟語"
    },
    {
        q: "The event was called ------- due to rain.",
        options: ["on", "in", "off", "out"],
        ans: "off", trans: "イベントは雨のため中止された。", cat: "熟語"
    },
    {
        q: "He pointed ------- the mistake in the report.",
        options: ["in", "on", "out", "up"],
        ans: "out", trans: "彼は報告書の間違いを指摘した。", cat: "熟語"
    },
    {
        q: "I rely ------- you for support.",
        options: ["in", "on", "at", "to"],
        ans: "on", trans: "私はあなたの支援を頼りにしている。", cat: "熟語"
    },
    {
        q: "This device consists ------- three parts.",
        options: ["of", "in", "at", "on"],
        ans: "of", trans: "この装置は3つの部品から成る。", cat: "熟語"
    },
    {
        q: "Please pay attention ------- the announcement.",
        options: ["at", "to", "on", "in"],
        ans: "to", trans: "アナウンスに注意を払ってください。", cat: "熟語"
    }
];