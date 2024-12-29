import supabase from "../../utils/supabase/server.js";

export default async function page() {
  try {
    const { data: countries, error } = await supabase
      .from("countries")
      .select("*");

    if (error) {
      console.error("Error fetching countries:", error.message);
      return <p>Error fetching data!</p>;
    }

    return (
      <div className="m-10 text-sm font-sans">
        <h1 className="text-lg font-bold mb-4">
          Fetching data from{" "}
          <a
            href="https://supabase.com/dashboard/project/zcolkplfjismxyilacsb/editor/29226?schema=public"
            className="text-green-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Supabase
          </a>
        </h1>
        <div className="overflow-x-auto">
          <table className="table-auto border-collapse border border-gray-300 w-[500px] cursor-default">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="border border-gray-300 px-4 py-2 text-left">
                  ID
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Country Name
                </th>
              </tr>
            </thead>
            <tbody>
              {countries.map((country) => (
                <tr
                  key={country.id}
                  className="hover:bg-gray-100 transition-colors"
                >
                  <td className="border border-gray-300 px-4 py-2">
                    {country.id}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {country.name}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Unexpected error:");
    return <p>Unexpected error occurred!</p>;
  }
}
