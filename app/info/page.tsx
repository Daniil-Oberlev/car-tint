"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function InfoPage() {
  const { toast } = useToast();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">Информация о сайте</h1>
      <p className="text-lg mb-6">
        Добро пожаловать на наш сайт! Здесь вы найдете различные инструменты и
        ресурсы для выполнения задач, получения информации и общения с нами.
      </p>
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Цели и задачи</h2>
        <p>
          Наш сайт предназначен для упрощения поиска информации и выполнения
          запросов. Мы предоставляем разнообразные инструменты для улучшения
          вашей работы и удобства.
        </p>
      </section>

      <section className="space-y-6 mt-8">
        <h2 className="text-2xl font-semibold">Контакты</h2>
        <p>
          Если у вас возникли вопросы или предложения, пожалуйста, свяжитесь с
          нами по следующему адресу электронной почты:{" "}
          <a href="mailto:support@example.com" className="text-blue-600">
            support@example.com.
          </a>
        </p>
      </section>

      <Button
        onClick={() => {
          toast({
            title: "Спасибо за ваш интерес!",
            description: "Мы свяжемся с вами в ближайшее время.",
          });
        }}
        className="mt-6"
      >
        Узнать больше
      </Button>
    </div>
  );
}
