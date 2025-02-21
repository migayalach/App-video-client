import React, { useState } from "react";
import { Upload } from "antd";
import type { UploadFile, UploadProps } from "antd";
import ImgCrop from "antd-img-crop";

interface CloudinaryProps {
  onChange: (url: string) => void;
}

const Cloudinary: React.FC<CloudinaryProps> = ({ onChange }) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const onChangeState: UploadProps["onChange"] = ({
    fileList: newFileList,
  }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url;
    if (!src && file.originFileObj) {
      src = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as Blob);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const imgWindow = window.open(src);
    imgWindow?.document.write(
      `<img src="${src}" alt="Preview" style="max-width: 100%; max-height: 100%;" />`
    );
  };

  const beforeUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "photos");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dqgcyonb9/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const { secure_url } = await response.json();
        const newFile: UploadFile = {
          uid: file.name,
          name: file.name,
          url: secure_url,
        };
        setFileList((prev) => [...prev, newFile]);
        onChange(secure_url);
        return false;
      } else {
        console.error("Error al subir la imagen a Cloudinary");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
    return false;
  };

  return (
    <div>
      <ImgCrop>
        <Upload
          listType="picture-card"
          fileList={fileList}
          onChange={onChangeState}
          onPreview={onPreview}
          beforeUpload={beforeUpload}
          showUploadList={{ showPreviewIcon: true }}
        >
          {fileList.length < 5 && "+ Upload"}
        </Upload>
      </ImgCrop>
    </div>
  );
};

export default Cloudinary;
