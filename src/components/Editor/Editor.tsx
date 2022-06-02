
import classes from "./Editor.module.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import parse from "html-react-parser";
import { useState, Dispatch, SetStateAction} from "react";



interface EditorProps {
handleEditorChange:Dispatch<SetStateAction<string>>
}



const Editor:React.FC<EditorProps> = ({handleEditorChange}) =>{

  const modules = {
    toolbar: 
    
    [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };



  return (
    <div className={classes.layout}>
      <ReactQuill
        modules={modules}
        theme='snow'
        onChange={handleEditorChange}
        placeholder="compose here"
        className= {`ql-container ql-editor ${classes.editor}`}
       
      />
      {/* <p>{value}</p>
      {parse(value)} */}
    </div>
  );
}
export default Editor;
