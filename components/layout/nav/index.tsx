"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { CarFront, Info, HelpCircle, Code, MapPin } from "lucide-react";

const components: {
  title: string;
  href: string;
  description: string;
  icon: React.ElementType;
}[] = [
  {
    title: "Задать вопрос",
    href: "/ask",
    description: "Получите ответы на любые вопросы о нашем сервисе.",
    icon: HelpCircle,
  },
  {
    title: "FAQ",
    href: "/faq",
    description: "Часто задаваемые вопросы с быстрыми и понятными ответами.",
    icon: Info,
  },
  {
    title: "Сообщить об ошибке",
    href: "/report",
    description: "Помогите нам улучшить сервис, сообщив о проблеме.",
    icon: Code,
  },
  {
    title: "Разработчикам",
    href: "/dev",
    description: "Техническая информация о сервисе.",
    icon: Code,
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Начало</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <CarFront className="h-6 w-6 mb-2" />
                    <div className="mb-2 mt-4 text-lg font-medium">car</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Автоматическое распознавание повреждений авто и расчет
                      стоимости покраски: быстро, точно и удобно для каждой
                      детали.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/info" title="Информация" icon={Info}>
                Узнайте больше о возможностях и преимуществах нашего сервиса.
              </ListItem>
              <ListItem
                href="/guide"
                title="Как это работает"
                icon={HelpCircle}
              >
                Пошаговый процесс работы сервиса для вашего удобства.
              </ListItem>
              <ListItem href="/rules" title="Правила расчета" icon={Code}>
                Прозрачные формулы и параметры для точного ценообразования.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Дополнительно</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  icon={component.icon}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/map" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <MapPin className="inline h-4 w-4 mr-2" />
              Автомастерские
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon: React.ElementType }
>(({ className, title, children, icon: Icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center text-sm font-medium leading-none">
            <Icon className="mr-2 h-4 w-4" />
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
