import React from 'react'
import { init } from '@waline/client'
import BLOG from '@/blog.config'
import { useRouter } from 'next/router'

/**
 * @see https://waline.js.org/guide/get-started.html
 * @param {*} props
 * @returns
 */
const WalineComponent = (props) => {
  const walineInstanceRef = React.useRef(null)
  const containerRef = React.createRef()
  const router = useRouter()

  const updateWaline = url => {
    walineInstanceRef.current?.update(props)
  }
  const locale = {
    nick: '暱稱',
    nickError: '暱稱不能少於3個字符',
    mail: '信箱',
    mailError: '請填寫正確的信箱地址',
    link: '網址',
    placeholder: '歡迎留言',
    sofa: '來搶頭香吧！',
    submit: '傳送',
    reply: '回覆',
    cancelReply: '取消回覆',
    comment: '留言',
    more: '載入更多...',
    preview: '預覽',
    emoji: '表情',
    uploadImage: '上傳圖片',
    seconds: '秒前',
    minutes: '分鐘前',
    hours: '小時前',
    days: '天前',
    now: '剛剛',
    uploading: '正在上傳',
    login: '登入',
    logout: '登出',
    admin: '雫雫',
    word: '字',
    sticky: '釘選',
    unsticky: '取消釘選',
    wordHint: '留言字數應在 $0 到 $1 字之間！\n當前字數：$2',
    oldest: '按倒序',
    latest: '按正序',
    hottest: '按熱門度'
  }
  React.useEffect(() => {
    walineInstanceRef.current = init({
      ...props,
      el: containerRef.current,
      locale,
      serverURL: BLOG.COMMENT_WALINE_SERVER_URL
    })
    router.events.on('routeChangeComplete', updateWaline)

    const anchor = window.location.hash
    if (anchor) {
      // 选择需要观察变动的节点
      const targetNode = document.getElementsByClassName('wl-cards')[0]

      // 当观察到变动时执行的回调函数
      const mutationCallback = (mutations) => {
        for (const mutation of mutations) {
          const type = mutation.type
          if (type === 'childList') {
            const anchorElement = document.getElementById(anchor.substring(1))
            if (anchorElement && anchorElement.className === 'wl-item') {
              anchorElement.scrollIntoView({ block: 'end', behavior: 'smooth' })
              setTimeout(() => {
                anchorElement.classList.add('animate__animated')
                anchorElement.classList.add('animate__bounceInRight')
                observer.disconnect()
              }, 300)
            }
          }
        }
      }

      // 观察子节点 变化
      const observer = new MutationObserver(mutationCallback)
      observer.observe(targetNode, { childList: true })
    }

    return () => {
      walineInstanceRef.current?.destroy()
      router.events.off('routeChangeComplete', updateWaline)
    }
  }, [])

  return <div ref={containerRef} />
}

export default WalineComponent
