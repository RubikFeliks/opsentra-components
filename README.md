# Opsentra Components

- [浏览器剪贴板扩展 0.2.0 测试版](https://github.com/RubikFeliks/opsentra-components/releases/tag/clipboard-v0.2.0)
- [Windows x64 0.2.1 客户端与本机桥接（测试版）](https://github.com/RubikFeliks/opsentra-components/releases/tag/desktop-v0.2.1)
- 组件目录：`catalog.json`（扩展及 Windows 测试包已发布，macOS 新版待发布）

Opsentra 独立组件目录与客户端分发仓库。业务后台与部署代码保留在 [Opsentra](https://github.com/RubikFeliks/Opsentra)。

## 目录

- `catalog.json`：组件目录，网站与后续接入方共用；`schema_version` 当前为 1。
- `index.html`、`app.js`、`style.css`：静态组件中心，支持关键词、系统及类型筛选。
- `release-assets/`：本地准备的发行文件，已忽略；上传到 GitHub Release Assets，不放进 Git 提交。

## 发布

1. 将这份仓库初始化文件提交到 `RubikFeliks/opsentra-components`。
2. 在此仓库创建 Release（推荐 tag `clipboard-v0.2.0`），上传 ZIP 与 `.sha256`。当前 ZIP 为测试扩展，需浏览器手动加载。
3. 实际上传完成后，将 `catalog.json` 对应组件的 `status` 改成 `published`，填写真实的 HTTPS Release Asset 地址。SHA256 必须与所上传文件一致。
4. 客户端需重新构建包含本机桥接自动注册的新版本，再上传安装包并登记架构、版本和校验值。不要把旧 0.2.0 文件标为具备新功能。
5. 如需网站，可启用该仓库 GitHub Pages（从默认分支根目录提供），或将四个静态文件部署到自己的 HTTPS 站点。在 Opsentra 后台“系统设置 → 客户端与浏览器组件”填写站点地址。

普通 GitHub 仓库页面可查看目录和 Releases；搜索筛选网页需启用 Pages 或自建站点。未发布条目没有下载按钮。

## 安全与授权

首次扩展发布为 `clipboard-v0.2.0` 测试版。Windows 0.2.1 配套客户端已提供测试构建，包含启动时桥接自动注册；本次 Windows 实机验收待完成，未作 Authenticode 正式签名。macOS 新版条目仍待发布，旧 0.2.0 包不包含本次新增桥接注册逻辑。

这里只放可公开的发行内容，不放平台配置、登录令牌、证书私钥、数据库或用户文件。浏览器扩展依然需要首次授权，GitHub ZIP 下载不等于官方商店一键安装。正式上架后扩展 ID 必须与本机桥接允许的身份一致。

当前仓库初始化材料未替项目指定开源许可证；公开源码不等于自动授予特定开源许可。请由维护者选择许可证，并保留各发行包中的 Electron/Chromium 等第三方许可与声明。
