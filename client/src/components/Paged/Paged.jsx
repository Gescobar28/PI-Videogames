

export default function Paged({ videogamesPerPage, allVideogames, paginado }){
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allVideogames/videogamesPerPage); i++) {
    pageNumbers.push(i)
  }

  return(
    <nav>
      <div>
        <ul>
          {pageNumbers?.map(el =>
            <a onClick={() => paginado(el)}>{el}</a>
          )}
        </ul>
      </div>
    </nav>
  )
}