export default function PeopleHeaderComp() {
  return (
    <div className="flex items-center bg-light-surfaceContainerHigh md:justify-between md:px-8 md:py-3">
      <div className="flex items-center space-x-3">
        <input
          className="h-10 w-80 rounded-xl border-2 px-4 focus:border-2 focus:border-light-onSurface"
          type="text"
          id="search"
          autoComplete="off"
          placeholder="Pesuise aqui..."
        />

        <a href="/pessoas/create">
          <button type="button">+ Novo</button>
        </a>
      </div>

      <div className="flex items-center space-x-3">
        <div>
          <span>De: </span>
          <input
            type="date"
            className="h-10 rounded-xl border-2 px-4 focus:border-2 focus:border-light-onSurface"
          />
        </div>
        <div>
          <span>Até: </span>
          <input
            type="date"
            className="h-10 rounded-xl border-2 px-4 focus:border-2 focus:border-light-onSurface"
          />
        </div>
      </div>
    </div>
  );
}
