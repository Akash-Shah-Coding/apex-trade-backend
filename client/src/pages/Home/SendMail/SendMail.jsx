import React, { useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import 'tinymce/skins/ui/oxide-dark/skin.min.css'; // Import the dark skin CSS
import 'tinymce/skins/ui/oxide-dark/content.min.css'; // Import the dark content CSS

const SendMail = () => {
  const handleEditorChange = (content, editor) => {
    console.log('Content was updated:', content);
  };

  return (
    <Editor
      apiKey="rgk2uh5e6vxovapmaqou424l5v5k46r9fpc6gjzla2zwdc1p"
    //   initialValue="<p>This is the initial content of the editor</p>"
      init={{
        height: 700,
        menubar: true,
        skin: 'oxide-dark',  // Apply dark mode skin
        content_css: 'dark', // Apply dark mode content CSS
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount'
        ],
        toolbar:
          'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help'
      }}
      onEditorChange={handleEditorChange}
    />
  );
};

export default SendMail;
