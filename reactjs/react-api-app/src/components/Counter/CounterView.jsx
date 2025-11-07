
import useCounterStore from '../../store/useCounterStore';

const CounterView = () => {

    const { count } = useCounterStore()
    return(
        <>
        <h3 className="text-2xl font-bold text-cyan-900">Counter View</h3>
        <h4 className='text-3xl font-bold text-purple-700 mb-6'>{count}</h4>
        </>
    )
}

export default CounterView;