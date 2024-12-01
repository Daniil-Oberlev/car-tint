interface UploadButtonProps {
	loading: boolean
	onClick: () => void
}

export const UploadButton = ({ loading, onClick }: UploadButtonProps) => (
	<button
		className={`px-6 py-2 rounded bg-blue-600 text-white font-semibold ${
			loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
		}`}
		onClick={onClick}
		disabled={loading}
	>
		{loading ? 'Загрузка...' : 'Отправить на анализ'}
	</button>
)
