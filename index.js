import marked from 'marked';

class NostraMarkdownEditor {
  constructor(textareaId, previewId) {
    this.textarea = document.getElementById(textareaId);
    this.preview = document.getElementById(previewId);

    this.init();
  }

  init() {
    this.textarea.addEventListener('input', () => {
      const markdownText = this.textarea.value;
      this.preview.innerHTML = marked(markdownText);
    });
  }
}

export default NostraMarkdownEditor;
