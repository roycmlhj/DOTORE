import React from "react";
import styled from 'styled-components';
import { Editor, EditorState, RichUtils, DraftEditorCommand, AtomicBlockUtils, SelectionState, convertToRaw } from "draft-js";
import { mediaBlockRenderer } from './MediaBlock';
import { Button } from "../Button";
import "draft-js/dist/Draft.css";

const Container = styled.div`
  width: 100%;
  padding: 1rem 0;
  border: solid 1px black;
  border-radius: 8px;

`;

const ButtonListContainer = styled.div`
  width: 16rem;
  display: flex;
  padding-left: 1rem;
  padding-bottom: 1rem;
  gap: 0.3rem;
  button {
    font-size: 1.2rem;
    width: 2.4rem;
    border: 1px solid #d0d0d0;
    border-radius: 0;
    background-color: #fff;
    cursor: pointer;
    :hover {
      box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.2);
    }

    &.bold {
      font-weight: bold;
    }
    &.italic {
      font-style: italic;
    }
    &.strikethrough{
      text-decoration: line-through;
    }
  }
`;

const EditorContainer = styled.div`
  width: 100%;
  padding: 1rem;
  overflow: hidden scroll;
  border: solid 1px black;
  font-size: 1.1rem;
  line-height: 1.2rem;
  height: 16rem;
  h1 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.4rem;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.7rem;
  }
  h3 {
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 1.5rem;
  }
`;

const TextEditorFooter = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem 1rem 0 0;
  justify-content: end;

`;

// 텍스트 에디터
export const TextEditor = () => {
  const [editorState, setEditorState] = React.useState<EditorState>(() =>
    EditorState.createEmpty()
  );

  // 단축키 조작
  const handleKeyCommand = (command: DraftEditorCommand) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  // 툴바 조작
  const handleTogggleClick = (e: React.MouseEvent, inlineStyle: string) => {
    e.preventDefault();
    setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };
  const handleBlockClick = (e: React.MouseEvent, blockType: string) => {
    e.preventDefault();
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  // 이미지 붙여넣기
  const handlePastedFile = (files: Array<Blob>) => {
    if (!files) {
      return 'not-handled';
    }
    const file = files[0];  // 파일 하나씩만.
    if (file.type !== 'image/png' &&
      file.type !== 'image/jpeg' &&
      file.type !== 'image/gif') {
      return 'not-handled';
    }
    if (file.size >= 5 * 1048576) {  // 일단 5MB 이상 사진 못넣게, 사이즈 추후 의논
      console.log('사진 크기 5MB 이상임!');
      return 'not-handled';
    }
    console.log(file)
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      // Content state에 파일의 data를 담은 이미지 엔티티 생성.
      const contentState = editorState.getCurrentContent();
      const contentStateWithEntity = contentState.createEntity("image", "IMMUTABLE", { src: reader.result });
      const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
      setEditorState(AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, ' '));
    }, false)
    // 파일의 data를 읽어냄.
    reader.readAsDataURL(file);

    return 'handled';
  }
  // 이미지 드롭 다운
  const handleDroppedFile = (selection: SelectionState, files: Array<Blob>) => {
    if (!files) {
      return 'not-handled';
    }
    const file = files[0];  // 파일 하나씩만.
    if (file.type !== 'image/png' &&
      file.type !== 'image/jpeg' &&
      file.type !== 'image/gif') {
      return 'not-handled';
    }
    if (file.size >= 5 * 1048576) {  // 일단 5MB 이상 사진 못넣게, 사이즈 추후 의논
      console.log('사진 크기 5MB 이상임!');
      return 'not-handled';
    }
    console.log(file)
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      // Content state에 파일의 data를 담은 이미지 엔티티 생성.
      const contentState = editorState.getCurrentContent();
      const contentStateWithEntity = contentState.createEntity("image", "IMMUTABLE", { src: reader.result });
      const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
      setEditorState(AtomicBlockUtils.insertAtomicBlock(editorState, entityKey, ' '));
    }, false)
    // 파일의 data를 읽어냄.
    reader.readAsDataURL(file);

    return 'handled';
  }

  return (
    <Container>
      <ButtonListContainer>
        <button onMouseDown={(e) => handleBlockClick(e, "header-one")}>H1</button>
        <button onMouseDown={(e) => handleBlockClick(e, "header-two")}>H2</button>
        <button onMouseDown={(e) => handleBlockClick(e, "header-three")}>H3</button>
        <button onMouseDown={(e) => handleTogggleClick(e, "BOLD")} className="bold">B</button>
        <button onMouseDown={(e) => handleTogggleClick(e, "ITALIC")} className="italic">I</button>
        <button onMouseDown={(e) => handleTogggleClick(e, "STRIKETHROUGH")} className="strikethrough">S</button>
      </ButtonListContainer>
      <EditorContainer>
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
          blockRendererFn={mediaBlockRenderer}
          placeholder="Write something!"
          handlePastedFiles={handlePastedFile}
          handleDroppedFiles={handleDroppedFile}
        />
      </EditorContainer>
      <TextEditorFooter>
        <Button
          label='작성하기'
          backgroundColor="#6667AB"
          onClick={() => {
            console.log(editorState.getCurrentContent().getPlainText('\u000A'))
            console.log(convertToRaw(editorState.getCurrentContent()))
          }}
        ></Button>
      </TextEditorFooter>
    </Container>
  );
}