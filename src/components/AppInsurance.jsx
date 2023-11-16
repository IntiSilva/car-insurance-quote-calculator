import Form from "./Form"
import Spinner from "./Spinner"
import Result from "./Result"
import useQuoter from "../hooks/useQuoter"

const AppInsurance = () => {

  const { loading } = useQuoter()

  return (
    <>
        <header className="my-10">
            <h1 className="text-white text-center text-4xl font-black">Car Insurance Quote Calculator</h1>
        </header>

        <main className="bg-white w-11/12 sm:w-2/3 lg:w-2/4 mb-10 mx-auto shadow rounded-lg p-10">
            <Form />

            {loading  ? <Spinner /> : <Result />}
        </main>

    </>
  )
}

export default AppInsurance