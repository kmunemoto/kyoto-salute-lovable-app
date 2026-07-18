import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";
import { getBlogPost, blogPosts } from "@/data/blog-posts";
import { trackCtaClick } from "@/lib/analytics";

const BASE = "https://kyoto-salute.com";
const PUBLISHER_LOGO = "https://kyoto-salute.com/og-image.jpg";

const toAbsolute = (path: string) => (path.startsWith("http") ? path : `${BASE}${path}`);

const BlogPost = () => {
  const { slug } = useParams();
  const post = getBlogPost(slug);

  // Restore scroll when navigating between posts (e.g. via related articles).
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Internal linking: same-category posts first, newest first, padded with
  // other recent posts up to 3. English (For Visitors) pages never pad with
  // Japanese posts — the section simply stays smaller or hidden there.
  const relatedPosts = post
    ? [
        ...blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category),
        ...(post.category === "For Visitors"
          ? []
          : blogPosts.filter(
              (p) => p.slug !== post.slug && p.category !== post.category && p.category !== "For Visitors",
            )),
      ].slice(0, 3)
    : [];

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Helmet>
          <title>記事が見つかりません | パーソナルジム Salute御所南</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <Header />
        <main className="section-padding pt-32 md:pt-36">
          <article className="mx-auto max-w-[720px] text-center">
            <h1 className="font-heading text-3xl text-foreground md:text-5xl">記事が見つかりません</h1>
            <p className="mt-4 font-body text-muted-foreground">
              お探しの記事は削除されたか、URLが変更された可能性があります。
            </p>
            <Link to="/blog" className="mt-10 inline-block font-body text-sm text-gold hover:underline">
              一覧に戻る
            </Link>
          </article>
        </main>
        <Footer />
        <MobileCTABar />
      </div>
    );
  }

  const url = `${BASE}/blog/${post.slug}`;
  const title = `${post.title} | パーソナルジム Salute御所南`;
  const ogImage = toAbsolute(post.thumbnail);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: ogImage,
    datePublished: post.date,
    dateModified: post.date,
    articleSection: post.category,
    inLanguage: post.category === "For Visitors" ? "en" : "ja",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: {
      "@type": "Person",
      name: "宗本寛太",
      alternateName: "Kanta Munemoto",
      jobTitle: "パーソナルジム Salute御所南 代表トレーナー",
      description: "栄養士資格を持つパーソナルトレーナー。月140組以上の指導経験。",
      url: `${BASE}/#trainer`,
      sameAs: ["https://www.instagram.com/salute_goshominami/"],
      worksFor: { "@type": "Organization", name: "パーソナルジム Salute御所南", url: BASE },
    },
    publisher: {
      "@type": "Organization",
      name: "パーソナルジム Salute御所南",
      logo: { "@type": "ImageObject", url: PUBLISHER_LOGO },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: `${BASE}/` },
      { "@type": "ListItem", position: 2, name: "ブログ", item: `${BASE}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <html lang={post.category === "For Visitors" ? "en" : "ja"} />
        <title>{title}</title>
        <meta name="description" content={post.metaDescription} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={ogImage} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:section" content={post.category} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={post.metaDescription} />
        <meta name="twitter:image" content={ogImage} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      <Header />
      <main className="section-padding pt-32 md:pt-36">
        <article className="mx-auto max-w-[720px]">
          <div className="mb-6 flex flex-wrap items-center gap-3 text-xs font-body text-muted-foreground">
            <span className="gold-gradient rounded-sm px-3 py-1 text-primary-foreground">{post.category}</span>
            <time dateTime={post.date}>{post.date}</time>
            <span>読了目安 {post.readTime}</span>
          </div>
          <h1 className="font-heading text-3xl leading-tight text-foreground md:text-5xl">{post.title}</h1>
          <p className="mt-4 font-body text-sm text-muted-foreground">
            {post.category === "For Visitors" ? (
              <>Written by <a href="/#trainer" className="text-gold hover:underline">Kanta Munemoto</a> — Head Trainer &amp; Certified Nutritionist, Salute Goshominami</>
            ) : (
              <>執筆：<a href="/#trainer" className="text-gold hover:underline">宗本 寛太</a>（Salute御所南 代表トレーナー・栄養士）</>
            )}
          </p>
          <img
            src={post.thumbnail}
            alt={`${post.title}のメイン画像`}
            className="mt-8 aspect-[16/10] w-full rounded-sm object-cover"
          />
          <div
            className="mt-10 font-body text-base leading-8 text-article-foreground [&_h2]:mt-10 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:leading-snug [&_h2]:text-foreground [&_h3]:mt-8 [&_h3]:font-body [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-foreground [&_li]:ml-5 [&_li]:list-disc [&_p]:mb-5 [&_ul]:mb-6 [&_ul]:space-y-2"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {post.category === "For Visitors" ? (
            <div className="mt-12 border border-gold/30 bg-secondary p-8 text-center">
              <p className="font-heading text-2xl text-foreground">Book a Drop-in Session</p>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
                Visiting Kyoto? Try a personal training session. ¥8,000 per session. All equipment provided.
              </p>
              <a
                href="https://app.kyoto-salute.com/visitor"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCtaClick({ type: "dropin", location: "blog_post", label: "Book Now", url: "https://app.kyoto-salute.com/visitor" })}
                className="mt-6 inline-block rounded-sm gold-gradient px-8 py-3 font-body text-sm font-medium text-primary-foreground"
              >
                Book Now
              </a>
            </div>
          ) : (
            <div className="mt-12 border border-gold/30 bg-secondary p-8 text-center">
              <p className="font-heading text-2xl text-foreground">無料体験はこちら</p>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">
                京都市中京区・御所南でパーソナルトレーニングを始めたい方は、まずは無料体験で雰囲気をご確認ください。
              </p>
              <a
                href="https://app.kyoto-salute.com/trial"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCtaClick({ type: "trial", location: "blog_post", label: "初回無料体験を予約する", url: "https://app.kyoto-salute.com/trial" })}
                className="mt-6 inline-block rounded-sm gold-gradient px-8 py-3 font-body text-sm font-medium text-primary-foreground"
              >
                初回無料体験を予約する
              </a>
            </div>
          )}

          {relatedPosts.length > 0 && (
            <section className="mt-14">
              <h2 className="font-heading text-2xl text-foreground">
                {post.category === "For Visitors" ? "Related Articles" : "関連記事"}
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                {relatedPosts.map((rp) => (
                  <Link key={rp.slug} to={`/blog/${rp.slug}`} className="group block">
                    <img
                      src={rp.thumbnail}
                      alt={rp.title}
                      loading="lazy"
                      className="aspect-[16/10] w-full rounded-sm object-cover"
                    />
                    <p className="mt-2 font-body text-xs text-muted-foreground">{rp.category}</p>
                    <p className="mt-1 font-body text-sm font-medium leading-snug text-foreground group-hover:text-gold">
                      {rp.title}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <Link to="/blog" className="mt-10 inline-block font-body text-sm text-gold hover:underline">
            一覧に戻る
          </Link>
        </article>
      </main>
      <Footer />
      <MobileCTABar />
    </div>
  );
};

export default BlogPost;
