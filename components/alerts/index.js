export const errorAlert = (error) => (
  <div
    className="fixed top-20 z-10 left-4 right-4 md:left-20 md:right-20  duration-700"
    id="errorAlert"
  >
    <div role="alert" className="w-full relative">
      <div className="bg-red-200 border border-red-400 text-red-700 text-center uppercase text-lg font-bold rounded px-20 py-2 ">
        Error <i className="fa fa-angle-right text-md mx-2 font-bold"></i>
        <span className="lowercase font-normal text-md">{error}</span>
      </div>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3 ">
        <svg
          className="fill-current h-6 w-6 text-red-500 hover:scale-125 duration-300"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          onClick={() => {
            document.getElementById("errorAlert").classList.add("hidden");
          }}
        >
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </svg>
      </span>
    </div>
  </div>
);

export const successAlert = (success) => (
  <div
    className="fixed top-20 z-10 left-4 right-4 md:left-32 md:right-32  duration-700"
    id="successAlert"
  >
    <div role="alert" className="w-full relative">
      <div className="bg-green-200 border border-green-400 text-green-700 text-center uppercase text-lg font-bold rounded px-20 py-2 ">
        Success <i className="fa fa-angle-right text-md mx-2 font-bold"></i>{" "}
        <span className="lowercase font-normal text-md">{success}</span>
      </div>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3 ">
        <svg
          className="fill-current h-6 w-6 text-black hover:scale-125 duration-300"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          onClick={() => {
            document.getElementById("successAlert").classList.add("hidden");
          }}
        >
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </svg>
      </span>
    </div>
  </div>
);
