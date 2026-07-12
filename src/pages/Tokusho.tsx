import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sections = [
  { id: "seller", num: "1", title: "販売事業者名" },
  { id: "representative", num: "2", title: "代表者名" },
  { id: "tradename", num: "3", title: "屋号" },
  { id: "address", num: "4", title: "所在地" },
  { id: "tel", num: "5", title: "電話番号" },
  { id: "email", num: "6", title: "メールアドレス" },
  { id: "hours", num: "7", title: "営業時間" },
  { id: "price", num: "8", title: "販売価格" },
  { id: "extra-fees", num: "9", title: "販売価格以外の必要料金" },
  { id: "payment-method", num: "10", title: "支払方法" },
  { id: "payment-time", num: "11", title: "支払時期" },
  { id: "service-time", num: "12", title: "サービス提供時期" },
  { id: "cancel", num: "13", title: "キャンセル・返金ポリシー" },
  { id: "defect", num: "14", title: "役務の瑕疵に関する対応" },
];

const Row = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="grid sm:grid-cols-[180px_1fr] gap-2 sm:gap-6 py-4 border-b border-border/60">
    <dt className="text-sm font-medium text-muted-foreground font-body">{label}</dt>
    <dd className="text-foreground/85 font-body">{children}</dd>
  </div>
);

