import { useContext } from 'react';
import { AuthContext } from '../../context/auth';
import  SideBar  from '../../components/Sidebar';
import Title from '../../components/Title';
import { FiMessageSquare, FiPlus } from 'react-icons/fi';

export default function Dashboard() {
  const { signOut } = useContext(AuthContext);


  return(
    <div>
      <SideBar/>

      <div className="content">
        <Title name="Chamados">
          <FiMessageSquare size={25} />
        </Title>

      </div>
    </div>
  )
}