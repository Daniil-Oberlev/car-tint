import { Button } from "@/components/ui/button";

interface UploadButtonProps {
  loading: boolean;
  onClick: () => void;
}

export const UploadButton = ({ loading, onClick }: UploadButtonProps) => (
  <Button
    className={`px-6 py-2 rounded-md bg-blue-600 text-white font-semibold ${
      loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
    }`}
    onClick={onClick}
    disabled={loading}
  >
    {loading ? "Загрузка..." : "Отправить на анализ"}
  </Button>
);
