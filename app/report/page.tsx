'use client'

import { useState } from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function ReportErrorPage() {
	const [errorTitle, setErrorTitle] = useState('')
	const [errorDescription, setErrorDescription] = useState('')

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		console.log('Error reported:', { errorTitle, errorDescription })
	}

	return (
		<main className='max-w-lg mx-auto p-4'>
			<h2 className='text-xl font-semibold mb-4'>Сообщить об ошибке</h2>
			<form onSubmit={handleSubmit}>
				<div className='mb-4'>
					<Input
						type='text'
						placeholder='Заголовок ошибки'
						value={errorTitle}
						onChange={e => setErrorTitle(e.target.value)}
						required
					/>
				</div>
				<div className='mb-4'>
					<Textarea
						placeholder='Описание ошибки'
						value={errorDescription}
						onChange={e => setErrorDescription(e.target.value)}
						required
					/>
				</div>
				<Button type='submit'>Отправить</Button>
			</form>
		</main>
	)
}
