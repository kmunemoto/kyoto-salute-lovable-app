import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sections = [
  { id: "definition", num: "1", title: "個人情報の定義" },
  { id: "collected", num: "2", title: "取得する個人情報" },
  { id: "purpose", num: "3", title: "個人情報の利用目的" },
  { id: "third-party", num: "4", title: "個人情報の第三者提供" },
  { id: "security", num: "5", title: "個人情報の安全管理" },
  { id: "disclosure", num: "6", title: "個人情報の開示・訂正・削除" },
  { id: "cookie", num: "7", title: "Cookie等の取り扱い" },
  { id: "minor", num: "8", title: "未成年のお客様について" },
  { id: "change", num: "9", title: "プライバシーポリシーの変更" },
  { id: "contact", num: "10", title: "お問い合わせ窓口" },
];

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "プライバシーポリシー | パーソナルジム Salute御所南｜京都市中京区";
    const meta = document.querySelector('meta[name="description"]');
    const original = meta?.getAttribute("content") ?? "";
    meta?.setAttribute(
      "content",
      "パーソナルジムSalute御所南のプライバシーポリシー。お客様の個人情報の取得・利用・管理に関する方針をご案内します。",
    );
    return () => {
      if (meta && original) meta.setAttribute("content", original);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>プライバシーポリシー | パーソナルジム Salute御所南｜京都市中京区</title>
        <link rel="canonical" href="https://kyoto-salute.com/privacy-policy" />
      </Helmet>
      <Header />

      <main className="flex-1 pt-24 md:pt-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-20">
          {/* Title */}
          <header className="mb-12 md:mb-16 text-center">
            <p className="text-xs tracking-[0.3em] text-accent uppercase mb-4 font-body">
              Privacy Policy
            </p>
            <h1 className="text-3xl md:text-5xl font-heading text-foreground mb-4">
              プライバシーポリシー
            </h1>
            <div className="w-16 h-px bg-accent mx-auto" />
          </header>

          {/* 2-column layout */}
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
              <p className="text-base md:text-[15px]">
                パーソナルジムSalute御所南（以下「当ジム」といいます）は、お客様の個人情報の重要性を認識し、個人情報の保護に関する法律（以下「個人情報保護法」）およびその他の関連法令を遵守し、お客様の個人情報を適切に取り扱います。
              </p>

              <section id="definition">
                <h2 className="text-xl md:text-2xl font-heading text-foreground mb-4 pb-3 border-b border-border">
                  <span className="text-accent mr-3">1.</span>個人情報の定義
                </h2>
                <p>
                  本プライバシーポリシーにおける「個人情報」とは、個人情報保護法第2条第1項により定義された個人情報、すなわち、生存する個人に関する情報であって、氏名、生年月日その他の記述等により特定の個人を識別することができるものをいいます。
                </p>
              </section>

              <section id="collected">
                <h2 className="text-xl md:text-2xl font-heading text-foreground mb-4 pb-3 border-b border-border">
                  <span className="text-accent mr-3">2.</span>取得する個人情報
                </h2>
                <p className="mb-4">当ジムは、以下の個人情報を取得することがあります。</p>
                <ul className="space-y-2 list-disc pl-5 marker:text-accent">
                  <li>氏名、生年月日、性別</li>
                  <li>住所、電話番号、メールアドレス</li>
                  <li>緊急連絡先</li>
                  <li>身長、体重、体脂肪率、体組成等の身体情報</li>
                  <li>健康状態、既往歴、服薬状況等の健康情報</li>
                  <li>食事内容、運動習慣、生活習慣に関する情報</li>
                  <li>トレーニング記録</li>
                  <li>お客様の写真（ご本人の同意がある場合のみ）</li>
                  <li>その他、サービス提供に必要な情報</li>
                </ul>
              </section>

              <section id="purpose">
                <h2 className="text-xl md:text-2xl font-heading text-foreground mb-4 pb-3 border-b border-border">
                  <span className="text-accent mr-3">3.</span>個人情報の利用目的
                </h2>
                <p className="mb-4">当ジムは、取得した個人情報を以下の目的で利用いたします。</p>
                <ul className="space-y-2 list-disc pl-5 marker:text-accent">
                  <li>パーソナルトレーニングサービスの提供</li>
                  <li>お客様に適したトレーニング・食事プログラムの作成および提案</li>
                  <li>体調管理および安全なトレーニング指導のため</li>
                  <li>お客様へのご連絡、各種お知らせの送付</li>
                  <li>サービスに関するお問い合わせへの対応</li>
                  <li>料金の請求および支払い処理</li>
                  <li>当ジムのサービス改善および品質向上のための分析</li>
                  <li>法令に基づく対応</li>
                </ul>
              </section>

              <section id="third-party">
                <h2 className="text-xl md:text-2xl font-heading text-foreground mb-4 pb-3 border-b border-border">
                  <span className="text-accent mr-3">4.</span>個人情報の第三者提供
                </h2>
                <p className="mb-4">
                  当ジムは、以下の場合を除き、お客様の個人情報を第三者に提供いたしません。
                </p>
                <ul className="space-y-2 list-disc pl-5 marker:text-accent">
                  <li>お客様の同意がある場合</li>
                  <li>法令に基づく場合</li>
                  <li>
                    人の生命、身体または財産の保護のために必要がある場合であって、お客様の同意を得ることが困難であるとき
                  </li>
                  <li>
                    国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合
                  </li>
                </ul>
              </section>

              <section id="security">
                <h2 className="text-xl md:text-2xl font-heading text-foreground mb-4 pb-3 border-b border-border">
                  <span className="text-accent mr-3">5.</span>個人情報の安全管理
                </h2>
                <p>
                  当ジムは、お客様の個人情報への不正アクセス、紛失、破壊、改ざんおよび漏えい等を防止するため、適切な安全管理措置を講じます。
                </p>
              </section>

              <section id="disclosure">
                <h2 className="text-xl md:text-2xl font-heading text-foreground mb-4 pb-3 border-b border-border">
                  <span className="text-accent mr-3">6.</span>個人情報の開示・訂正・削除
                </h2>
                <p className="mb-4">
                  お客様ご本人から、ご自身の個人情報の開示、訂正、追加、削除、利用停止のご請求があった場合は、ご本人であることを確認のうえ、合理的な範囲で速やかに対応いたします。
                </p>
                <p className="mb-2">ご請求は、以下の連絡先までご連絡ください。</p>
                <ul className="space-y-2 list-disc pl-5 marker:text-accent">
                  <li>公式LINEまたはInstagramのダイレクトメッセージ</li>
                </ul>
              </section>

              <section id="cookie">
                <h2 className="text-xl md:text-2xl font-heading text-foreground mb-4 pb-3 border-b border-border">
                  <span className="text-accent mr-3">7.</span>Cookie等の取り扱い
                </h2>
                <p>
                  当ジムのウェブサイトでは、サービスの利便性向上およびウェブサイトの利用状況の把握のためにCookieを使用しています。Cookieとは、ウェブサイトの利用時にお客様のブラウザに保存される小さなデータファイルです。
                </p>
                <p>
                  当ジムのウェブサイトでは、アクセス状況の分析のためにGoogle社が提供するアクセス解析ツール「Googleアナリティクス」を利用しています。Googleアナリティクスは Cookieを使用して、個人を特定しない形でウェブサイトの利用情報（アクセス日時、閲覧ページ、利用環境など）を収集します。これにより収集される情報には、お客様個人を特定する情報は含まれません。
                </p>
                <p>
                  収集された情報は、Google社のプライバシーポリシーに基づいて管理されます。
                </p>
                <ul className="space-y-2 list-disc pl-5 marker:text-accent">
                  <li>Googleアナリティクスの利用規約およびGoogle社のプライバシーポリシーについては、Google社のウェブサイトをご確認ください。</li>
                  <li>お客様は、ブラウザの設定でCookieを無効にすることで、当ジムによる情報収集を拒否することができます。</li>
                  <li>また、Googleが提供する「Googleアナリティクス オプトアウト アドオン」を利用することで、Googleアナリティクスによるデータ収集を無効化できます。</li>
                </ul>
                <p>
                  Cookieの無効化を行った場合でも、当ウェブサイトの閲覧は可能ですが、一部の機能がご利用いただけない場合があります。
                </p>
              </section>

              <section id="minor">
                <h2 className="text-xl md:text-2xl font-heading text-foreground mb-4 pb-3 border-b border-border">
                  <span className="text-accent mr-3">8.</span>未成年のお客様について
                </h2>
                <p>
                  未成年のお客様がサービスをご利用される場合は、保護者の同意を得たうえでご利用ください。
                </p>
              </section>

              <section id="change">
                <h2 className="text-xl md:text-2xl font-heading text-foreground mb-4 pb-3 border-b border-border">
                  <span className="text-accent mr-3">9.</span>プライバシーポリシーの変更
                </h2>
                <p>
                  当ジムは、法令の変更やサービス内容の変更等に伴い、本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当ジムのウェブサイトに掲載した時点で効力を生じるものとします。
                </p>
              </section>

              <section id="contact">
                <h2 className="text-xl md:text-2xl font-heading text-foreground mb-4 pb-3 border-b border-border">
                  <span className="text-accent mr-3">10.</span>お問い合わせ窓口
                </h2>
                <p className="mb-4">
                  本プライバシーポリシーに関するお問い合わせは、以下までご連絡ください。
                </p>
                <div className="bg-secondary/50 border border-border rounded-sm p-5 md:p-6 space-y-2">
                  <p className="font-medium text-foreground">パーソナルジムSalute御所南</p>
                  <p className="text-sm">〒604-0981 京都市中京区毘沙門町533-1 プラザ御所南 2階</p>
                  <p className="text-sm">
                    お問い合わせ：公式LINEまたはInstagramのダイレクトメッセージ
                  </p>
                </div>
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

export default PrivacyPolicy;