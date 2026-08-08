import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sections = [
  { id: "art1", num: "第1条", title: "適用" },
  { id: "art2", num: "第2条", title: "入会" },
  { id: "art3", num: "第3条", title: "料金プランおよび支払い" },
  { id: "art4", num: "第4条", title: "プランのセッション数と有効期間" },
  { id: "art5", num: "第5条", title: "予約・変更・キャンセル" },
  { id: "art6", num: "第6条", title: "遅刻時の対応" },
  { id: "art7", num: "第7条", title: "解約・退会" },
  { id: "art8", num: "第8条", title: "休会" },
  { id: "art9", num: "第9条", title: "健康状態および免責事項" },
  { id: "art10", num: "第10条", title: "貸与物の取扱い" },
  { id: "art11", num: "第11条", title: "禁止事項" },
  { id: "art12", num: "第12条", title: "個人情報の取扱い" },
  { id: "art13", num: "第13条", title: "会員資格の取消" },
  { id: "art14", num: "第14条", title: "営業時間の変更・臨時休業" },
  { id: "art15", num: "第15条", title: "本規約の変更" },
  { id: "art16", num: "第16条", title: "準拠法および管轄裁判所" },
];

const ArticleHeading = ({ id, num, title }: { id: string; num: string; title: string }) => (
  <h2
    id={id}
    className="text-xl md:text-2xl font-heading text-foreground mb-4 pb-3 border-b border-border scroll-mt-28"
  >
    <span className="text-accent mr-3">{num}</span>
    <span className="text-foreground/90">（{title}）</span>
  </h2>
);

