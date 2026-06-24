import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";
import { blogPosts } from "@/data/blog-posts";

const BASE = "https://kyoto-salute.com";
const TITLE = "ブログ | 京都で安いパーソナルジムなSalute御所南";
const DESCRIPTION =
  "京都市中京区・御所南のパーソナルジムSalute御所南のブログ。料金、初心者向け情報、ダイエット、食事サポートについて発信しています。";

const Blog = () => {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: blogPosts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${BASE}/blog/${post.slug}`,
      name: post.title,
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={`${BASE}/blog`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={`${BASE}/blog`} />
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
      </Helmet>
      <Header />
      <main className="section-padding pt-32 md:pt-36">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3 font-body">BLOG</p>
            <h1 className="font-heading text-3xl md:text-5xl text-foreground">ブログ</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group block overflow-hidden rounded-sm border border-border bg-background/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative aspect-[120/63] overflow-hidden bg-secondary">
                  <img
                    src={post.thumbnail}
                    alt={`${post.title}のサムネイル`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-x-4 bottom-4 overflow-hidden bg-footer/85 px-5 py-3">
                    <p className="truncate font-body text-sm font-bold leading-relaxed text-footer-foreground">
                      {post.title}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-3 text-xs font-body text-muted-foreground">
                    <span className="gold-gradient rounded-sm px-3 py-1 text-primary-foreground">{post.category}</span>
                    <time dateTime={post.date}>{post.date}</time>
                    <span>読了目安 {post.readTime}</span>
                  </div>
                  <h2 className="font-heading text-2xl leading-snug text-foreground transition-colors group-hover:text-gold">
                    {post.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <MobileCTABar />
    </div>
  );
};

export default Blog;