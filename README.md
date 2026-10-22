> **2026-10-22 文件剪贴板修复：** [扩展 0.2.2](https://github.com/RubikFeliks/opsentra-components/releases/tag/clipboard-v0.2.2) + [独立桥接 0.2.4（Windows / macOS 两架构）](https://github.com/RubikFeliks/opsentra-components/releases/tag/bridge-v0.2.4)。在复制快捷键发生时登记本次操作，修复取文件较慢/切回桌面导致授权失效；扩展恢复后检测桥接会修复已打开的已授权工作台。需要更新平台应用，首次从旧版升级刷新工作台一次并新建 RDP 会话，复制完成提示后再粘贴。完整桌面客户端旧包不会自动获得本修复，纯网页可使用独立桥接。各构建及协议测试通过，完整 Windows/macOS 浏览器/RDP 连续双向复制仍需实机验收；测试包未正式签名/公证。ZIP 解压加载受开发者模式及组织策略约束，不等于商店安装。普通文件上传下载不依赖扩展。

# Opsentra Components

- [浏览器剪贴板扩展 0.2.2 测试版](https://github.com/RubikFeliks/opsentra-components/releases/tag/clipboard-v0.2.2)
- [Windows x64 0.2.1 客户端与本机桥接（测试版）](https://github.com/RubikFeliks/opsentra-components/releases/tag/desktop-v0.2.1)
- [独立轻量桥接 0.2.4（Windows / macOS 测试版）](https://github.com/RubikFeliks/opsentra-components/releases/tag/bridge-v0.2.4)
- 组件目录：`catalog.json`（扩展 0.2.2、Windows/macOS 独立桥接 0.2.4 已发布；完整桌面客户端仍为原版本）

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

## 网页用户的独立桥接

纯网页用户可安装约 1.3–1.5 MB 的独立桥接，无需完整远程客户端。解压运行 Install.cmd / Install.command，确认平台地址，再配置 0.2.2 扩展即可。桌面用户可继续使用内置桥接。新桌面源码 0.2.2 增加共存处理，旧 0.2.1 未自动更新；如覆盖注册，重新运行独立安装器。独立包未正式签名/公证，真实浏览器验收仍待完成，细节见包内 README。

## Windows RDP 目标端会话组件

[0.1.0 测试包和安装前提](https://github.com/RubikFeliks/opsentra-components/releases/tag/windows-session-agent-v0.1.0)。安装在被连接的 Windows 上，和用户侧轻量桥接分开。先更新平台并迁移到 0046，在对应资产连接配置下载账号绑定 JSON，再以该 Windows 用户安装。绑定 JSON 含专用密钥，不应放入本仓库。Windows 实机验收及正式签名仍待完成。
