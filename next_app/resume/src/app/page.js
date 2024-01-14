import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  const img_style = {
    
  }
  return (
    <main className={styles.main}>
      <div className={styles.resume_box}>
        <div className={styles.resume_left_box}>
          <div className='resume_img_info'>
            <Image
              src="https://rainsin-1305486451.file.myqcloud.com/rainsin-blog/resume/FFF3921FD2192061589961B9A1F_70AA3B53_AEAC.jpg"
              alt='长安大学'
              width={64}
              height={64}
            />
          </div>
          <div className='resume_name'>
            尉旭胜
          </div>
          <div className='resume_dev'>
            Full Stack Developer
          </div>
        </div>
        <div className={styles.resume_right_box}>
          
        </div>
      </div>
    </main>
  )
}
