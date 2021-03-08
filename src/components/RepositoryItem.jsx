export function RepositoryItem({repository,description,link}){
	return (
		<li>
			<strong>{repository.name ?? "Default"}</strong>
			<p>{repository.description ?? "Sem descrição"}</p>
			<a href={repository.link ?? "#"}>Acessar repositório</a>
		</li>
	)
}