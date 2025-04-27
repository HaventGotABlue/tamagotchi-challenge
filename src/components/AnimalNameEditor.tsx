import React, { useState } from 'react'

interface AnimalNameEditorProps {
	initialName: string
	onNameChange: (newName: string) => void
}

export function AnimalNameEditor({
	initialName,
	onNameChange,
}: AnimalNameEditorProps) {
	const [name, setName] = useState(initialName)
	const [isEditingName, setIsEditingName] = useState(false)
	const [prevName, setPrevName] = useState(initialName)

	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value)
	}

	const saveName = () => {
		setPrevName(name)
		onNameChange(name)
		setIsEditingName(false)
	}

	const cancelNameEditing = () => {
		setName(prevName)
		setIsEditingName(false)
	}

	return (
		<div>
			{isEditingName ? (
				<div className='name-editing'>
					<input
						type='text'
						value={name}
						onChange={handleNameChange}
						placeholder='Enter a name'
					/>
					<button onClick={saveName}>Save</button>
					<button onClick={cancelNameEditing}>Cancel</button>
				</div>
			) : (
				<h1 onClick={() => setIsEditingName(true)}>{name}</h1>
			)}
		</div>
	)
}

export default AnimalNameEditor
