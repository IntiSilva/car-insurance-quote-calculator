import { Fragment, useCallback, useMemo, useRef } from 'react'
import useQuoter from "../hooks/useQuoter"
import { BRANDS, PLANS } from '../constants'


const Result = () => {
    const { result, data } = useQuoter()
    const { brand, plan, year } = data
    const yearRef = useRef(year)

    const [brandName] = useCallback(
        BRANDS.filter(m => m.id === Number(brand) ),
        [result]
    )
    const [planName] = useMemo( () =>
        PLANS.filter(p => p.id === Number(plan) ),
        [result]
    )

    if(result === 0) return null

    return (
        <div className="bg-gray-100 text-center mt-5 p-5 shadow">
            <h2 className="text-gray-600 font-black text-3xl">
                Summary
            </h2>

            <p className="my-2">
                <span className="font-bold">Brand: </span>
                {brandName.name}
            </p>

            <p className="my-2">
                <span className="font-bold">Plan: </span>
                {planName.name}
            </p>

            <Fragment>
            <p className="my-2">
                <span className="font-bold">Car&apos;s Year: </span>
                {yearRef.current}
            </p>
            </Fragment>

            <p className="my-2 text-2xl">
                <span className="font-bold">Total Quotation: </span>
                {result}
            </p>
        </div>
    )
}

export default Result