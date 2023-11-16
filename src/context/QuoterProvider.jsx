import { useState, createContext } from 'react'
import { obtainYearDifference, estimateBrand, estimatePlan, formatMoney } from '../helpers'

const QuoterContext = createContext()

const QuoterProvider = ({children}) => {

    const [data, setData] = useState({
        brand: '',
        year: '',
        plan: ''
    })
    const [error, setError] = useState('')
    const [result, setResult] = useState(0)
    const [loading, setLoading] = useState(false)

    const handleChangeData = e => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const quoteInsurance = () => {
        // A base
        let result = 2000

        // Obtain years difference
        const difference = obtainYearDifference(data.year)

        // 3% must be subtracted for each year
        result -= ((difference * 3) * result) / 100

        // European 30%
        // American 15%
        // Asian 5%
        result *= estimateBrand(data.brand)

        // Basic 20%
        // Complete 50%
        result *= estimatePlan(data.plan)

        // Format Money
        result = formatMoney(result)

        setLoading(true)

        setTimeout(() => {
            setResult(result)
            setLoading(false)
        }, 3000);
    }

    return(
        <QuoterContext.Provider
            value={{
                data,
                handleChangeData,
                error,
                setError,
                quoteInsurance,
                result,
                loading
            }}
        >
            {children}
        </QuoterContext.Provider>
    )
}

export { 
    QuoterProvider
}
export default QuoterContext