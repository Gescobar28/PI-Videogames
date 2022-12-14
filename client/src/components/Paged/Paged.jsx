import './Paged.css'

export default function Paged({ videogamesPerPage, allVideogames, paginado }){
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allVideogames/videogamesPerPage); i++) {
    pageNumbers.push(i)
  }

  return(
    <nav>
      <div className='divPaged'>
          {pageNumbers?.map(el =>
            <a className='paged' key={el} onClick={() => paginado(el)}>{el}</a>
          )}
      </div>
    </nav>
  )
}