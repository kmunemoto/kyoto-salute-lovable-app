import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "ページが見つかりません | パーソナルジム Salute御所南";

    let meta = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    const created = !meta;
    const prevContent = meta?.getAttribute("content") ?? null;
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "robots");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", "noindex,nofollow");

    return () => {
      document.title = prevTitle;
      if (created) {
        meta?.parentNode?.removeChild(meta);
      } else if (prevContent !== null) {
        meta?.setAttribute("content", prevContent);
      }
    };
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center max-w-md">
        <h1 className="mb-4 font-heading text-3xl md:text-4xl font-semibold text-foreground">
          ページが見つかりません
        </h1>
        <p className="mb-8 text-base text-muted-foreground">
          お探しのページは移動または削除された可能性があります。
        </p>
        <a
          href="/"
          className="inline-block text-gold hover:text-gold-light underline underline-offset-4 transition-colors"
        >
          トップページへ戻る
        </a>
      </div>
    </div>
  );
};

export default NotFound;
