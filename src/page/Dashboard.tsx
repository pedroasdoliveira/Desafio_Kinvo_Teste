import Api from '../Data/Api'
import Aside from '../components/Aside/Aside'
import Header from '../components/Header/Header'
import * as Style from './Dashboard-style'

const Dashboard = () => {
  const ApiGet = async () => {
    const result = await Api.get('/getFixedIncomeClassData');
    console.log(result.data.data);
  }
  ApiGet();

  return (
    <Style.Dashboard>
      <header>
        <Header />
      </header>
      
      <Style.AsideDashboard>
        <Aside />
      </Style.AsideDashboard>

      <Style.MainDashboard>

        <h1>Renda Fixa</h1>

      </Style.MainDashboard>

    </Style.Dashboard>
  )
}

export default Dashboard