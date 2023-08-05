export function Search() {
	return (
		<>
			<form className="search">
				<label className="search-label" for="search-text"><span className="material-symbols-outlined">search</span></label>
				<input type="text" className="text-input" name="search-text" placeholder="Search... [^/]"/>
			</form>
		</>
	)
}
