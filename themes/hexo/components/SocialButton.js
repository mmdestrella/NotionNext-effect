import BLOG from '@/blog.config'
import React from 'react'

/**
 * 社交联系方式按钮组
 * @returns {JSX.Element}
 * @constructor
 */
const SocialButton = () => {
  return <div className='w-full justify-center flex-wrap flex'>
    <div className='space-x-3 text-xl text-gray-600 dark:text-gray-400 '>
      {BLOG.CONTACT_YOUTUBE && <a target="_blank" rel="noreferrer" title={'youtube'} href={BLOG.CONTACT_YOUTUBE} >
        <i className="transform fab fa-youtube hover:scale-125 duration-150  text-red-600" />
      </a>}
      {BLOG.CONTACT_GITHUB && <a target='_blank' rel='noreferrer' title={'github'} href={BLOG.CONTACT_GITHUB} >
        <i className='transform fab fa-github hover:scale-125 duration-150'/>
      </a>}
      {BLOG.CONTACT_TWITTER && <a target='_blank' rel='noreferrer' title={'twitter'} href={BLOG.CONTACT_TWITTER} >
        <i className='transform fab fa-twitter hover:scale-125 duration-150 text-blue-400'/>
      </a>}
      {BLOG.CONTACT_DISCORD && <a target='_blank' rel='noreferrer' title={'discord'} href={BLOG.CONTACT_DISCORD} >
        <i className='transform fab fa-discord hover:scale-125 duration-150 text-indigo-400'/>
      </a>}
      {BLOG.CONTACT_TELEGRAM && <a target='_blank' rel='noreferrer' href={BLOG.CONTACT_TELEGRAM} title={'telegram'} >
        <i className='transform fab fa-telegram hover:scale-125 duration-150 text-blue-500'/>
      </a>}
      {BLOG.CONTACT_WEIBO && <a target='_blank' rel='noreferrer' title={'weibo'} href={BLOG.CONTACT_WEIBO} >
        <i className='transform fab fa-weibo hover:scale-125 duration-150'/>
      </a>}
      {BLOG.CONTACT_EMAIL && <a target='_blank' rel='noreferrer' title={'email'} href={`mailto:${BLOG.CONTACT_EMAIL}`} >
        <i className='fas fa-envelope transform hover:scale-125 duration-150'/>
      </a>}
      <a target='_blank' rel='noreferrer' title={'RSS'} href={'/feed'} >
        <i className='fas fa-rss transform hover:scale-125 duration-150 text-orange-500'/>
      </a>
    </div>
  </div>
}
export default SocialButton
