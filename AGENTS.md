# AGENTS.md

## 项目概览

AI瘦子增重执行教练系统测试档案网站，展示从V5到最新版本的所有测试评估结果。

### 版本技术栈

- **Framework**: Next.js 16 (App Router)
- **Core**: React 19
- **Language**: TypeScript 5
- **UI 组件**: shadcn/ui (基于 Radix UI)
- **Styling**: Tailwind CSS 4
- **Charts**: Recharts 2.15

## 目录结构

```
├── public/                 # 静态资源
├── src/
│   ├── app/                # 页面路由与布局
│   │   ├── layout.tsx      # 根布局（中文lang、元数据）
│   │   ├── page.tsx        # 首页 Dashboard
│   │   ├── globals.css     # 全局样式（自定义数据表、时间线等）
│   │   ├── version/
│   │   │   └── [id]/
│   │   │       └── page.tsx  # 版本详情页
│   │   └── qa/
│   │       └── page.tsx      # 测试问答详情页
│   ├── components/         # 业务组件
│   │   ├── Navbar.tsx      # 顶部导航栏
│   │   ├── ScoreChart.tsx  # 评分趋势折线图
│   │   ├── DimensionChart.tsx # 维度评分对比图
│   │   └── VersionRadarChart.tsx # 版本维度雷达图
│   ├── data/
│   │   └── versions.json   # 版本数据（所有版本的测试数据）
│   └── lib/
│       ├── types.ts        # TypeScript 类型定义
│       ├── data.ts         # 数据访问工具函数
│       └── utils.ts        # 通用工具函数
├── DESIGN.md               # 设计规范
└── package.json
```

## 数据维护

版本数据存储在 `src/data/versions.json`，新增版本只需：
1. 在 `versions` 数组中添加新版本对象
2. 按 `types.ts` 中的 `VersionData` 接口填写数据
3. 导航栏和首页会自动展示新版本

## 构建与测试命令

- 开发：`pnpm dev`
- 构建：`pnpm build`
- 类型检查：`pnpm ts-check`
- Lint：`pnpm lint`
- 生产启动：`pnpm start`

## 设计规范

详见 DESIGN.md，核心要点：
- 深蓝主色 `#1a365d`，浅灰背景 `#f7fafc`
- 评分色阶：90+ 绿色、80-89 橙色、<80 红色
- 数据表格：深蓝表头白字 + 斑马纹
- 禁止装饰性动画和渐变
