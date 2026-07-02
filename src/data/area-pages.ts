// Area / station landing pages for local SEO ("<駅名> パーソナルジム" searches).
// Each entry drives one page at /area/:slug via AreaPage.tsx. Copy is unique per
// area (access, landmarks, intro) so these read as genuine local pages, not thin
// doorway pages.

export type AreaPage = {
  slug: string;
  /** Full station name, e.g. "丸太町駅". */
  station: string;
  /** Route line label, e.g. "地下鉄烏丸線". */
  line: string;
  /** Walking time to the gym, e.g. "徒歩8分". */
  walk: string;
  /** Page <title>. */
  metaTitle: string;
  /** Meta description (~110-130 chars). */
  metaDescription: string;
  /** Hero H1. */
  h1: string;
  /** Lead paragraph (unique per area). */
  intro: string;
  /** Detailed access description from this station (unique). */
  access: string;
  /** Short area/landmark context (unique). */
  nearby: string;
  /** Related blog slug for "詳しくはこちら", if any. */
  relatedBlog?: string;
};

export const AREA_PAGES: AreaPage[] = [
  {
    slug: "marutamachi",
    station: "丸太町駅",
    line: "地下鉄烏丸線",
    walk: "徒歩8分",
    metaTitle: "丸太町駅のパーソナルジム｜Salute御所南｜完全個室・入会金¥0・無料体験",
    metaDescription:
      "丸太町駅から徒歩8分のパーソナルジムSalute御所南。完全個室・栄養士トレーナーがマンツーマン指導。入会金¥0・1回¥4,000〜・手ぶらOK・当日キャンセル無料。無料体験実施中。",
    h1: "丸太町駅から通えるパーソナルジムをお探しの方へ",
    intro:
      "地下鉄烏丸線・丸太町駅の周辺でパーソナルジムをお探しなら、駅から徒歩8分のSalute御所南へ。烏丸丸太町エリアの丸太町通り沿いにある完全個室のパーソナルジムです。仕事帰りや休日に、無理なく通える立地です。",
    access:
      "丸太町駅の4番出口を出て、丸太町通りを東へまっすぐ進むだけ。大通り沿いなので夜でも明るく、道に迷うことはありません。プラザ御所南という建物の2階にあります。京都駅から烏丸線で約6分、四条駅から約2分と、通勤・通学の動線上に位置しています。",
    nearby:
      "丸太町駅のすぐそばには京都御苑があり、トレーニング前後のウォーキングにも最適なエリアです。周辺はマンションやオフィスも多く、生活圏の中で続けやすい環境です。",
    relatedBlog: "personal-gym-marutamachi-station-guide",
  },
  {
    slug: "karasuma-oike",
    station: "烏丸御池駅",
    line: "地下鉄烏丸線・東西線",
    walk: "地下鉄で1駅",
    metaTitle: "烏丸御池のパーソナルジム｜Salute御所南｜完全個室・栄養士トレーナー",
    metaDescription:
      "烏丸御池駅から地下鉄で1駅・丸太町駅徒歩8分のパーソナルジムSalute御所南。完全個室でマンツーマン指導。入会金¥0・1回¥4,000〜・手ぶらOK。仕事帰りにも通える無料体験実施中。",
    h1: "烏丸御池エリアで働く・暮らす方のパーソナルジム",
    intro:
      "烏丸御池駅周辺のオフィスにお勤めの方や、中京区にお住まいの方に通いやすいパーソナルジムがSalute御所南です。烏丸御池から地下鉄で1駅の丸太町駅から徒歩8分。仕事帰りにそのまま立ち寄れる立地です。",
    access:
      "烏丸御池駅から地下鉄烏丸線で1駅、丸太町駅で下車して4番出口から東へ徒歩8分。自転車なら烏丸御池エリアから約10分ほどです。完全予約制なので、退勤時間に合わせて予約を入れておけば、迷わずまっすぐ通えます。",
    nearby:
      "烏丸御池は京都のビジネスの中心地。日中のお仕事で凝り固まった体を、仕事帰りのトレーニングでリセットする習慣に最適なエリアです。",
    relatedBlog: "after-work-personal-gym-marutamachi-kyoto",
  },
  {
    slug: "kyoto-shiyakusho-mae",
    station: "京都市役所前駅",
    line: "地下鉄東西線",
    walk: "徒歩10分",
    metaTitle: "京都市役所前のパーソナルジム｜Salute御所南｜完全個室・無料体験実施中",
    metaDescription:
      "京都市役所前駅から徒歩10分のパーソナルジムSalute御所南。完全個室・栄養士トレーナーがマンツーマン指導。入会金¥0・1回¥4,000〜・手ぶらOK・当日キャンセル無料。無料体験実施中。",
    h1: "京都市役所前・寺町エリアから通えるパーソナルジム",
    intro:
      "地下鉄東西線・京都市役所前駅の周辺でパーソナルジムをお探しの方へ。Salute御所南は御所南エリアの丸太町通り沿いにある完全個室のパーソナルジムで、京都市役所前駅から徒歩10分の距離です。",
    access:
      "京都市役所前駅から北西へ、御所南方面に徒歩10分ほど。寺町通りや河原町御池エリアからも徒歩・自転車で通いやすい立地です。丸太町通り沿いのプラザ御所南2階にあります。",
    nearby:
      "京都市役所前から御所南にかけては、落ち着いた住宅とおしゃれな飲食店が混在するエリア。トレーニング後に周辺で食事を楽しむ方も多くいらっしゃいます。",
    relatedBlog: "personal-gym-goshominami-area-guide",
  },
  {
    slug: "jingu-marutamachi",
    station: "神宮丸太町駅",
    line: "京阪本線",
    walk: "徒歩8分",
    metaTitle: "神宮丸太町のパーソナルジム｜Salute御所南｜京阪沿線・完全個室",
    metaDescription:
      "神宮丸太町駅から徒歩8分のパーソナルジムSalute御所南。京阪沿線から通える完全個室のジム。栄養士トレーナーがマンツーマン指導。入会金¥0・1回¥4,000〜・手ぶらOK。無料体験実施中。",
    h1: "京阪・神宮丸太町駅から通えるパーソナルジム",
    intro:
      "京阪本線・神宮丸太町駅の周辺、また京阪沿線から通えるパーソナルジムをお探しの方へ。Salute御所南は神宮丸太町駅から徒歩8分、丸太町通り沿いの完全個室パーソナルジムです。",
    access:
      "神宮丸太町駅から丸太町通りを西へ徒歩8分。鴨川を渡ってすぐのエリアで、京阪沿線（出町柳・三条方面）からのアクセスも良好です。プラザ御所南の2階にあります。",
    nearby:
      "神宮丸太町駅のそばには鴨川や京都御苑があり、自然を感じながら通えるエリアです。京阪沿線にお住まい・お勤めの方の生活圏に組み込みやすい立地です。",
    relatedBlog: "personal-gym-marutamachi-station-guide",
  },
];

export const getAreaPage = (slug: string | undefined) =>
  AREA_PAGES.find((a) => a.slug === slug);
