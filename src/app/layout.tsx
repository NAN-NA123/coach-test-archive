import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '教练系统测试档案',
    template: '%s | 教练系统测试档案',
  },
  description: 'AI瘦子增重执行教练系统 - 从V5到最新版本的测试评估结果档案',
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.COZE_PROJECT_ENV === 'DEV';

  return (
    <html lang="zh-CN">
      <body className={`antialiased min-h-screen`}>
        {isDev && <Inspector />}
        {children}
      </body>
    </html>
  );
}
