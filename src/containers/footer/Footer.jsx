import styles from '../../style'
import { socialMedias } from '../../constants/constants'
import RadientBg from '../../components/reusable-ui/RadientBg'

export default function Footer() {
  return (
    <footer className={`${styles.boxWidth} ${styles.flexCenter} flex-col py-8 relative`}>
        <div className='flex gap-6 pb-6'>
            {socialMedias.map((media, index) => (
                <a href={media.url} 
                key={media.id}
                target="_blank"
                className='text-white text-3xl'
                >
                    {media.icon}
                </a>
            ))}
        </div>
        <p className='text-primary'>©Copyright 2023 - Cardona Simon</p>
    </footer>
  )
}
