'use client'

import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
// import { Icons } from '@/components/icons'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

const components: { title: string; href: string; description: string }[] = [
	{
		title: 'Задать вопрос',
		href: '/ask',
		description: 'Получите ответы на любые вопросы о нашем сервисе.',
	},
	{
		title: 'FAQ',
		href: '/faq',
		description: 'Часто задаваемые вопросы с быстрыми и понятными ответами.',
	},
	{
		title: 'Сообщить об ошибке',
		href: '/report',
		description: 'Помогите нам улучшить сервис, сообщив о проблеме.',
	},
	{
		title: 'Разработчикам',
		href: '/dev',
		description: 'Техническая информация о сервисе.',
	},
]

export function NavigationMenuDemo() {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Начало</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
							<li className='row-span-3'>
								<NavigationMenuLink asChild>
									<a
										className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
										href='/'
									>
										{/* <Icons.logo className='h-6 w-6' /> */}
										<div className='mb-2 mt-4 text-lg font-medium'>car</div>
										<p className='text-sm leading-tight text-muted-foreground'>
											Автоматическое распознавание повреждений авто и расчет
											стоимости покраски: быстро, точно и удобно для каждой
											детали.
										</p>
									</a>
								</NavigationMenuLink>
							</li>
							<ListItem href='/info' title='Информация'>
								Узнайте больше о возможностях и преимуществах нашего сервиса.
							</ListItem>
							<ListItem href='/guide' title='Как это работает'>
								Пошаговый процесс работы сервиса для вашего удобства.
							</ListItem>
							<ListItem href='/rules' title='Правила расчета'>
								Прозрачные формулы и параметры для точного ценообразования.
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Components</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
							{components.map(component => (
								<ListItem
									key={component.title}
									title={component.title}
									href={component.href}
								>
									{component.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<Link href='/map' legacyBehavior passHref>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Автомастерские
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	)
}

const ListItem = React.forwardRef<
	React.ElementRef<'a'>,
	React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
						className
					)}
					{...props}
				>
					<div className='text-sm font-medium leading-none'>{title}</div>
					<p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	)
})
ListItem.displayName = 'ListItem'
