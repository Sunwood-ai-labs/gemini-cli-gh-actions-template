<div align="center">

# Gemini CLI & GitHub Actions テンプレートリポジトリ

<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" alt="GitHub Actions">
</p>

このリポジトリは、Gemini CLI と GitHub Actions を使用するためのテンプレートです。開発者がこれらのツールをプロジェクトに統合し、自動化されたワークフローを構築する際の出発点となることを目的としています。

</div>

<!-- ここにスクリーンショットを挿入 -->
<div align="center">
  <img src="https://github.com/user-attachments/assets/616555c8-0193-4823-9bdc-14363b15a1ea" alt="アプリケーションのスクリーンショット" width="600">
</div>

## ✨ 特徴

- **🤖 Gemini CLI の統合**: Gemini CLI を使用して、コード生成、リファクタリング、バグ修正などの開発タスクを効率化します。
- **🚀 GitHub Actions のワークフロー**: Issue の内容に基づいて、Gemini が自動でコードを修正し、プルリクエストを作成します。
- **🇯🇵 日本語対応**: README および関連ドキュメントは日本語で記述されており、日本の開発者にとって使いやすいように配慮されています。

## 📂 プロジェクト構造

```
.
├── .github/
│   └── workflows/
│       ├── issue-committer.yml  # Issue ベースの自動コミットワークフロー
│       └── README.md            # ワークフローの詳細説明
├── .gitignore
├── index.html                   # 夏詣おみくじアプリ
├── script.js
├── style.css
└── README.md
```

## 🛠️ はじめに

### インストール

このテンプレートをフォークまたはクローンして、独自のプロジェクトを開始できます。

```bash
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name
```

### Webアプリケーションの実行

`index.html` ファイルをブラウザで開くと、「夏詣（なつもうで）おみくじ」アプリケーションを試すことができます。

## ⚙️ 使用方法

### Issue を利用したコードの自動修正

このリポジトリの心臓部である GitHub Actions ワークフローの使用方法です。

1.  **Issue の作成**: このリポジトリで新しい Issue を作成します。
2.  **修正内容の記述**: Issue の本文に、Gemini に依頼したい修正内容を具体的に記述します。（例：「`index.html` のタイトルを `迎春おみくじ` に変更してください」）
3.  **自動PR作成**: Issue が作成されると、GitHub Actions が自動的にトリガーされます。Gemini が Issue の内容を解釈してコードを修正し、新しいブランチにコミットしてプルリクエストを作成します。

詳細なワークフローについては、[`.github/workflows/README.md`](./.github/workflows/README.md) を参照してください。

## 📄 ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。
