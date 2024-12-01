import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'

export default function FAQ() {
	return (
		<main className='container mx-auto p-4'>
			<h1 className='text-4xl font-bold text-center mb-6'>FAQ</h1>
			<p className='text-lg text-center text-muted-foreground mb-8'>
				Часто задаваемые вопросы и ответы
			</p>
			<Accordion type='single' collapsible className='w-full max-w-2xl mx-auto'>
				<AccordionItem value='item-1'>
					<AccordionTrigger>Как загрузить изображения?</AccordionTrigger>
					<AccordionContent>
						Чтобы загрузить изображения, вы можете перетащить их в область
						загрузки или нажать на неё, чтобы выбрать файлы с вашего устройства.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-2'>
					<AccordionTrigger>
						Какие форматы файлов поддерживаются?
					</AccordionTrigger>
					<AccordionContent>
						Мы поддерживаем файлы в форматах PNG, JPG и JPEG. Файлы других
						форматов будут отклонены.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-3'>
					<AccordionTrigger>Сколько файлов я могу загрузить?</AccordionTrigger>
					<AccordionContent>
						Вы можете загрузить до 10 изображений за один раз. Если вы выберете
						больше, система предложит уменьшить количество.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-4'>
					<AccordionTrigger>
						Что делать, если загрузка не удалась?
					</AccordionTrigger>
					<AccordionContent>
						Если загрузка не удалась, убедитесь, что ваше интернет-соединение
						активно и попробуйте снова. Если проблема сохраняется, обратитесь в
						службу поддержки.
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value='item-5'>
					<AccordionTrigger>
						Могу ли я удалить изображение после загрузки?
					</AccordionTrigger>
					<AccordionContent>
						Да, вы можете удалить любое загруженное изображение перед отправкой
						на сервер, нажав на кнопку удаления рядом с изображением.
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</main>
	)
}
