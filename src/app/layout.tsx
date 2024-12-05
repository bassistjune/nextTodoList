import React from "react";
import LayoutRecoil from "./layout.recoil";

export const metadata = {
    title: "한준희의 ToDoList 과제",
    description: "todolist 과제 제출 페이지 입니다.",
    icons: {
        icon: "/assets/favicon/favicon.ico"
    }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <LayoutRecoil>{children}</LayoutRecoil>
      </body>
    </html>
  );
}
