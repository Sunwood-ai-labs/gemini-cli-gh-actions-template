# Gemini CLI & GitHub Actions テンプレートリポジトリ

このリポジリは、Gemini CLI と GitHub Actions を使用するためのテンプレートとして設計されています。開発者がこれらのツールをプロジェクトに統合し、自動化されたワークフローを構築する際の出発点となることを目的としています。

## 特徴

- **Gemini CLI の統合**: Gemini CLI を使用して、コード生成、リファクタリング、バグ修正などの開発タスクを効率化します。
- **GitHub Actions のワークフロー**: CI/CD パイプラインやその他の自動化タスクを GitHub Actions で設定するための基本的なワークフローが含まれています。
- **日本語対応**: README および関連ドキュメントは日本語で記述されており、日本の開発者にとって使いやすいように配慮されています。

## 含まれる GitHub Actions ワークフロー

このテンプレートには、以下の GitHub Actions ワークフローの例が含まれています。

- `.github/workflows/issue-committer.yml`: イ���ューのコメントに基づいてコミットを自動化するワークフローの例です。

## はじめに

このテンプレートをフォークまたはクローンして、独自のプロジェクトを開始できます。

1.  このリポジリをクローンします。
    ```bash
    git clone https://github.com/your-username/your-repository-name.git
    ```
2.  Gemini CLI をインストールし、設定します。詳細については、Gemini CLI の公式ドキュメントを参照してください。
3.  `.github/workflows/` ディレクトリ内のワークフローを、プロジェクトのニーズに合わせてカスタマイズします。

## ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。詳細については、`LICENSE` ファイルを参照してください。