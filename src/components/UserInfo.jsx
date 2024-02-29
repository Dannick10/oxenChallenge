import styles from './UseInfo.module.css'

const UserInfo = (UserInfo) => {

  return (
    <div  className={styles.user_banner}>

       <div className={styles.banner_info}>

           <div>
            <img className={styles.profile_img} src={UserInfo.data.avatar_url} alt="" />
            </div>

           <div>
               <p>{UserInfo.data.name}</p>
               <p>{UserInfo.data.bio}</p>
               <p>{UserInfo.data.company}</p>
                <p>{UserInfo.data.location}</p>
           </div>

       </div>

       <div className={styles.banner_stats}>

                <div className={styles.stats_itens}>
                    <i class="fa-solid fa-box-archive"></i>
                    <p>Repositorios</p>
                    <p>{UserInfo.data.public_repos}</p>
                </div>
                <div className={styles.stats_itens}>
                     <i class="fa-solid fa-user-group"></i>
                    <p>Seguidores</p>
                    <p>{UserInfo.data.followers}</p>
                </div>

                <div className={styles.stats_itens}>
                    <i class="fa-solid fa-user-plus"></i>
                    <p>Seguindo</p>
                <p>{UserInfo.data.following}</p>
                </div>

                <a href="">
                    <div className={styles.stats_itens}>
                    <i class="fa-brands fa-github"></i>
                        <p>perfil</p>
                        <p>&#8594;</p>
                    </div>
                </a>
     

       </div>

    </div>
  )
}

export default UserInfo