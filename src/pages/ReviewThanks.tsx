import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { reviewUrl } from "@/config/google";

// Review-request landing page. Not indexed — this is the on-site anchor of the
// review-generation loop: staff share this link (or the QR of it) via LINE after
// a session so satisfied customers can leave a Google review in one tap.
const ReviewThanks = () => {
  const url = reviewUrl();
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>クチコミのお願い | パーソナルジム Salute御所南</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Header />
      <main className="section-padding pt-32 md:pt-36">
        <div className="max-w-xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: 5 }).map((_, j) => (
              <Star key={j} className="w-8 h-8 fill-current" style={{ color: "#0ABAB5" }} />
            ))}
          </div>
          <h1 className="font-heading text-3xl md:text-4xl text-foreground leading-tight">
            トレーニングお疲れさまでした
          </h1>
          <p className="mt-6 font-body text-muted-foreground leading-relaxed">
            Salute御所南をご利用いただきありがとうございます。よろしければ、Googleに感想を一言お寄せいただけると、これから通うか迷っている方の大きな参考になります。30秒ほどで完了します。
          </p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => window.gtag?.("event", "review_click", { link_url: url })}
            className="mt-8 inline-block gold-gradient px-10 py-4 text-white font-medium rounded-sm"
          >
            Googleでクチコミを書く
          </a>
          <p className="mt-6 font-body text-xs text-muted-foreground">
            星の数だけでも大歓迎です。いただいた声は今後のサービス改善に役立てます。
          </p>
          <Link to="/" className="mt-10 inline-block font-body text-sm text-gold hover:underline">
            トップへ戻る
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReviewThanks;
