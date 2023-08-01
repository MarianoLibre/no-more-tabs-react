export function Group({ text, colour }) {
	return (
		<div className={ `group ${colour}` }>
			{text}
		</div>
	)
}
