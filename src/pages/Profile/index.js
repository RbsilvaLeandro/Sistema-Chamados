import './profile.css';
import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';

import { FiSettings } from 'react-icons/fi';

export default function Profile(){
  return(
    <div>
      <Sidebar/>

      <div className="content">
        <Title name="Meu perfil">
          <FiSettings size={25} />
        </Title>

      </div>
    </div>
  )
}