const Tokusho = () => {
  useEffect(() => {
    document.title = "特定商取引法に基づく表記 | パーソナルジム Salute御所南｜京都市中京区";
    const meta = document.querySelector('meta[name="description"]');
    const original = meta?.getAttribute("content") ?? "";
    meta?.setAttribute(
      "content",
      "パーソナルジムSalute御所南の特定商取引法に基づく表記。販売事業者、料金、支払方法、キャンセル・返金ポリシー等をご案内します。",
    );
    return () => {
      if (meta && original) meta.setAttribute("content", original);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>特定商取引法に基づく表記 | パーソナルジム Salute御所南</title>
        <link rel="canonical" href="https://kyoto-salute.com/tokusho" />
      </Helmet>
      <Header />

      <main className="flex-1 pt-24 md:pt-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-20">
          <header className="mb-12 md:mb-16 text-center">
            <p className="text-xs tracking-[0.3em] text-accent uppercase mb-4 font-body">
              Legal Notice
            </p>
            <h1 className="text-3xl md:text-5xl font-heading text-foreground mb-4">
              特定商取引法に基づく表記
            </h1>
            <div className="w-16 h-px bg-accent mx-auto" />
          </header>

          <div className="grid lg:grid-cols-[240px_1fr] gap-10 lg:gap-16">
            {/* Sidebar TOC */}
            <aside className="hidden lg:block">
              <nav className="sticky top-28 space-y-2">
                <p className="text-xs tracking-widest text-muted-foreground uppercase mb-4 font-body">
                  目次
                </p>
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block text-sm text-muted-foreground hover:text-accent transition-colors font-body py-1"
                  >
                    <span className="text-accent mr-2">{s.num}.</span>
                    {s.title}
                  </a>
                ))}
              </nav>
            </aside>

            {/* Content */}
            <article className="max-w-3xl space-y-10 font-body text-foreground/85 leading-relaxed">
              <section id="seller">
                <h2 className="text-xl md:text-2xl font-heading text-foreground mb-4 pb-3 border-b border-border">
                  <span className="text-accent mr-3">1.</span>販売事業者名
                </h2>
                <p>宗本 寛太</p>
              </section>

              <section id="representative">
                <h2 className="text-xl md:text-2xl font-heading text-foreground mb-4 pb-3 border-b border-border">
                  <span className="text-accent mr-3">2.</span>代表者名
                </h2>
                <p>宗本 寛太</p>
              </section>

              <section id="tradename">
                <h2 className="text-xl md:text-2xl font-heading text-foreground mb-4 pb-3 border-b border-border">
                  <span className="text-accent mr-3">3.</span>屋号
                </h2>
                <p>パーソナルジム Salute御所南</p>
              </section>

              <section id="address">
                <h2 className="text-xl md:text-2xl font-heading text-foreground mb-4 pb-3 border-b border-border">
                  <span className="text-accent mr-3">4.</span>所在地
                </h2>
                <p>〒604-0981</p>
                <p>京都市中京区毘沙門町533-1 プラザ御所南 2階</p>
              </section>

              <section id="tel">
                <h2 className="text-xl md:text-2xl font-heading text-foreground mb-4 pb-3 border-b border-border">
                  <span className="text-accent mr-3">5.</span>電話番号
                </h2>
                <p>
                  <a href="tel:09083860894" className="hover:text-accent transition-colors">
                    090-8386-0894
                  </a>
                </p>
              </section>

              <section id="email">
                <h2 className="text-xl md:text-2xl font-heading text-foreground mb-4 pb-3 border-b border-border">
                  <span className="text-accent mr-3">6.</span>メールアドレス
                </h2>
                <p>
                  <a
                    href="mailto:k.munemoto@kyoto-salute.com"
                    className="hover:text-accent transition-colors break-all"
                  >
                    k.munemoto@kyoto-salute.com
                  </a>
                </p>
              </section>

              <section id="hours">
                <h2 className="text-xl md:text-2xl font-heading text-foreground mb-4 pb-3 border-b border-border">
                  <span className="text-accent mr-3">7.</span>営業時間
                </h2>
                <p>10:00〜22:00（完全予約制）</p>
                <p className="text-sm text-muted-foreground mt-1">
                  不定休 / 営業時間外もご予約を承れる場合がございます
                </p>
              </section>

              <section id="price">
                <h2 className="text-xl md:text-2xl font-heading text-foreground mb-4 pb-3 border-b border-border">
                  <span className="text-accent mr-3">8.</span>販売価格
                </h2>
                <p className="mb-4">各料金プランのページに記載しております。</p>
                <dl className="bg-secondary/50 border border-border rounded-sm px-5 md:px-6 py-2">
                  <Row label="月4回プラン">¥20,000（税込）/ 月</Row>
                  <Row label="月6回プラン">¥28,500（税込）/ 月</Row>
                  <Row label="月8回プラン">¥36,000（税込）/ 月</Row>
                  <div className="grid sm:grid-cols-[180px_1fr] gap-2 sm:gap-6 py-4">
                    <dt className="text-sm font-medium text-muted-foreground font-body">
                      月15回プラン
                    </dt>
                    <dd className="text-foreground/85 font-body">¥60,000（税込）/ 月</dd>
                  </div>
                </dl>
                <p className="mt-4 text-sm">入会金・事務手数料：無料</p>
              </section>

              <section id="extra-fees">
                <h2 className="text-xl md:text-2xl font-heading text-foreground mb-4 pb-3 border-b border-border">
                  <span className="text-accent mr-3">9.</span>販売価格以外の必要料金
                </h2>
                <p>なし（すべての料金は販売価格に含まれます）</p>
              </section>

              <section id="payment-method">
                <h2 className="text-xl md:text-2xl font-heading text-foreground mb-4 pb-3 border-b border-border">
                  <span className="text-accent mr-3">10.</span>支払方法
                </h2>
                <ul className="space-y-2 list-disc pl-5 marker:text-accent">
                  <li>現金</li>
                  <li>クレジットカード</li>
                  <li>QRコード決済</li>
                </ul>
              </section>

              <section id="payment-time">
                <h2 className="text-xl md:text-2xl font-heading text-foreground mb-4 pb-3 border-b border-border">
                  <span className="text-accent mr-3">11.</span>支払時期
                </h2>
                <p>毎回1回目のトレーニング日に対面にてお支払いいただきます。</p>
              </section>

              <section id="service-time">
                <h2 className="text-xl md:text-2xl font-heading text-foreground mb-4 pb-3 border-b border-border">
                  <span className="text-accent mr-3">12.</span>サービス提供時期
                </h2>
                <p>入会手続き完了後、翌日以降のご予約日からご利用いただけます。</p>
              </section>

              <section id="cancel">
                <h2 className="text-xl md:text-2xl font-heading text-foreground mb-4 pb-3 border-b border-border">
                  <span className="text-accent mr-3">13.</span>キャンセル・返金ポリシー
                </h2>

                <h3 className="text-base md:text-lg font-heading text-foreground mt-6 mb-2">
                  料金について
                </h3>
                <p>
                  各プランの有効期間は、その月の1回目のトレーニング日から起算して1ヶ月間となります。有効期間途中での返金はいたしかねます。
                </p>

                <h3 className="text-base md:text-lg font-heading text-foreground mt-6 mb-2">
                  解約について
                </h3>
                <p>
                  次回分以降の継続を希望されない場合は、
                  <span className="text-foreground font-medium">現在の有効期間最終日までに</span>
                  お申し出ください。
                </p>

                <h3 className="text-base md:text-lg font-heading text-foreground mt-6 mb-2">
                  当日キャンセルについて
                </h3>
                <p>
                  予約の変更・キャンセルは前日までにお願いいたします。前日までのご連絡であれば、消費やキャンセル料は発生いたしません。
                  <span className="text-foreground font-medium">当日のキャンセルおよび無断キャンセルの場合は、1回分（1セッション）を消費した扱い</span>
                  となります。
                </p>
              </section>

              <section id="defect">
                <h2 className="text-xl md:text-2xl font-heading text-foreground mb-4 pb-3 border-b border-border">
                  <span className="text-accent mr-3">14.</span>役務の瑕疵に関する対応
                </h2>
                <p>
                  サービス内容に関するご相談・お問い合わせは、公式LINEまたは上記メールアドレスまでご連絡ください。
                </p>
              </section>

              <div className="pt-8 border-t border-border text-sm text-muted-foreground space-y-1">
                <p>制定日：2024年11月</p>
                <p>最終更新日：2026年4月20日</p>
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Tokusho;
