"use client";

import { UploadButton } from "@/components/atoms/UploadButton";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Home() {
  const { toast } = useToast();
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [dragging, setDragging] = useState(false);
  const dragCounter = useRef(0);

  const handleFileDrop = (files: FileList) => {
    const newFiles = Array.from(files);
    if (newFiles.length + selectedImages.length > 10) {
      toast({
        variant: "destructive",
        title: "Ошибка",
        description: "Вы можете загрузить не более 10 изображений.",
      });
      return;
    }
    const validFiles = newFiles.filter((file) =>
      ["image/png", "image/jpeg", "image/jpg"].includes(file.type)
    );

    if (validFiles.length < newFiles.length) {
      toast({
        variant: "destructive",
        title: "Некоторые файлы отклонены",
        description: "Поддерживаются только PNG, JPG и JPEG.",
      });
    }

    setSelectedImages((prevImages) => [...prevImages, ...validFiles]);
    setDragging(false);
  };

  const handleUpload = async () => {
    if (selectedImages.length === 0) {
      toast({
        variant: "destructive",
        title: "Ошибка",
        description: "Пожалуйста, выберите изображения для загрузки.",
      });
      return;
    }

    setLoading(true);
    const formData = new FormData();
    selectedImages.forEach((image, index) => {
      formData.append(`file_${index}`, image);
    });

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        toast({
          variant: "default",
          title: "Успех",
          description: "Изображения обработаны успешно!",
        });
        console.log("Ответ от backend:", data);
      } else {
        toast({
          variant: "destructive",
          title: "Ошибка загрузки",
          description: "Попробуйте снова.",
        });
      }
    } catch (error) {
      console.error("Ошибка:", error);
      toast({
        variant: "destructive",
        title: "Произошла ошибка",
        description: "Произошла ошибка при загрузке изображений.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveImage = useCallback((index: number) => {
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  }, []);

  const handleDragEvents = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "dragenter") {
      dragCounter.current++;
      setDragging(true);
    } else if (e.type === "dragleave") {
      dragCounter.current--;
      if (dragCounter.current <= 0) {
        setDragging(false);
        dragCounter.current = 0;
      }
    } else if (e.type === "dragover") {
      setDragging(true);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer.files;
    if (files) handleFileDrop(files);
    dragCounter.current = 0;
    setDragging(false);
  };

  useEffect(() => {
    const handleWindowDragOver = (e: DragEvent) => {
      e.preventDefault();
    };

    const handleWindowDrop = () => {
      setDragging(false);
      dragCounter.current = 0;
    };

    window.addEventListener("dragover", handleWindowDragOver);
    window.addEventListener("drop", handleWindowDrop);

    return () => {
      window.removeEventListener("dragover", handleWindowDragOver);
      window.removeEventListener("drop", handleWindowDrop);
    };
  }, []);

  return (
    <div
      className="flex flex-col relative"
      onDragEnter={handleDragEvents}
      onDragOver={handleDragEvents}
      onDragLeave={handleDragEvents}
      onDrop={handleDrop}
    >
      {dragging && (
        <div className="absolute inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center text-white text-lg z-10">
          <p>Перетащите файлы сюда</p>
        </div>
      )}

      <main className="flex flex-1 flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold text-center mb-6">
          Добро пожаловать в сервис оценки повреждений автомобиля
        </h1>
        <p className="text-lg text-center text-muted-foreground mb-8">
          Загрузите фото автомобиля, чтобы узнать стоимость кузовного ремонта.
        </p>

        <article className="border-dashed border-2 border-gray-400 p-6 w-full max-w-lg text-center rounded-lg mb-6 relative">
          <button
            className="relative w-full h-full p-6 text-center border-dashed border-2 border-gray-400 rounded-lg cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector<HTMLInputElement>("#fileInput")?.click();
            }}
          >
            {selectedImages.length > 0 ? (
              <div className="grid grid-cols-2 gap-2">
                {selectedImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative border rounded-md p-1 shadow-sm"
                  >
                    <Image
                      src={URL.createObjectURL(image)}
                      alt={`Preview ${index + 1}`}
                      width={150} // Укажите ширину
                      height={150} // Укажите высоту
                      className="rounded"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveImage(index);
                      }}
                      className="absolute top-2 right-2 bg-red-500 text-white text-sm px-2 py-1 rounded-full hover:bg-red-600"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p>
                Перетащите изображения сюда или нажмите, чтобы выбрать файлы
              </p>
            )}
          </button>

          <input
            id="fileInput"
            type="file"
            accept=".png, .jpg, .jpeg"
            multiple
            onChange={(e) =>
              e.target.files ? handleFileDrop(e.target.files) : null
            }
            className="hidden"
          />
        </article>

        <UploadButton loading={loading} onClick={handleUpload} />
      </main>
    </div>
  );
}
