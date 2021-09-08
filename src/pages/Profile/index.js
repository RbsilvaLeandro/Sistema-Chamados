import { useState, useContext } from 'react';
import './profile.css';
import Sidebar from '../../components/Sidebar';
import Title from '../../components/Title';

import avatar from '../../assets/avatar.png';

import firebase from '../../services/firebaseConnection';
import { AuthContext } from '../../context/auth';

import { FiSettings, FiUpload } from 'react-icons/fi';
import { toast } from 'react-toastify';

export default function Profile() {
  const { user, signOut, setUser, storageUser } = useContext(AuthContext);

  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);

  const [avatarUrl, setAvatarUrl] = useState(user && user.avatarUrl);
  const [imageAvatar, setImageAvatar] = useState(null);


  function handleFile(e) {

    if (e.target.files[0]) {
      const image = e.target.files[0];

      if (image.type === 'image/jpeg' || image.type === 'image/png') {
        setImageAvatar(image);
        setAvatarUrl(URL.createObjectURL(e.target.files[0]))
      } else {
        toast.error('Envie uma imagem do tipo PNG ou JPEG.');
        setImageAvatar(null);
        return null;
      }
    }
  }

  async function handleUpload() {
    const currentUid = user.uid;

    const uploadTask = await firebase.storage()
       //cria uma pasta com a foto do usuario no storage do firebase
      .ref(`images/${currentUid}/${imageAvatar.name}`)
      .put(imageAvatar)
      .then(async () => {

        //buscando a url da imagem para setar na tabela user no campo avatarUrl
        await firebase.storage().ref(`images/${currentUid}`)
          .child(imageAvatar.name).getDownloadURL()
          .then(async (url) => {
            let urlFoto = url;

            await firebase.firestore().collection('users')
              .doc(user.uid)
              .update({
                avatarUrl: urlFoto,
                name: name
              })
              .then(() => {
                let data = {
                  ...user,
                  avatarUrl: urlFoto,
                  name: name
                };
                setUser(data);
                storageUser(data);

                toast.success('Registro alterado com sucesso.');
              })
          })
      })
  }
  async function handleSave(e) {
    e.preventDefault();

    if (imageAvatar === null && name !== '') {
      await firebase.firestore().collection('users')
        .doc(user.uid)
        .update({ name: name })
        .then(() => {
          let data = {
            ...user,
            name: name
          };
          setUser(data);
          storageUser(data);
          toast.success('Registro alterado com sucesso.');
        })
    }
    else if (name !== '' && imageAvatar !== null) {
      handleUpload();
    }
  }

  return (
    <div>
      <Sidebar />

      <div className="content">
        <Title name="Meu perfil">
          <FiSettings size={25} />
        </Title>

        <div className="container">
          <form className="form-profile" onSubmit={handleSave}>
            <label className="label-avatar">
              <span>
                <FiUpload color="#FFF" size={25} />
              </span>

              <input type="file" accept="image/*" onChange={handleFile} /><br />
              {avatarUrl === undefined ?
                <img src={avatar} width="250" height="250" alt="Foto de perfil do usuario" />
                :
                <img src={avatarUrl} width="250" height="250" alt="Foto de perfil do usuario" />
              }
            </label>

            <label>Nome</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

            <label>Email</label>
            <input type="text" value={email} disabled={true} />

            <div className="divButtons">
              <button type="submit" className="salvar-btn">Salvar</button> &nbsp;
              <button className="logout-btn" onClick={() => signOut()} >
                Sair
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}