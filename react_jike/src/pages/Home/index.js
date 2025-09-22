import BarChart from "./components/BarChart"

const Home = () => {
    
    return <div>
        <BarChart title={'三大框架满意度'} data={['a','b','c']}/>
        <BarChart title={'三大框架使用度'} data={['Vue', 'React', 'Angular']} />
        </div>
}
export default Home