import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
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

  it("契約形態（業務委託）と賃金形態（歩合制）を掲載している", () => {
    // 応募者が最初にふるいにかける情報であり、募集時の明示項目でもある。
    render(
      <LanguageProvider lang="ja">
        <RecruitSection />
      </LanguageProvider>,
    );
    expect(screen.getByText(/業務委託契約/)).toBeInTheDocument();
    expect(screen.getByText(/1セッションごとの歩合制/)).toBeInTheDocument();
  });

  it("定型文をクリップボードにコピーできる", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, { clipboard: { writeText } });
    render(
      <LanguageProvider lang="ja">
        <RecruitSection />
      </LanguageProvider>,
    );
    fireEvent.click(screen.getByRole("button", { name: /この文面をコピー/ }));
    // 受信箱の切り分けは、この冒頭文字列がそのまま送られることに依存している。
    expect(writeText).toHaveBeenCalledWith(
      "トレーナー募集の件で連絡しました。話を聞かせてください。",
    );
    expect(await screen.findByRole("button", { name: /コピーしました/ })).toBeInTheDocument();
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