const Terms = () => {
  useEffect(() => {
    document.title = "利用規約 | パーソナルジム Salute御所南｜京都市中京区";
    const meta = document.querySelector('meta[name="description"]');
    const original = meta?.getAttribute("content") ?? "";
    meta?.setAttribute(
      "content",
      "パーソナルジムSalute御所南の利用規約。ご入会・料金・予約・キャンセル・解約等、サービス利用条件をご案内します。",
    );
    return () => {
      if (meta && original) meta.setAttribute("content", original);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>利用規約 | パーソナルジム Salute御所南</title>
        <link rel="canonical" href="https://kyoto-salute.com/terms" />
      </Helmet>
      <Header />

      <main className="flex-1 pt-24 md:pt-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-20">
          {/* Title */}
          <header className="mb-12 md:mb-16 text-center">
            <p className="text-xs tracking-[0.3em] text-accent uppercase mb-4 font-body">
              Terms of Service
            </p>
            <h1 className="text-3xl md:text-5xl font-heading text-foreground mb-4">
              利用規約
            </h1>
            <div className="w-16 h-px bg-accent mx-auto" />
          </header>

          {/* 2-column layout */}
          <div className="grid lg:grid-cols-[240px_1fr] gap-10 lg:gap-16">
            {/* Sidebar TOC */}
            <aside className="hidden lg:block">
              <nav className="sticky top-28 space-y-2 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2">
                <p className="text-xs tracking-widest text-muted-foreground uppercase mb-4 font-body">
                  目次
                </p>
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block text-sm text-muted-foreground hover:text-accent transition-colors font-body py-1"
                  >
                    <span className="text-accent mr-2">{s.num}</span>
                    {s.title}
                  </a>
                ))}
              </nav>
            </aside>

            {/* Content */}
            <article className="max-w-3xl space-y-10 font-body text-foreground/85 leading-relaxed">
              <p className="text-base md:text-[15px]">
                この利用規約（以下「本規約」）は、パーソナルジムSalute御所南（以下「当ジム」）が提供するパーソナルトレーニングサービス（以下「本サービス」）の利用条件を定めるものです。会員様（以下「会員」）には、本規約に同意のうえ、本サービスをご利用いただきます。
              </p>

              <section>
                <ArticleHeading id="art1" num="第1条" title="適用" />
                <p>
                  本規約は、会員と当ジムとの間の本サービスの利用に関わる一切の関係に適用されるものとします。
                </p>
              </section>

              <section>
                <ArticleHeading id="art2" num="第2条" title="入会" />
                <ol className="space-y-3 list-decimal pl-5 marker:text-accent">
                  <li>本サービスの利用を希望する方は、当ジム所定の手続きに従い、入会の申し込みを行うものとします。</li>
                  <li>
                    当ジムは、以下のいずれかに該当する場合、入会をお断りすることがあります。
                    <ul className="space-y-2 list-disc pl-5 marker:text-accent mt-2">
                      <li>反社会的勢力に属する、またはそれらと関係を有する場合</li>
                      <li>医師からトレーニングを禁じられている場合</li>
                      <li>過去に当ジムの規約違反等により退会処分を受けた場合</li>
                      <li>その他、当ジムが不適当と判断した場合</li>
                    </ul>
                  </li>
                </ol>
              </section>

              <section>
                <ArticleHeading id="art3" num="第3条" title="料金プランおよび支払い" />
                <ol className="space-y-3 list-decimal pl-5 marker:text-accent">
                  <li>料金プランは当ジムが別途定めるとおりとし、詳細はウェブサイトに掲載します。</li>
                  <li>入会金・事務手数料は無料です。</li>
                  <li>
                    体験トレーニングの料金は<strong className="text-foreground">¥3,000（税込）</strong>です。ただし、<strong className="text-foreground">体験当日にご入会いただいた場合、体験料は¥0となり申し受けません</strong>。体験当日にご入会されない場合は、体験料¥3,000を当日お支払いいただきます。
                  </li>
                  <li>月額料金は、毎回1回目のトレーニング日に対面にてお支払いいただきます。</li>
                  <li>支払方法は、現金、クレジットカード、QRコード決済に対応しております。</li>
                </ol>
              </section>

              <section>
                <ArticleHeading id="art4" num="第4条" title="プランのセッション数と有効期間" />
                <ol className="space-y-3 list-decimal pl-5 marker:text-accent">
                  <li>
                    各プランのセッション数は、<strong className="text-foreground">その月の1回目のトレーニング日から起算して1ヶ月間</strong>が有効期間となります（例：10月15日が1回目のトレーニング日の場合、翌11月14日までが有効期間）。
                  </li>
                  <li>
                    <strong className="text-foreground">有効期間内に消化できなかった未消化分のセッションは、翌期間に繰り越されず消滅します</strong>のでご了承ください。
                  </li>
                  <li>有効期間終了後も継続して本サービスをご利用される場合は、改めて次の1ヶ月分の料金をお支払いいただきます。</li>
                  <li>プランの変更をご希望の場合は、次回の料金お支払い時にお申し出ください。</li>
                </ol>
              </section>

              <section>
                <ArticleHeading id="art5" num="第5条" title="予約・変更・キャンセル" />
                <ol className="space-y-3 list-decimal pl-5 marker:text-accent">
                  <li>本サービスは完全予約制です。事前にご予約のうえお越しください。</li>
                  <li>
                    予約の変更・キャンセルは、専用アプリからいつでもお手続きいただけます。
                  </li>
                  <li>
                    <strong className="text-foreground">当日のキャンセルであっても、キャンセル料やセッションの消費は発生しません</strong>。
                  </li>
                </ol>
              </section>

              <section>
                <ArticleHeading id="art6" num="第6条" title="遅刻時の対応" />
                <ol className="space-y-3 list-decimal pl-5 marker:text-accent">
                  <li>
                    会員が予約時間に遅刻された場合、<strong className="text-foreground">後続の予約がない限り、お越しいただいた時間から60分のトレーニングを実施</strong>いたします。
                  </li>
                  <li>後続の予約がある場合は、予約終了時間までの短縮されたトレーニングとなります。</li>
                  <li>いかなる場合も、遅刻による料金の割引や返金はいたしません。</li>
                </ol>
              </section>

              <section>
                <ArticleHeading id="art7" num="第7条" title="解約・退会" />
                <ol className="space-y-3 list-decimal pl-5 marker:text-accent">
                  <li>
                    <strong className="text-foreground">次回分以降の継続を希望されない場合は、現在の有効期間最終日までに</strong>お申し出ください。お申し出がない場合、継続の意思があるものとして扱います。
                  </li>
                  <li>有効期間途中での解約の場合でも、当期間分の料金の返金はいたしかねます。</li>
                  <li>解約のお申し出は、公式LINEまたはメールにて承ります。</li>
                </ol>
              </section>

              <section>
                <ArticleHeading id="art8" num="第8条" title="休会" />
                <p>
                  体調不良やご事情により一時的にご利用を休止される場合は、事前に当ジムまでご相談ください。休会の可否および期間については、個別に対応いたします。
                </p>
              </section>

              <section>
                <ArticleHeading id="art9" num="第9条" title="健康状態および免責事項" />
                <ol className="space-y-3 list-decimal pl-5 marker:text-accent">
                  <li>会員は、ご自身の健康状態を把握したうえで本サービスを利用するものとし、持病・既往歴・服薬中の薬等がある場合は、事前に当ジムまでお申し出ください。</li>
                  <li>必要に応じて、医師の診断書や許可のうえでのご利用をお願いする場合があります。</li>
                  <li>トレーニング中に体調の変化を感じた場合は、速やかにトレーナーにお申し出ください。</li>
                  <li>当ジムは、会員の健康管理について注意を払いますが、トレーニング中または本サービス利用中に発生した事故、怪我、体調不良等について、当ジムの故意または重過失による場合を除き、一切の責任を負いません。</li>
                </ol>
              </section>

              <section>
                <ArticleHeading id="art10" num="第10条" title="貸与物の取扱い" />
                <ol className="space-y-3 list-decimal pl-5 marker:text-accent">
                  <li>当ジムが無料で貸与するウェア、シューズ、タオル、その他のアメニティは、ご利用後、所定の場所にご返却ください。</li>
                  <li>貸与物を故意または重過失により破損・紛失した場合、会員は相当額をお支払いいただくことがあります。</li>
                </ol>
              </section>

              <section>
                <ArticleHeading id="art11" num="第11条" title="禁止事項" />
                <p className="mb-4">
                  会員は、本サービスの利用にあたって、以下の行為を行ってはならないものとします。
                </p>
                <ul className="space-y-2 list-disc pl-5 marker:text-accent">
                  <li>他の会員、トレーナー、第三者に迷惑をかける行為</li>
                  <li>飲酒状態での来店</li>
                  <li>法令または公序良俗に違反する行為</li>
                  <li>当ジム内における営業、勧誘、宗教活動等</li>
                  <li>当ジム内での撮影・録音（ご自身のトレーニング記録目的を除く）およびSNS等への無断投稿</li>
                  <li>他の会員のプライバシーを侵害する行為</li>
                  <li>その他、当ジムが不適切と判断する行為</li>
                </ul>
              </section>

              <section>
                <ArticleHeading id="art12" num="第12条" title="個人情報の取扱い" />
                <p>
                  会員の個人情報の取扱いについては、別途定めるプライバシーポリシーに従います。
                </p>
              </section>

              <section>
                <ArticleHeading id="art13" num="第13条" title="会員資格の取消" />
                <p className="mb-4">
                  会員が以下のいずれかに該当する場合、当ジムは事前の通知なく会員資格を取り消すことがあります。この場合、既に支払われた料金の返金はいたしません。
                </p>
                <ul className="space-y-2 list-disc pl-5 marker:text-accent">
                  <li>本規約に違反した場合</li>
                  <li>料金の支払いを怠った場合</li>
                  <li>他の会員やトレーナーに対し、著しく迷惑な行為を行った場合</li>
                  <li>その他、当ジムが会員として不適切と判断した場合</li>
                </ul>
              </section>

              <section>
                <ArticleHeading id="art14" num="第14条" title="営業時間の変更・臨時休業" />
                <p>
                  当ジムは、祝日、年末年始、設備点検、その他やむを得ない事由により、営業時間の変更または臨時休業を行うことがあります。その際は、事前に会員へご案内いたします。
                </p>
              </section>

              <section>
                <ArticleHeading id="art15" num="第15条" title="本規約の変更" />
                <p>
                  当ジムは、必要に応じて本規約を変更することがあります。変更後の規約は、ウェブサイトに掲載した時点で効力を生じるものとします。
                </p>
              </section>

              <section>
                <ArticleHeading id="art16" num="第16条" title="準拠法および管轄裁判所" />
                <ol className="space-y-3 list-decimal pl-5 marker:text-accent">
                  <li>本規約の解釈および適用は、日本法に準拠するものとします。</li>
                  <li>本サービスに関して紛争が生じた場合、京都地方裁判所を第一審の専属的合意管轄裁判所とします。</li>
                </ol>
              </section>

              <div className="pt-8 border-t border-border text-sm text-muted-foreground space-y-1">
                <p>制定日：2024年11月</p>
                <p>最終更新日：2026年4月20日</p>
              </div>

              <div className="bg-secondary/50 border border-border rounded-sm p-5 md:p-6 space-y-1">
                <p className="font-medium text-foreground">パーソナルジム Salute御所南</p>
                <p className="text-sm">〒604-0981 京都市中京区毘沙門町533-1 プラザ御所南 2階</p>
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
