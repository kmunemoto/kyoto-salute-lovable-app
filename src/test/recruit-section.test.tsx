import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import RecruitSection from "@/components/RecruitSection";
import { LanguageProvider } from "@/i18n/LanguageContext";
import type { Lang } from "@/i18n/translations";

// トレーナー募集は日本語ページのみに掲載する。
// tsconfig が strict:false / strictNullChecks:false のため、コンポーネント内の
// `if (!r) return null;` を外しても型検査は通ってしまい、日本語以外の4ページが
// 実行時に白画面になる。その退行をここで固定する。
describe("RecruitSection", () => {
  it("日本語ページでは募集セクションとLINEボタンを表示する", () => {
    render(
      <LanguageProvider lang="ja">
        <RecruitSection />
      </LanguageProvider>,
    );
    expect(screen.getByRole("heading", { name: "トレーナー募集" })).toBeInTheDocument();
    const cta = screen.getByRole("link", { name: /公式LINEで問い合わせる/ });
    expect(cta).toHaveAttribute("href", "https://lin.ee/UMVDzWF");
    // 予約と同一アカウントのため、識別を促す一文は必須。
    expect(screen.getByText(/トレーナー募集の件」とご記入ください/)).toBeInTheDocument();
  });

  it.each(["en", "zh", "zhTW", "ko"] as Lang[])(
    "%s ページでは何も描画しない",
    (lang) => {
      const { container } = render(
        <LanguageProvider lang={lang}>
          <RecruitSection />
        </LanguageProvider>,
      );
      expect(container.firstChild).toBeNull();
    },
  );
});
