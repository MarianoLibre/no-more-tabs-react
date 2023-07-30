import { Label } from "../Label/Label"

export function Pane({ label, children }) {
	return (
		<div className="pane">
			<Label text={label} />
			<div className="scroller">
				{children}
			</div>
		</div>
	)
}
