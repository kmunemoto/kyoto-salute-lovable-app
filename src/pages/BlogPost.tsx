import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";
import { getBlogPost } from "@/data/blog-posts";

const BlogPost = () => {
  const { slug } = useParams();
  const post = getBlogPost(slug);

  useEffect(() => {
    if (!post) {
      document.title = "記事が見つかりません | パーソナルジム Salute御所南";
      return;
    }

    document.title = `${post.title} | パーソナルジム Salute御所南`;
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", post.metaDescription);
  }, [post]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="section-padding pt-32 md:pt-36">
        <article className="mx-auto max-w-[720px]">
          {post ? (
            <>
              <div className="mb-6 flex flex-wrap items-center gap-3 text-xs font-body text-muted-foreground">
                <span className="gold-gradient rounded-sm px-3 py-1 text-primary-foreground">{post.category}</span>
                <time dateTime={post.date}>{post.date}</time>
                <span>読了目安 {post.readTime}</span>
              </div>
              <h1 className="font-heading text-3xl leading-tight text-foreground md:text-5xl">{post.title}</h1>
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
                    className="mt-6 inline-block rounded-sm gold-gradient px-8 py-3 font-body text-sm font-medium text-primary-foreground"
                  >
                    初回無料体験を予約する
                  </a>
                </div>
              )}
            </>
          ) : (
            <div className="text-center">
              <h1 className="font-heading text-3xl text-foreground md:text-5xl">記事が見つかりません</h1>
              <p className="mt-4 font-body text-muted-foreground">お探しの記事は削除されたか、URLが変更された可能性があります。</p>
            </div>
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