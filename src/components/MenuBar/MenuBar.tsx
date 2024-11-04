"use client";

import { Icon } from "@/components/Icon/Icon";
import { useCurrentEditor } from "@tiptap/react";
import styles from "./MenuBar.module.css";
import RedoSvgIcon from "/public/editor/arrow-clockwise.svg";
import UndoSvgIcon from "/public/editor/arrow-counter-clockwise.svg";
import BoldSvgIcon from "/public/editor/bold.svg";
import CodeBlockSvgIcon from "/public/editor/code-block.svg";
import CodeSvgIcon from "/public/editor/code.svg";
import EraserSvgIcon from "/public/editor/eraser.svg";
import HrSvgIcon from "/public/editor/hr.svg";
import ItalicSvgIcon from "/public/editor/italic.svg";
import ListBulletsSvgIcon from "/public/editor/list-bullets.svg";
import NumberedListBulletsSvgIcon from "/public/editor/numbered-list-bullets.svg";
import ParagraphSvgIcon from "/public/editor/paragraph.svg";
import QuoteSvgIcon from "/public/editor/quote.svg";
import StrikeSvgIcon from "/public/editor/strike.svg";
import Heading1SvgIcon from "/public/editor/text-h-one.svg";
import Heading3SvgIcon from "/public/editor/text-h-three.svg";
import Heading2SvgIcon from "/public/editor/text-h-two.svg";

// 縦線用の空要素
const IconDevider = () => {
  return <div style={{ background: "#e5e7eb", width: "1px" }} />;
};

export const MenuBar = () => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  return (
    <>
      <div className={styles.menuBar}>
        <Icon
          onClick={() => editor.chain().focus().undo().run()}
          isActive={false}
          disabled={!editor.can().chain().focus().undo().run()}
          svgIcon={<UndoSvgIcon />}
        />
        <Icon
          onClick={() => editor.chain().focus().redo().run()}
          isActive={false}
          disabled={!editor.can().chain().focus().redo().run()}
          svgIcon={<RedoSvgIcon />}
        />
        <IconDevider />
        <Icon
          onClick={() => editor.chain().focus().setParagraph().run()}
          isActive={editor.isActive("paragraph")}
          svgIcon={<ParagraphSvgIcon />}
        />
        <Icon
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          isActive={editor.isActive("heading", { level: 2 })}
          svgIcon={<Heading1SvgIcon />}
        />
        <Icon
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          isActive={editor.isActive("heading", { level: 3 })}
          svgIcon={<Heading2SvgIcon />}
        />
        <Icon
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          isActive={editor.isActive("heading", { level: 4 })}
          svgIcon={<Heading3SvgIcon />}
        />
        <IconDevider />
        <Icon
          onClick={() => editor.chain().focus().toggleBold().run()}
          isActive={editor.isActive("bold")}
          svgIcon={<BoldSvgIcon />}
        />
        <Icon
          onClick={() => editor.chain().focus().toggleItalic().run()}
          isActive={editor.isActive("italic")}
          svgIcon={<ItalicSvgIcon />}
        />
        <Icon
          onClick={() => editor.chain().focus().toggleStrike().run()}
          isActive={editor.isActive("strike")}
          svgIcon={<StrikeSvgIcon />}
        />
        <IconDevider />
        <Icon
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          isActive={editor.isActive("bulletList")}
          svgIcon={<ListBulletsSvgIcon />}
        />
        <Icon
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          isActive={editor.isActive("orderedList")}
          svgIcon={<NumberedListBulletsSvgIcon />}
        />
        <Icon
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          isActive={editor.isActive("blockquote")}
          svgIcon={<QuoteSvgIcon />}
        />
        <Icon
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          isActive={false}
          svgIcon={<HrSvgIcon />}
        />
        <Icon
          onClick={() => editor.chain().focus().toggleCode().run()}
          isActive={editor.isActive("code")}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          svgIcon={<CodeSvgIcon />}
        />
        <Icon
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          isActive={editor.isActive("codeBlock")}
          disabled={!editor.can().chain().focus().toggleCodeBlock().run()}
          svgIcon={<CodeBlockSvgIcon />}
        />
        <IconDevider />
        <Icon
          onClick={() =>
            editor.chain().focus().clearNodes().unsetAllMarks().run()
          }
          isActive={false}
          svgIcon={<EraserSvgIcon />}
        />
      </div>
      <hr className={styles.divider} />
    </>
  );
};
