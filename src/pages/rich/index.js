import React,{useState,useEffect} from 'react'
import {Card, Button, Modal} from 'antd'
import {Editor} from 'react-draft-wysiwyg'
import draftjs from 'draftjs-to-html'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

function RichText(){
    const [showRichText,setShowRichText] = useState(false)
    const [editorContent,setEditorContent] = useState('')
    const [editorState,setEditorState] = useState('')

    return (
        <div>
            <Card>
                <Button type="primary" onClick={()=>setEditorState('')}>清空内容</Button>
                <Button type="primary" onClick={()=>setShowRichText(true)} style={{marginLeft: 10}}>获取html文本</Button>
            </Card>
            <Card title="富文本编辑器">
                <Editor 
                    editorState={editorState}
                    onEditorStateChange={e=>setEditorState(e)}
                    onContentStateChange={e=>setEditorContent(e)}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                />
            </Card>
            <Modal 
                title="富文本"
                visible={showRichText}
                onCancel={() =>setShowRichText(false)}
                footer={null}>
                {draftjs(editorContent)}
            </Modal>
        </div>
    )
}

export default RichText

// export default class RichText extends React.Component{
//     state = {
//         showRichText: false,
//         editorContent: '',
//         editorState: ''
//     }
//     handleClearContent = () => {
//         this.setState({
//             editorState: ''
//         })
//     }
//     handleGetText = () => {
//         this.setState({
//             showRichText: true
//         })
//     }
//     onEditorStateChange = (editorState) => {
//         this.setState({
//             editorState
//         })
//     }
//     onEditorChange = (editorContent) => {
//         this.setState({
//             editorContent
//         })
//     }
//     render(){
//         const { editorState, editorContent } = this.state;
//         return (
//             <div>
//                 <Card>
//                     <Button type="primary" onClick={this.handleClearContent}>清空内容</Button>
//                     <Button type="primary" onClick={this.handleGetText} style={{marginLeft: 10}}>获取html文本</Button>
//                 </Card>
//                 <Card title="富文本编辑器">
//                     <Editor 
//                         editorState={editorState}
//                         onEditorStateChange={this.onEditorStateChange}
//                         onContentStateChange={this.onEditorChange}
//                         toolbarClassName="toolbarClassName"
//                         wrapperClassName="wrapperClassName"
//                         editorClassName="editorClassName"
//                         onEditorStateChange={this.onEditorStateChange}
//                     />
//                 </Card>
//                 <Modal 
//                     title="富文本"
//                     visible={this.state.showRichText}
//                     onCancel={() =>{
//                         this.setState({
//                             showRichText: false
//                         })
//                     }}
//                     footer={null}>
//                     {draftjs(this.state.editorContent)}
//                 </Modal>
//             </div>
//         )
//     }
// }