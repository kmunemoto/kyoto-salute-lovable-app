# 週次SEOレポート（Search Console連携）のセットアップ手順

毎週月曜9時に、Google Search Console のデータから自動でSEOレポートを作成し、
このリポジトリの **Issues** に投稿する仕組みです。

- クリック数・表示回数・CTR・平均順位（直近28日 vs その前28日）
- 「パーソナルジム 京都」「パーソナルジム 丸太町」など主要キーワードの順位変動
- **順位が3以上下落したキーワードは ⚠️ アラート表示**
- 上位クエリ / 上位ページ一覧

一度設定すれば以後は全自動です（所要時間：約10分）。

---

## 手順1：Googleクラウドでサービスアカウント（プログラム用のアカウント）を作る

1. https://console.cloud.google.com/ を開き、**k.munemoto@kyoto-salute.com**（Search Consoleを管理しているGoogleアカウント）でログイン
2. 画面上部のプロジェクト選択 → **「新しいプロジェクト」** → 名前は `salute-seo` などでOK → 作成
3. 検索バーで **「Search Console API」** を検索 → **「有効にする」** をクリック
4. 左メニュー **「IAMと管理」→「サービスアカウント」** → **「サービスアカウントを作成」**
   - 名前：`seo-report` などでOK
   - ロール（権限）は**設定不要**なのでスキップして「完了」
5. 作成したサービスアカウントをクリック → **「キー」タブ** → 「鍵を追加」→「新しい鍵を作成」→ **JSON** → 作成
   - JSONファイルがダウンロードされます（**この中身を後で使います**）
6. サービスアカウントの**メールアドレス**（`seo-report@salute-seo.iam.gserviceaccount.com` のような形式）をコピーしておく

> ❗ **「サービス アカウント キーの作成が無効になっています」と出た場合**
> 新しく作ったGoogleプロジェクトには、セキュリティのためこの制限が自動でかかっていることがあります。以下で解除できます：
> 1. 検索バーで「**組織のポリシー**」を検索して開く
> 2. 検索欄にエラー画面に出ていたID「**iam.disableServiceAccountKeyCreation**」を貼り付けて検索
> 3. 出てきたポリシーをクリック → 右上「**ポリシーを管理**」
> 4. 「適用」を **オフ** に変更（上書きのトグルが出たらON） → 「**保存**」
> 5. 手順5に戻って、もう一度鍵の作成を試す
>
> ※「権限がありません」と出る場合は、自分がこのプロジェクトの**オーナー**になっているか確認してください（自分で作ったプロジェクトなら通常オーナーです）。

## 手順2：Search Console にサービスアカウントを追加

1. https://search.google.com/search-console を開く
2. プロパティ（kyoto-salute.com）を選択 → 左下 **「設定」** → **「ユーザーと権限」**
3. **「ユーザーを追加」** → 手順1-6でコピーしたメールアドレスを貼り付け
4. 権限は **「制限付き」** でOK → 追加

## 手順3：GitHub に鍵を登録

1. https://github.com/kmunemoto/kyoto-salute-lovable-app/settings/secrets/actions を開く
2. **「New repository secret」** をクリック
   - Name: `GSC_SERVICE_ACCOUNT_JSON`
   - Secret: 手順1-5でダウンロードした**JSONファイルの中身を全部**コピーして貼り付け
3. 「Add secret」で保存

> 💡 プロパティが「ドメインプロパティ」（`sc-domain:` 型）の場合のみ：
> 同じ画面の **Variables** タブで `GSC_PROPERTY` = `sc-domain:kyoto-salute.com` を追加してください。
> URLプレフィックス型（`https://kyoto-salute.com/`）なら何もしなくてOKです。

## 手順4：動作確認

1. https://github.com/kmunemoto/kyoto-salute-lovable-app/actions を開く
2. 左の **「週次SEOレポート（Search Console連携）」** → 右の **「Run workflow」** で手動実行
3. 1〜2分後、**Issues** タブにレポートが投稿されていれば成功です 🎉

以後は毎週月曜9時に自動でレポートが届きます（GitHubからの通知メールでも確認できます）。

---

## 補足

- 鍵を登録するまでは、ワークフローは**何もせず正常終了**します（エラーにはなりません）
- 追跡キーワードを変えたい場合：`scripts/seo-report.mjs` の `TRACKED_KEYWORDS` を編集
- アラートのしきい値（既定：順位3以上の下落）：同ファイルの `ALERT_DROP_THRESHOLD`
