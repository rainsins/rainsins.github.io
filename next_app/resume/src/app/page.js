import Image from 'next/image'
import styles from './page.module.css'

const data = {
  name:"刘华强",
  dev:"劈生瓜蛋子",
  contact:{
    mail:"rainsin@qq.com",
    phone:"18193847354",
    loacl:"甘肃 天水",
    wechat:"18193847354",
    time:"2000.03.27"
  },
  skills:{
      lang: [
        {
          name: "Latex",
          shoulian:5,
        },
        {
          name: "C++",
          shoulian:5,
        },
        {
          name: "JavaScript",
          shoulian:5,
        },
        {
          name: "HTML和CSS",
          shoulian:5,
        },
        {
          name: "Python",
          shoulian:3,
        },
        {
          name: "Rust",
          shoulian:2,
        }
      ],
      ku:[
        {
          name: "React",
          shoulian:4,
        },
        {
          name: "Markdown",
          shoulian:4,
        },
        {
          name: "Linux",
          shoulian:4,
        },
        {
          name: "Git",
          shoulian:4,
        },
      ],
      tho:[
        {
          name:"",
          shoulian:""
        }
      ]
  },

  project:[
    {
      name:"TCP/IP的C++实现",
      author:"尉旭胜",
      time:"2023.12",
      detail: [
        "实现了TCP/IP的常用协议",
        ""
      ]
    },
  ],
  edu:[
    {
      name:"",
      prof:"",
      start_time:"",
      end_time:"",
      detail:[
        "",
        ""
      ]
    }
  ],
  p:""
}

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.resume_box}>
        <div className={styles.resume_info_box}>
          <div className={styles.resme_name}></div>
          <div className={styles.resme_dev}></div>
          <div className={styles.resme_contact}></div>
        </div>
        <div className={styles.resume_info_box}>
          <div className={styles.resme_name}></div>
          <div className={styles.resme_dev}></div>
          <div className={styles.resme_contact}></div>
        </div>
        <div className={styles.resume_info_box}>
          <div className={styles.resme_name}></div>
          <div className={styles.resme_dev}></div>
          <div className={styles.resme_contact}></div>
        </div>
        <div className={styles.resume_info_box}>
          <div className={styles.resme_name}></div>
          <div className={styles.resme_dev}></div>
          <div className={styles.resme_contact}></div>
        </div>
      </div>
    </main>
  )
}
