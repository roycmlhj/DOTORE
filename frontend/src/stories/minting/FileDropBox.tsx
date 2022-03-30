import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import { Icon } from "../common/Icon";

const Container = styled.div<{ imageUrl: string }>`
  position: relative;
  width: 23rem;
  height: 23rem;
  border: 4px dashed rgba(102, 103, 171, 0.55);
  border-radius: 30px;
  padding: 0.3rem;
  background-clip: content-box;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  svg {
    color: #9d9d9d;
    text-align: end;
  }
`;

const FileDropDiv = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  border: solid #fff white 1rem;
  border-radius: 25px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 6rem;
  }
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const DeleteFile = styled.div<{ isShow: boolean }>`
  display: ${(props) => (props.isShow ? "block" : "none")};
  position: absolute;
  right: 1.5rem;
  top: 1rem;
  cursor: pointer;
  svg {
    font-size: 2rem;
  }
`;

interface FileDropBoxProps {
  onChange: (e: any) => void;
}

export const FileDropBox = ({ onChange }: FileDropBoxProps) => {
  const [file, setFile] = useState<{ file: File; preview: string }>();
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (files: File[]) => {
      const newFile = files[0];
      setFile({ file: newFile, preview: URL.createObjectURL(files[0]) });
      console.log(file);
    },
  });

  function onClickDeleteFile() {
    setFile({ file: {} as File, preview: "" });
  }

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks
    if (file?.preview) {
      URL.revokeObjectURL(file.preview);
    }
  }, [file]);

  return (
    <Container imageUrl={file && file.preview ? file.preview : ""}>
      <DeleteFile
        isShow={file && file.preview ? true : false}
        onClick={onClickDeleteFile}
      >
        <Icon mode="fas" icon={"xmark"}></Icon>
      </DeleteFile>
      <FileDropDiv {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <Icon mode="fas" icon={"image"}></Icon>
      </FileDropDiv>
    </Container>
  );
};
