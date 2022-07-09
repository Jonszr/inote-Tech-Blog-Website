import '@wangeditor/editor/dist/css/style.css' // 引入 css

import React, { useState, useEffect } from 'react'
import { Editor, Toolbar } from '@wangeditor/editor-for-react'

import { i18nChangeLanguage } from '@wangeditor/editor'

export default function BlogEditor() {
    const [editor, setEditor] = useState(null) // 存储 editor 实例
    const [html, setHtml] = useState('')
    i18nChangeLanguage('en')
    // 模拟 ajax 请求，异步设置 html
    // useEffect(() => {
    //     setTimeout(() => {
    //         setHtml('<p>hello&nbsp;<strong>world</strong>.</p>\n<p><br></p>')
    //     }, 1500)
    // }, [])

    const toolbarConfig = { }
    const editorConfig = {
        placeholder: 'Type here...',
        MENU_CONF: {}
    }

    // 及时销毁 editor
    useEffect(() => {
        return () => {
            if (editor == null) return
            editor.destroy()
            setEditor(null)
        }
    }, [editor])

    function customParseVideoSrc(src) {
        if (src.includes('.bilibili.com')) {
            // 转换 bilibili url 为 iframe （仅作为示例，不保证代码正确和完整）
            
            return `<iframe src="${src}" allowfullscreen="true"> </iframe>`
        }
        else if(src.includes('.youtube.com')){
            const arr = src.split('/')
            const vid = arr[arr.length - 1]
            const address = vid.split('v=');
            const id = address[address.length-1]
            return `<iframe src="https://www.youtube.com/embed/${id}" allowfullscreen="true"> </iframe>`
        }
        return src
    }
    
    editorConfig.MENU_CONF['insertVideo'] = {
        onInsertedVideo(videoNode) {
            if (videoNode == null) return
    
            const { src } = videoNode
            console.log('inserted video', src)
        },
        
        parseVideoSrc: customParseVideoSrc, // 也支持 async 函数
    }
    function insertText() {
        if (editor == null) return
        editor.insertText(' hello ')
    }

    function printHtml() {
        if (editor == null) return
        console.log(editor.getHtml())
    }

    return (
        <div className='flex-col'>
            <div>
                <button onClick={insertText}>insert text</button>
                <button onClick={printHtml}>print html</button>
            </div>

            <div style={{ border: '1px solid #ccc', zIndex: 100, marginTop: '15px'}}>
                <Toolbar
                    editor={editor}
                    defaultConfig={toolbarConfig}
                    mode="default"
                    style={{ borderBottom: '1px solid #ccc' }}
                />
                <Editor
                    defaultConfig={editorConfig}
                    
                    value={html}
                    onCreated={setEditor}
                    onChange={editor => setHtml(editor.getHtml())}
                    mode="default"
                    style={{ height: '500px' }}
                />
            </div>
            <div dangerouslySetInnerHTML={{__html:html}}  style={{ marginTop: '15px' }}>
                
                
            </div>
            
            
        </div>
    )
}
