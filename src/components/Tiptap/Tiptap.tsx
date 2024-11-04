"use client";

import { MenuBar } from "@/components/MenuBar/MenuBar";
import { EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import styles from "./Tiptap.module.css";

export default function Tiptap() {
  const extensions = [StarterKit];

  const content = `
  <h1>this is test <b>content</b>!</h1>
  <p>lorem ipsum dolor sit amet...</p>
  `;

  return (
    <>
      <div className={styles.editor}>
        <EditorProvider
          slotBefore={<MenuBar />}
          extensions={extensions}
          content={content}
        ></EditorProvider>
      </div>
    </>
  );
}
