"use client";

import { useForm, FormProvider } from "react-hook-form";

import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface FormData {
  email: string;
  request: string;
}

export default function AskForm() {
  const methods = useForm<FormData>({
    defaultValues: {
      email: "",
      request: "",
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = methods;

  function onSubmit(data: FormData) {
    toast({
      title: "Вы отправили следующие данные:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="max-w-lg mx-auto p-6">
      <h2 className="text-xl font-semibold mb-4">Запрос по области</h2>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Поле для ввода email */}
          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ваш Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Введите ваш email"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Пожалуйста, укажите ваш email для связи.
                </FormDescription>
                {errors.email && (
                  <FormMessage>{errors.email?.message}</FormMessage>
                )}
              </FormItem>
            )}
          />

          {/* Поле для ввода запроса */}
          <FormField
            control={control}
            name="request"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ваш запрос</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Опишите ваш запрос"
                    rows={4}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Пожалуйста, опишите ваш запрос или проблему.
                </FormDescription>
                {errors.request && (
                  <FormMessage>{errors.request?.message}</FormMessage>
                )}
              </FormItem>
            )}
          />

          <Button type="submit">Отправить запрос</Button>
        </form>
      </FormProvider>
    </div>
  );
}
